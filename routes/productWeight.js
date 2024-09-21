import express from "express";
import {
    createNewProductWeight,
    deleteProductWeight,
    getAllProductWeight,
    getSingleProductWeight,
    updateProductWeight
} from "../controllers/productWeightController.js";


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















