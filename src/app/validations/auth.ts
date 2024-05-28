import { z } from "zod";

export const registerFormSchema = z.object({
  // username: z.string().min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().min(5, {
    message: "Password must be at least 4 characters.",
  }),
  confirmPassword: z.string().min(5, {
    message: "confirmPassword must be at least 4 characters.",
  }),
  fullname: z.string().min(2, {
    message: "fullname must be at least 2 characters.",
  }),
  cadetname: z.string().min(2, {
    message: "cadetname must be at least 2 characters.",
  }),
  cadetno: z.string().min(2, {
    message: "cadetno must be at least 2 characters.",
  }),
  college: z.string().min(2, {
    message: "college must be at least 2 characters.",
  }),
  passoutyear: z.string().min(2, {
    message: "passoutyear must be at least 2 characters.",
  }),
});

// LoginForm
export const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});
