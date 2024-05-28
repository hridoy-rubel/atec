// saveUserData.ts (Function to Save Data)
import { connectToDatabase } from "..";
import User from "../userSchema";
import { UserData } from "@/types";

const saveUserData = async (userData: UserData) => {
  await connectToDatabase();

  const user = new User(userData);

  try {
    const savedUser = await user.save();
    console.log("User saved successfully:", savedUser);
    return savedUser;
  } catch (error: any) {
    if (error.code === 11000) {
      console.error("Duplicate key error:", error.keyValue);
      throw new Error(`Duplicate key error: ${JSON.stringify(error.keyValue)}`);
    } else {
      console.error("Error saving user:", error);
      throw new Error("Error saving user");
    }
  }
};

const userData: UserData = {
  cadetNo: "12345",
  confirmPassword: "securepassword",
  email: "nurshad886@gmail.com",
};

saveUserData(userData)
  .then((savedUser) => console.log("Data saved:", savedUser))
  .catch((error) => console.error("Error:", error));
