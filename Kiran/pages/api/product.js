// pages/api/products.js

export default async function handler(req, res) {
    const { query } = req.query; // Get the search query from the request
    
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }
  
    try {
      // Example: Replace with your actual API URL
      const response = await fetch(`https://fakestoreapi.com/products?search=${query}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API");
      }
  
      const data = await response.json();
      return res.status(200).json(data); // Return the fetched product data
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  