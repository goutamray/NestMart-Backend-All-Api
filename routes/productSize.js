
import express from "express";
import {
  createProductSize,
  deleteProductSize,
  getAllProductSize,
  getSingleProductSize,
  updateProductSize
} from "../controllers/productSizeController.js";

// init router from express  
const router = express.Router(); 

// routes 
router.post("/", createProductSize);
router.get("/", getAllProductSize);       
router.get("/:id", getSingleProductSize);  
router.delete("/:id", deleteProductSize); 
router.patch("/:id", updateProductSize);


// export default router 
export default router;

