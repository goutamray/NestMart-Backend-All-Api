import express from "express";
import { 
  createNewProductWeight, 
  getAllProductWeight, 
  getSingleProductWeight,
  deleteProductWeight,
  updateProductWeight 
} from "../comtrollers/productWeightController.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/", createNewProductWeight); 
router.get("/", getAllProductWeight);        
router.get("/:id", getSingleProductWeight); 
router.delete("/:id", deleteProductWeight); 
router.patch("/:id", updateProductWeight);  


// export default router 
export default router;















