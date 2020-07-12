import { Document, Schema, Model, model } from "mongoose";

const adminSchema = new Schema({
  id: { type: String },
  adminName: { type: String },
});

export interface IAdmin {
  id?: string;
  adminName?: string;
}

export interface IAdminModel extends IAdmin, Document {}

export const Admin: Model<IAdminModel> = model<IAdminModel>(
  "Admin",
  adminSchema
);
export default Admin;
