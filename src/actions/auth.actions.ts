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

export type LoginUserParams = {
  username: string;
  password: string;
};

export const RegisterUser = async ({
  username,
  email,
  password,
  confirmPassword,
}: RegisterUserParams): Promise<
  "invalid-input" | "exists" | "error" | "success"
> => {
  try {
    if (password !== confirmPassword) {
      return "invalid-input";
    }

    await connectToDatabase();

    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (user) {
      return "exists";
    }

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
};

export const LoginUser = async ({
  username,
  password,
}: LoginUserParams): Promise<
  "invalid-input" | "not-exists" | "error" | "success"
> => {
  try {
    if (!username || !password) {
      return "invalid-input";
    }

    await connectToDatabase();

    const user = await User.findOne({
      $and: [{ username: username }, { password: password }],
    });

    return user ? "success" : "not-exists";
  } catch (error) {
    console.log("the error: ", error);
    handleError("Error Registering User: ", error);
    return "error";
  }
};
