"use server";

import { defaultSession, handleError, sessionOptions } from "@/lib/utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import bcrypt from "bcryptjs";
import { getIronSession } from "iron-session";
import { SessionData } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type RegisterUserParams = {
  email: string;
  password: string;
  fullname: string;
  cadetname: string;
  cadetno: string;
  college: string;
  passoutyear: string;
  confirmPassword: string;
};

export type LoginUserParams = {
  username: string;
  password: string;
};

export const RegisterUser = async ({
  email,
  password,
  fullname,
  cadetname,
  cadetno,
  college,
  passoutyear,
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
      $or: [{ email: email }],
    });

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      fullname,
      cadetname,
      cadetno,
      college,
      passoutyear,
      password: hashedPassword,
      confirmPassword,
      image: "",
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
}: LoginUserParams): Promise<{
  message: "invalid-input" | "not-exists" | "error" | "success";
  data?: any;
}> => {
  const session = await getSession();

  try {
    if (!username || !password) {
      return { message: "invalid-input" };
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ username });

    if (!existingUser) return { message: "not-exists" };

    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (!isMatched) return { message: "not-exists" };

    const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

    if (!TOKEN_SECRET_KEY) {
      throw new Error(
        "TOKEN_SECRET_KEY is not defined in the environment variables."
      );
    }

    session.userId = existingUser._id;
    session.username = existingUser.username;
    session.email = existingUser.email;
    session.image = existingUser.image;
    session.isLoggedIn = true;

    await session.save();

    return { message: "success" };
  } catch (error) {
    handleError("Error Registering User: ", error);
    return { message: "error" };
  }
};

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session?.isLoggedIn) {
    session.isLoggedIn = defaultSession?.isLoggedIn;
  }

  return session;
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
