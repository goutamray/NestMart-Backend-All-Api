import express from "express";
import { 
  createNewProductSize, 
  getAllProductSize, 
  getSingleProductSize,
  deleteProductSize,
  updateProductSize 
} from "../comtrollers/productSizeController.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/", createNewProductSize); 
router.get("/", getAllProductSize);        
router.get("/:id", getSingleProductSize); 
router.delete("/:id", deleteProductSize); 
router.patch("/:id", updateProductSize);  


// export default router 
export default router;
















