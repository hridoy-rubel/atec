import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
      unique: true,
    },

    cadetName: {
      type: String,
      required: [true, "Cadet name is required"],
      minlength: [2, "Full name must be at least 2 characters long"],
    },

    cadetNo: {
      type: Number,
      required: [true, "Cadet number is required"],
      min: [1, "Cadet number must be at least 1"],
    },

    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Full name must be at least 3 characters long"],
    },

    college: {
      type: String,
      required: [true, "College is required"],
      minlength: [3, "College must be at least 3 characters long"],
    },

    passoutYear: {
      type: Number,
      required: [true, "Passout year is required"],
      min: [1957, "The minimum passout year should be 1957"],
    },

    mobileNo: { type: String },
    image: { type: String, default: "" },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [5, "Password must be at least 5 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || model("User", UserSchema);

export default User;
