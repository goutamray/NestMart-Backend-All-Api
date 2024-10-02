



import asyncHandler from "express-async-handler";
import Message from "../models/Message.js";

/**
 * @DESC  GET ALL MESSAGE
 * @METHOD GET
 * @ROUTE /api/v1/order
 * @ACCESS PUBLIC 
 * 
 */
export const getAllMessage = asyncHandler(async(req, res) => {
  // get all message
  const messageList = await Message.find();

  // check message 
  if (!messageList) {
    return res.status(404).json({ messageList : "", message : "Message Not Found" });
  }

// response 
return res.status(200).json({ messageList,  message : "Get All Message"});
});



/**
 * @DESC CREATE MESSAGE
 * @METHOD POST
 * @ROUTE /api/v1/message/create
 * @ACCESS PUBLIC 
 * 
 */
export const createMessage = asyncHandler(async(req, res) => {
  // get form data 
  const { name, email, subject, message } = req.body;

  if (!name || !subject || !email || !message) {
     res.status(400).json({ message : "All fields are Required" })
  };

  // create new message 
  const newMessage = await Message.create({ name, email, subject, message });

  // save data 
  return res.status(201).json({ newMessage , message : "Message Created Successfull"})
})




/**
 * @DESC DELETE MESSAGE
 * @METHOD DETETE
 * @ROUTE /api/v1/message/:id 
 * @ACCESS PUBLIC 
 * 
 */
export const deleteMessage = asyncHandler(async(req, res) => {
  // get params 
  const { id } = req.params;

  // delete message data 
  const deleteMessage = await Message.findByIdAndDelete(id);

  // check message 
  if (!deleteMessage) {
    return res.status(404).json({ message : "Message not found" })
  }


 // send response 
 return res.status(200).json({ deleteMessage,  message : "Message Deleted Successfull"})
})


/**
 * @DESC UPDATE MESSAGE
 * @METHOD PUT / PATCH
 * @ROUTE /api/v1/message/:id 
 * @ACCESS PUBLIC 
 * 
 */
export const updateMessage = asyncHandler(async(req, res) => {
  // get params 
  const { id } = req.params;

   // get form data 
   const { name, email, subject, message } = req.body;
  
   // update message
   const messageUpdate = await Message.findByIdAndUpdate(
    id, 
    { name, email, subject, message }, 
    {new : true});

   return res.status(200).json({ messageUpdate,  message : "Message Updated Successfull"}); 
}); 





















