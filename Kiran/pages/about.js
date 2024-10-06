// pages/about.js

import Head from 'next/head';
import styles from '../styles/About.module.css'; // Create a CSS module for styling

const About = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Our Product Page</title>
                <meta name="description" content="Learn more about our product listing page and its features." />
            </Head>
            <h1 className={styles.title}>About Our Product Listing Page</h1>
            <p className={styles.description}>
                Welcome to our product listing page! Here, you can browse through a wide range of products available
                for purchase. Our aim is to provide you with a seamless shopping experience, allowing you to find
                the products you love at the best prices.
            </p>
            
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Features</h2>
                <ul className={styles.featuresList}>
                    <li>📦 Wide selection of products across various categories.</li>
                    <li>🛒 Easy navigation to find products quickly.</li>
                    <li>🔍 Search functionality for specific items.</li>
                    <li>⭐ User reviews and ratings to help you make informed decisions.</li>
                    <li>⚡ Fast and secure checkout process.</li>
                </ul>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Benefits</h2>
                <p className={styles.benefitsDescription}>
                    Our product listing page is designed with you in mind. By offering a variety of products and
                    a user-friendly interface, we ensure that your shopping experience is both enjoyable and
                    efficient. You can compare products, read reviews, and make informed choices without any hassle.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.missionDescription}>
                    Our mission is to connect customers with quality products while providing excellent service. We
                    strive to continually improve our platform and expand our offerings to meet the diverse needs of
                    our users.
                </p>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Get in Touch</h2>
                <p>If you have any questions or feedback, feel free to <a href="/contact" className={styles.contactLink}>contact us</a>.</p>
            </section>
        </div>
    );
};

export default About;
