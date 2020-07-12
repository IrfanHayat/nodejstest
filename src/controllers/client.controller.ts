import * as ClientServices from "../service/client.service";

export const addClient = async (req, res, next) => {
  const { id, clientName, companyId } = req.body;
  console.log("Hi I am there");
  let clientData = { id, clientName, companyId };
  let savedClient = await ClientServices.addClient(clientData);
  res.json(savedClient);
};



export const updateClient = async (req, res, next) => {
  const { id, clientName, companyId } = req.body;
  console.log("Hi I am there");
  let {_id}=req.params
  let clientData = { id, clientName, companyId };
  let savedClient = await ClientServices.updateClient(clientData,_id);
  res.json(savedClient);
};
