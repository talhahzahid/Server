import mongoose from "mongoose";

const userMessageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Full name must be at least 3 characters"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
      // trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      // trim: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"],
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      minlength: [2, "Company name must be at least 2 characters"],
      maxlength: [100, "Company name cannot exceed 100 characters"],
      // trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [5, "Message must be at least 5 characters"],
      maxlength: [1000, "Message cannot exceed 1000 characters"],
      // trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserMessage", userMessageSchema);
