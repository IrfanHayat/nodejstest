// controllers

import * as companyController from "./controllers/company.controller";
import * as clientController from "./controllers/client.controller";
import * as sitesController from "./controllers/sites.controller";
import * as adminController from "./controllers/admin.contoller";
import * as workerController from "./controllers/worker.controller";

export const route = (server) => {
  // auth

  server.get("/", (req, res) => {
    res.send({
      hello: "world",
    });
  });

  server.post("/addCompany", companyController.addCompany);
  server.post("/addClient", clientController.addClient);
  server.post("/addAdmin", adminController.addAdmin);
  server.post("/addSites", sitesController.addSites);
  server.post("/addWorker", workerController.addWorkers);

  server.get("/getReports", adminController.getReport);
};
