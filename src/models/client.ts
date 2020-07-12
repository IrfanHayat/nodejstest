import { Document, Schema, Model, model } from "mongoose";

const clientSchema = new Schema({
  id: { type: String },

  clientName: { type: String },
  companyId: { type: String },
});

export interface IClient {
  id?: string;

  clientName?: string;
  companyId?: string;
}

export interface IClientModel extends IClient, Document {}

export const Client: Model<IClientModel> = model<IClientModel>(
  "Client",
  clientSchema
);
export default Client;
