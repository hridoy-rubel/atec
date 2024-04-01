"use server";

import { handleError } from "@/lib/utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export type RegisterUserParams = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function RegisterUser({
  username,
  email,
  password,
  confirmPassword,
}: RegisterUserParams): Promise<
  "invalid-input" | "exists" | "error" | "success"
> {
  try {
    if (password !== confirmPassword) {
      return "invalid-input";
    }

    await connectToDatabase();

    const newUser = await User.create({
      email,
      username,
      password,
    });

    return newUser ? "success" : "error";
  } catch (error) {
    handleError("Error Registering User: ", error);
    return "error";
  }
}
