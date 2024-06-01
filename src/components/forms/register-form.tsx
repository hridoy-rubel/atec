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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";
import { registerFormSchema } from "@/validations/auth";
import { z } from "zod";
import { RegisterUser } from "@/actions/auth.actions";
import { showToast } from "@/lib/toast";
import { useTheme } from "next-themes";

import { CollegeType } from "@/types";
import { CADET_COLLEGES } from "../shared/membership-form";

const RegisterForm = (): JSX.Element => {
  const router = useRouter();
  const { theme } = useTheme();

  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      cadetName: "",
      cadetNo: "",
      fullName: "",
      college: "",
      passoutYear: undefined,
      mobileNo: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(formData: z.infer<typeof registerFormSchema>): void {
    startTransition(async () => {
      try {
        console.log("form data: ", formData);
        const message = await RegisterUser({
          email: formData.email,
          cadetName: formData.cadetName,
          cadetNo: formData.cadetNo,
          fullName: formData.fullName,
          college: formData.college,
          passoutYear: formData.passoutYear,
          mobileNo: formData.mobileNo,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });

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
    <main>
      <Form {...form}>
        <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
          <div className="mb-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johnsmith@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage className=" sm:text-sm" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-2">
            <div>
              <FormField
                control={form.control}
                name="cadetNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cadet No</FormLabel>
                    <FormControl>
                      <Input placeholder="cadet No" {...field} type="number" />
                    </FormControl>
                    <FormMessage className="pt-2 sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="cadetName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cadet Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Cadet Name" {...field} />
                    </FormControl>
                    <FormMessage className="sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="fullName" {...field} />
                    </FormControl>
                    <FormMessage className="sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="college"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="collage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CADET_COLLEGES?.map((college: CollegeType) => (
                          <SelectItem value={college.value} key={college.value}>
                            {college.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="mobileNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input placeholder="01*********" {...field} />
                    </FormControl>
                    <FormMessage className="pt-2 sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="passoutYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Passout Year</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Passout Year"
                        {...field}
                        type="number"
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormMessage className="pt-2 sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage className="pt-2 sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Confirm Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="pt-2 sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button disabled={isPending} className="mt-8 w-full">
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
    </main>
  );
};

export default RegisterForm;
