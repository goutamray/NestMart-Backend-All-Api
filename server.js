import dotenv from "dotenv";
import express from "express";
import colors from "colors"; 

import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

// enviroment variable
dotenv.config();
 
// port config 
const PORT = process.env.PORT || 6060 

// init express 
const app = express();

// set middlewares  
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extends : false }));
app.use(cors({
  origin : ["http://localhost:3000", "http://localhost:3001"],
  credentials : true,
}));


// static folder 
app.use(express.static("public"));

// use cookie parser 
app.use(cookieParser());



// listen server
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`.bgGreen.black);
});




