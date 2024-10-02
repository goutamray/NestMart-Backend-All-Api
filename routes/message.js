
import express from "express";
import { 
  createMessage, 
  deleteMessage, 
  getAllMessage,
  updateMessage
} from "../controllers/messageController.js";



// init router from express  
const router = express.Router(); 

// routes 
router.post("/create", createMessage);
router.get("/", getAllMessage);       
router.delete("/:id", deleteMessage); 
router.patch("/:id", updateMessage);   


// export default router 
export default router;


