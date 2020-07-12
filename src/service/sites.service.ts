import SitesSchema from "../models/sites";
import * as moment from "moment";

export const addSites = async (siteData) => {
  let sites = await SitesSchema.findOne({});

  if (sites) {
    return { message: "Sites already Exist" };
  } else {
    const Sites = new SitesSchema({
      id: siteData.id,
      companyId: siteData.companyId,
      clientId: siteData.clientId,
      siteName: siteData.siteName,
      startingHour: moment(siteData.startingHour, "HH:mm", true),
      endingHour: moment(siteData.endingHour, "HH:mm", true),
    });
    let SitesSaved = await Sites.save();
    if (SitesSaved) {
      return SitesSaved;
    } else {
      return { message: "Error occured" };
    }
  }
};
