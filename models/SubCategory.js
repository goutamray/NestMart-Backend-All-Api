import mongoose from "mongoose";

// create category schema 
const subCategorySchema = mongoose.Schema({
  name : {
    type: String,
    trim : true,
  }
},
{
  timestamps : true,
})

//export default 
export default mongoose.model("SubCategory", subCategorySchema);















