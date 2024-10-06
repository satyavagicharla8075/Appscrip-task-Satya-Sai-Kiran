// pages/contact.js

import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/ContactUs.module.css'; // Create a CSS module for styling

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Contact us for inquiries." />
            </Head>
            <h1 className={styles.title}>Contact Us</h1>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input} // Add class here
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input} // Add class here
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        className={styles.textarea} // Add class here
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
