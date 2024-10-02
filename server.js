import dotenv from "dotenv";
import express from "express";
import colors from "colors"; 

import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

import { mongoDbConnection } from "./config/mongoDb.js";

import productRouter from "./routes/product.js"; 
import categoryRouter from "./routes/category.js"; 
import subCategoryRouter from "./routes/subCategory.js"; 
import sliderRouter from "./routes/slider.js"; 

import productRamRouter from "./routes/productRam.js"; 
import productWeightRouter from "./routes/productWeight.js"; 
import productSizeRouter from "./routes/productSize.js"; 
import productBrandRouter from "./routes/brand.js"; 
import productReviewRouter from "./routes/productReview.js"; 
import userRouter from "./routes/user.js"; 
import cartRouter from "./routes/cart.js"; 
import wishlistRouter from "./routes/wishlist.js"; 
import orderRouter from "./routes/order.js"; 
import searchRouter from "./routes/search.js"; 
import messageRouter from "./routes/message.js"; 


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


// routes 
app.use("/api/v1/product", productRouter);  
app.use("/api/v1/category", categoryRouter);  
app.use("/api/v1/subCategory", subCategoryRouter);  
app.use("/api/v1/slider", sliderRouter);  
app.use("/api/v1/productRam", productRamRouter);  
app.use("/api/v1/productWeight", productWeightRouter);  
app.use("/api/v1/productSize", productSizeRouter);  
app.use("/api/v1/brand", productBrandRouter);  
app.use("/api/v1/review", productReviewRouter);  
app.use("/api/v1/user", userRouter);  
app.use("/api/v1/cart", cartRouter);  
app.use("/api/v1/wishlist", wishlistRouter);  
app.use("/api/v1/order", orderRouter);  
app.use("/api/v1/search", searchRouter); 
app.use("/api/v1/message", messageRouter); 

// listen server
app.listen(PORT, () => {
  mongoDbConnection(),
  console.log(` Server is running on port ${PORT}`.bgGreen.black);
});




