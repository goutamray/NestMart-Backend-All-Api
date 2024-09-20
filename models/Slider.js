import mongoose from "mongoose";

// create brand schema 
const sliderSchema = mongoose.Schema({
  title : {
    type: String,
    trim : true,
  },
  subTitle : {
    type: String,
    trim : true,
  },
  photo : {
    type : String,
    trim : true,
    default : null,
  },
},
{
  timestamps : true,
})

//export default 
export default mongoose.model("Slider", sliderSchema);


