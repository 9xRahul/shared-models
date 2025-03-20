import { Document, Types } from "mongoose";

/**
 * Employee Interface
 */
export interface IEmployee extends Document {
  authId: Types.ObjectId;
  username: string;
  usertype: string;
  address?: string;
  email?: string;
  mobile?: number;
  mobileIsVerified: boolean;
  emergencyNumber?: number;
  bloodGroup?: string;
  profilePic?: Types.ObjectId;
}

/**
 * ProfilePic Interface
 */
export interface IProfilePic extends Document {
  publicId: string;
  orignalName: string;
  mimeType: string;
  url: string;
  userId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
