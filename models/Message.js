

import mongoose from "mongoose";

// create message schema 
const messageSchema = mongoose.Schema({
  name : {
    type: String,
    trim : true,
  },
  email : {
    type: String,
    trim : true,
  },
  subject : {
    type : String,
    trim : true,
  },
  message : {
    type : String,
    trim : true,
  } 
},
{
  timestamps : true,
})

//export default 
export default mongoose.model("Message", messageSchema);



