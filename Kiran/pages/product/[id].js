// pages/product/[id].js

import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer'; // Adjust path as necessary
import styles from '../../styles/ProductDetail.module.css'; // Ensure this file exists
import axios from 'axios'; // Import axios for making HTTP requests

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    // Fetch product data based on the id
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const product = res.data;

    return {
      props: { product }, // Return the product data as props
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true, // Return a 404 page if there's an error
    };
  }
}

const ProductDetail = ({ product }) => {
  // Check if product data is valid
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={styles.container}> {/* Add the container here */}
      <div className={styles.productDetail}>
        <Head>
          <title>{product.title}</title>
          <meta name="description" content={product.description} />
        </Head>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p className={styles.price}>Price: ${product.price}</p>
        {/* Add more product details as needed */}
      </div>
      <Footer /> {/* Move footer outside of productDetail */}
    </div>
  );
};

export default ProductDetail;
