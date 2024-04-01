"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";
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
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";
import { registerFormSchema } from "@/app/validations/auth";
import { z } from "zod";
import { RegisterUser } from "@/actions/auth.actions";

export function RegisterForm(): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(formData: z.infer<typeof registerFormSchema>): void {
    startTransition(async () => {
      try {
        const message = await RegisterUser({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });

        switch (message) {
          case "exists":
            toast({
              title: "User with this email address already exists",
              description: "If this is you, please sign in instead",
              variant: "destructive",
            });
            form.reset();
            break;
          case "success":
            toast({
              title: "Success!",
              description: "Check your inbox to verify your email address",
            });
            router.push("/signin");
            break;
          default:
            toast({
              title: "Something went wrong",
              description: "Please try again",
              variant: "destructive",
            });

            console.error(message);
        }
      } catch (error) {
        console.error(error);
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
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
                <Input placeholder="rouzex" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johnsmith@gmail.com" {...field} />
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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
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
              <span>Register...</span>
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
