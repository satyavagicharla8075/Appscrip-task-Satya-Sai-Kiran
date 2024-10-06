// pages/search.js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/products?query=${query}`); // Fetch products from the custom API endpoint
          const data = await res.json();
          setProducts(data); // Set the fetched data
        } catch (error) {
          console.error("Failed to fetch products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
