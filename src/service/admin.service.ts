import AdminSchema from "../models/admin";
import WorkersSchema from "../models/workers";
import SitesSchema, { Sites } from "../models/sites";
import * as moment from 'moment';
import { worker } from "cluster";

export const addAdmin = async () => {
  let admin = await AdminSchema.find({ adminName: "Ali" });
  
  if (admin) {
    return { message: "Admin already Exist" };
  } else {
    const Admin = new AdminSchema({
      id: "1",
      adminName: "Admin",
    });
    let adminSaved = await Admin.save();
    if (adminSaved) {
      return adminSaved;
    } else {
      return { message: "Error occured" };
    }
  }
};

export const getWorkerReports = async () => {
  let count = await WorkersSchema.find({ isActive: false }).count();
  
  let hour=await SitesSchema.findOne({})
  let workerHours = await WorkersSchema.findOne({  })
  var __startTime = moment(workerHours.startingDutyHour).format();
  var __endTime = moment(workerHours.endingDutyHour).format();

  var __duration = moment.duration(moment(__endTime).diff(__startTime));
  var __hours = __duration.asHours();
  console.log(__hours);
  let lateWorkers = await WorkersSchema.find({ endingDutyHour: { $gt: hour.endingHour }}).count(); 
  
  
  if (count) {
    return { message: `Absent workers are ${count} and late workers are ${lateWorkers} and Hours they work ${Math.abs(__hours)}` };
  }

};
