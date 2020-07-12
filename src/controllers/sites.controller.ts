import * as SitesServices from "../service/sites.service";

export const addSites = async (req, res, next) => {
  const {
    id,
    companyId,
    clientId,
    siteName,
    startingHour,
    endingHour,
  } = req.body;
  console.log("Hi I am there");
  let clientData = { id, companyId, clientId, startingHour, endingHour };
  let savedClient = await SitesServices.addSites(clientData);
  res.json(savedClient);
};
