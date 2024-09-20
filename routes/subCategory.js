
import express from "express";
import { 
  createNewSubCategory, 
  deleteSubCategory, 
  getAllSubCategory,
  getSingleSubCategory,
  updateSubCategory 
} from "../comtrollers/subCategoryController.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/", createNewSubCategory); 
router.get("/", getAllSubCategory);     
router.get("/:id", getSingleSubCategory);  
router.delete("/:id", deleteSubCategory); 
router.patch("/:id", updateSubCategory); 


// export default router 
export default router;












