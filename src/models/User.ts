import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: "USER" | "PRO" | "ADMIN";
}

const UserSchema = new Schema<IUser>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["USER", "PRO", "ADMIN"], default: "USER" },
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
