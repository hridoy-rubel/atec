"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { showToast } from "@/lib/toast";
import { useTheme } from "next-themes";

const RegisterForm = (): JSX.Element => {
  const router = useRouter();
  const { theme } = useTheme();

  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      fullname: "",
      cadetname: "",
      cadetno: "",
      college: "",
      passoutyear: "",
      confirmPassword: "",
    },
  });

  function onSubmit(formData: z.infer<typeof registerFormSchema>): void {
    startTransition(async () => {
      try {
        console.log("form data: ", formData);
        const message = await RegisterUser({
          email: formData.email,
          password: formData.password,
          fullname: formData.fullname,
          cadetname: formData.cadetname,
          cadetno: formData.cadetno,
          college: formData.college,
          passoutyear: formData.passoutyear,
          confirmPassword: formData.confirmPassword,
        });

        // console.log("Server response message:", message);

        switch (message) {
          case "exists":
            showToast(
              "error",
              "Sorry! User with this email or username address already exists",
              {
                theme: theme,
              }
            );

            form.reset();
            break;
          case "invalid-input":
            showToast("warning", "Password and Confirm Password do not match", {
              theme: theme,
            });

            form.reset();
            break;

          case "success":
            showToast(
              "success",
              "Your account has been registered successfully!",
              {
                theme: theme,
              }
            );
            router.push("/login");
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
                <PasswordInput placeholder="password" {...field} />
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
                <Input placeholder="Confirm Password" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FullName</FormLabel>
              <FormControl>
                <Input placeholder="fullname" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cadetname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CadetName</FormLabel>
              <FormControl>
                <Input placeholder="cadetname" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cadetno"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CadetNo</FormLabel>
              <FormControl>
                <Input placeholder="cadetno" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="college"
          render={({ field }) => (
            <FormItem>
              <FormLabel>College</FormLabel>
              <FormControl>
                <Input placeholder="college" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passoutyear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PassOut Year</FormLabel>
              <FormControl>
                <Input placeholder="passoutyear" {...field} />
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
};

export default RegisterForm;
