import CompanySchema from "../models/company";

export const addCompany = async () => {
  let company = await CompanySchema.findOne({ companyName: "IOT" });
  if (company) {
    return { message: "Company already Exist" };
  } else {
    const Company = new CompanySchema({
      id: "1",
      companyName: "IOT",
    });
    let companySaved = await Company.save();
    if (companySaved) {
      return companySaved;
    } else {
      return { message: "Error occured" };
    }
  }
};
