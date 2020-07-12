import * as CompanyServices from "../service/company.service";

export const addCompany = async (req, res, next) => {
  let savedCompany = await CompanyServices.addCompany();
  res.json(savedCompany);
};
