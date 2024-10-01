import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

/**
 * @DESC  GET ALL SEARCH PRODUCT
 * @METHOD GET
 * @ROUTE /api/v1/search
 * @ACCESS PUBLIC 
 */
export const getAllSearchProduct = asyncHandler(async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    // Perform search on name, brand, and catName fields
    const items = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { brand: { $regex: query, $options: "i" } },
        { catName: { $regex: query, $options: "i" } },
      ],
    });

    if (items.length === 0) {
      return res.status(404).json({ message: "No products found matching your query" });
    }

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
