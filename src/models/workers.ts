import { Document, Schema, Model, model } from "mongoose";

const workerSchema = new Schema({
  id: { type: String },
  clientId: { type: String },
  siteId: { type: String },
  name: { type: String },
  isActive: { type: Boolean },
  date: { type: Date },
  startingDutyHour: { type: Date },
  endingDutyHour: { type: Date },
});

export interface IWorker {
  id?: string;
  clientId?: string;
  siteId?: string;
  name?: string;
  isActive?: boolean;
  date?: Date;
  startingDutyHour?: Date;
  endingDutyHour?: Date;
}

export interface IWorkerModel extends IWorker, Document {}

export const Worker: Model<IWorkerModel> = model<IWorkerModel>(
  "Worker",
  workerSchema
);
export default Worker;
