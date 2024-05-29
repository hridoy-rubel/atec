import { z } from "zod";

export const registerFormSchema = z
  .object({
    email: z.string().email({ message: "Must be a valid email address" }),
    cadetName: z.string().min(2, {
      message: "Cadet Name must be at least 2 characters.",
    }),

    cadetNo: z.string().min(1, {
      message: "Cadet Number must be minimum 1.",
    }),

    fullName: z.string().min(3, {
      message: "fullName must be at least 3 characters.",
    }),

    college: z.string().min(3, {
      message: "college must be at least 3 characters.",
    }),

    passoutYear: z.string().min(4, {
      message: "Passout Year must be at least 1957.",
    }),

    mobileNo: z.string().regex(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/, {
      message: "Mobile number must be a valid phone number.",
    }),

    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
    confirmPassword: z.string().min(5, {
      message: "confirmPassword must be at least 5 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// LoginForm
export const loginFormSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});
