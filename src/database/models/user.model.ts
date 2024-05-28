import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [5, "Password must be at least 5 characters long"],
    },

    confirmPassword: {
      type: String,
      required: [true, "confirmPassword is required"],
      minlength: [5, "confirmPassword must be at least 5 characters long"],
    },

    fullname: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [2, "Full name must be at least 2 characters long"],
    },

    cadetname: {
      type: String,
      required: [true, "Cadet name is required"],
      minlength: [3, "Cadet name must be at least 3 characters long"],
    },

    cadetno: {
      type: String,
      required: [true, "Cadet number is required"],
      minlength: [2, "Cadet number must be at least 2 characters long"],
    },

    college: {
      type: String,
      required: [true, "College is required"],
      minlength: [4, "College must be at least 4 characters long"],
    },

    passoutyear: {
      type: String,
      required: [true, "Passout year is required"],
      minlength: [2, "Passout year must be at least 2 characters long"],
    },

    image: { type: String, default: "" },
    mobileno: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || model("User", UserSchema);

export default User;
