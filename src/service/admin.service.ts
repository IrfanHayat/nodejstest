import AdminSchema from "../models/admin";
import WorkersSchema from "../models/workers";

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
  if (count) {
    return { message: `Absent workers are ${count}` };
  }
  

};
