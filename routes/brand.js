import express from "express";
import { 
  createBrand, 
  getAllBrand, 
  getSingleBrand,
  deleteBrand,
  updateBrand 
} from "../controllers/productBrandController.js";
 import { brandPhotoMulter } from "../utilis/multer.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/", brandPhotoMulter, createBrand);
router.get("/", getAllBrand);        
router.get("/:id", getSingleBrand); 
router.delete("/:id", deleteBrand);  
router.patch("/:id", brandPhotoMulter, updateBrand);


// export default router 
export default router;






















