import { Document, Schema, Model, model } from "mongoose";

const companySchema = new Schema({
  id: { type: String },
  companyName: { type: String },
});

export interface ICompany {
  id?: string;
  companyName?: string;
}

export interface ICompanyModel extends ICompany, Document {}

export const Company: Model<ICompanyModel> = model<ICompanyModel>(
  "Company",
  companySchema
);
export default Company;
