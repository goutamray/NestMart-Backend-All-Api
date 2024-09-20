
import express from "express";
import { 
  createNewProductRam, 
  getAllProductRam, 
  getSingleProductRam,
  deleteProductRam,
  updateProductRam 
} from "../comtrollers/productRamController.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/", createNewProductRam); 
router.get("/", getAllProductRam);        
router.get("/:id", getSingleProductRam); 
router.delete("/:id", deleteProductRam); 
router.patch("/:id", updateProductRam);  


// export default router 
export default router;
















