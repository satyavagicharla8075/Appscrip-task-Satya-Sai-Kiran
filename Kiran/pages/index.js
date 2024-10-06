// pages/index.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Assume you have a CSS module for styling

// Fetch products from the Fake Store API at build time
export async function getServerSideProps() {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    const products = res.data;

    return {
      props: { products },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { products: [] }, // Return an empty array on error
    };
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="This is a product listing page using Fake Store API." />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>Product Listing Page</h1>
        <div className={styles.productsGrid}>
          {products.length > 0 ? (
            products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className={styles.productCard}>
                  <img src={product.image} alt={product.title} />
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
