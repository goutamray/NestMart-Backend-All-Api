
import asyncHandler from "express-async-handler";
import SubCategory from "../models/SubCategory.js"

/**
 * @DESC  GET ALL SUB CATEGORY
 * @METHOD GET
 * @ROUTE /api/v1/subCategory
 * @ACCESS PUBLIC 
 * 
 */
export const getAllSubCategory = asyncHandler(async(req, res) => {
  // get all sub categories 
  const subCategoryList = await SubCategory.find();

  // check sub category 
  if (!subCategoryList) {
    return res.status(404).json({ subCategoryList : "", message : "Sub Categories Not Found" });
  };

  return res.status(200).json({ subCategoryList,  message : "Get All Sub Category"});
});


/**
 * @DESC GET SINGLE SUB CATEGORY
 * @METHOD GET
 * @ROUTE /api/v1/subCategory/:id 
 * @ACCESS PUBLIC 
 * 
 */
export const getSingleSubCategory = asyncHandler(async(req, res) => {
  // get params 
 const { id } = req.params;

 // find single brand
 const subCategoryData = await SubCategory.findById(id); 

 if (!subCategoryData) {
    return  res.status(404).json({ message : "Single Sub Category Data Not Found"});
 };

 // response 
 return res.status(200).json({ subCategoryData , message : "Get Single Sub Category"})
}); 



/**
 * @DESC CREATE SUB CATEGORY
 * @METHOD POST
 * @ROUTE /api/v1/subCategory
 * @ACCESS PUBLIC 
 * 
 */
export const createNewSubCategory = asyncHandler(async(req, res) => {
  // get form data 
  const { name } = req.body;

  if (!name ) {
    return res.status(400).json({ message : "All fields are Required" })
  };


  // create sub category 
  const newSubCategory = await SubCategory.create({ name });

   // save data 
   return res.status(201).json({ newSubCategory, message : "Sub Category Created Successfull"});
 });  


/**
 * @DESC DELETE SUB CATEGORY
 * @METHOD DETETE
 * @ROUTE /api/v1/subCategory/:id 
 * @ACCESS PUBLIC 
 * 
 */
export const deleteSubCategory = asyncHandler(async(req, res) => {
  // get params 
  const { id } = req.params;

  // delete sub category data 
  const subCategory = await SubCategory.findByIdAndDelete(id);

  // check category
  if (!subCategory) {
    return res.status(404).json({ message : "Sub Category not found" })
  };

   return res.status(200).json({ subCategory,  message : "Sub Category Deleted Successfull"});
});


/**
 * @DESC UPDATE SUB CATEGORY
 * @METHOD PUT / PATCH
 * @ROUTE /api/v1/subCategory/:id 
 * @ACCESS PUBLIC 
 * 
 */
export const updateSubCategory = asyncHandler(async(req, res) => {
  // get params 
  const { id } = req.params;

   // get form data 
   const { name } = req.body;

 // update sub category
  const subCategory = await SubCategory.findByIdAndUpdate(
    id, 
    { name }, 
    {new : true});

   
  return res.status(200).json({subCategory,  message : "Sub Category Updated Successfull"});
});  





















