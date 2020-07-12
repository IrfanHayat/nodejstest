import WorkersSchema from "../models/workers";
import * as moment from "moment";
export const addWorkers = async (workerData) => {
  let workers = await WorkersSchema.findOne({});

  if (workers) {
    return { message: "Worker already Exist" };
  } else {
    const Workers = new WorkersSchema({
      id: workerData.id,
      clientId: workerData.clientId,
      siteId: workerData.siteId,
      name: workerData.name,
      isActive: workerData.isActive,
      date: workerData.date,
      startingDutyHour: moment(workerData.startingDutyHour, "HH:mm", true),
      endingDutyHour: moment(workerData.endingDutyHour, "HH:mm", true),
    });
    let workerSaved = await Workers.save();
    if (workerSaved) {
      return workerSaved;
    } else {
      return { message: "Error occured" };
    }
  }
};
