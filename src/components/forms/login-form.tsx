"use client";

import { LoginUser } from "@/actions/auth.actions";
import { loginFormSchema } from "@/app/validations/auth";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { showToast } from "@/lib/toast";
import { useTheme } from "next-themes";

export function LoginForm(): JSX.Element {
  const { theme } = useTheme();
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(formData: z.infer<typeof loginFormSchema>): void {
    startTransition(async () => {
      try {
        const message = await LoginUser({
          username: formData.username,
          password: formData.password,
        });

        switch (message) {
          case "not-exists":
            showToast("error", "username or password does not exist!", {
              theme: theme,
            });
            form.reset();
            break;
          case "invalid-input":
            showToast("warning", "username of password is missing", {
              theme: theme,
            });

            form.reset();
            break;

          case "success":
            showToast("success", "Successfully logged in!", {
              theme: theme,
            });

            router.push("/");
            break;

          default:
            showToast("error", "Sorry! Something went wrong", {
              theme: theme,
            });

            console.error(message);
        }
      } catch (error) {
        console.error(error);
        showToast("error", "Sorry! Something went wrong", {
          theme: theme,
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <Button disabled={isPending}>
          {isPending ? (
            <>
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
              <span>Login...</span>
            </>
          ) : (
            <span>Continue</span>
          )}
          <span className="sr-only">
            Continue signing up with email and password
          </span>
        </Button>
      </form>
    </Form>
  );
}
