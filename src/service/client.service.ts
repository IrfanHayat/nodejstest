import ClientSchema from "../models/client";

export const addClient = async (clientData) => {
  console.log(clientData);
  let client = await ClientSchema.findOne({});
  console.log(client);
  if (client) {
    return { message: "Client already Exist" };
  } else {
    const Client = new ClientSchema({
      id: clientData.id,
      clientName: clientData.clientName,
      companyId: clientData.companyId,
    });
    let clientSaved = await Client.save();
    if (clientSaved) {
      return clientSaved;
    } else {
      return { message: "Error occured" };
    }
  }
};


export const updateClient=async (clientData,id)=>{
 
 let clientUpdate= await ClientSchema.findOneAndUpdate(
    { id },
    {
      $set: clientData,
    },
  )
  if (clientUpdate){
    return {message:"Update Client Successfull"}
  }else{
    return {message:"Error"}
  }
   

}



