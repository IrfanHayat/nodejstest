import * as AdminServices from "../service/admin.service";

export const addAdmin = async (req, res, next) => {
  let savedAdmin = await AdminServices.addAdmin();
  res.json(savedAdmin);
};

export const getReport = async (req, res, next) => {
  let getReport = await AdminServices.getWorkerReports();
  res.json(getReport);
};
