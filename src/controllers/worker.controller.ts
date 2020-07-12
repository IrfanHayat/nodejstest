import * as WorkersServices from "../service/workers.services";

export const addWorkers = async (req, res, next) => {
  const {
    id,
    clientId,
    siteId,
    name,
    isActive,
    date,
    startingDutyHour,
    endingDutyHour,
  } = req.body;

  let workerData = {
    id,
    clientId,
    siteId,
    name,
    isActive,
    date,
    startingDutyHour,
    endingDutyHour,
  };
  let savedWorkers = await WorkersServices.addWorkers(workerData);
  res.json(savedWorkers);
};
