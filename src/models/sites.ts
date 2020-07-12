import { Document, Schema, Model, model } from "mongoose";

const sitesSchema = new Schema(
  {
    id: { type: String },
    companyId: { type: String },
    clientId: { type: String },
    sitesName: { type: String },
    startingHour: { type: Date },
    endingHour: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export interface ISites {
  id?: string;
  companyId?: string;
  clientId?: string;
  siteName?: string;
  startingHour?: Date;
  endingHour?: Date;
}

export interface ISitesModel extends ISites, Document {}

export const Sites: Model<ISitesModel> = model<ISitesModel>(
  "Sites",
  sitesSchema
);
export default Sites;
