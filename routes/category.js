
import express from "express";
import { 
  createNewCategory, 
  deleteCategory, 
  getAllCategory,
  getSingleCategory,
  updateCategory 
} from "../comtrollers/categoryController.js";
 import { categoryPhotoMulter } from "../utilis/multer.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/", categoryPhotoMulter, createNewCategory); 
router.get("/", getAllCategory);     
router.get("/:id", getSingleCategory);  
router.delete("/:id", deleteCategory); 
router.patch("/:id", categoryPhotoMulter, updateCategory); 


// export default router 
export default router;









