// pages/stories.js

import Head from 'next/head';
import styles from '../styles/Stories.module.css'; // Create a CSS module for styling

const stories = [
    {
        id: 1,
        title: 'A Journey of Discovery',
        content: 'Using this product has transformed my daily routine. I was able to discover new ways to enhance my productivity and organization. The features are intuitive and user-friendly, making it easy to navigate.',
        author: 'Jane Doe',
    },
    {
        id: 2,
        title: 'Customer Service Excellence',
        content: 'I had an issue with my order, and the customer service team went above and beyond to help me. Their prompt response and helpful attitude made the entire experience pleasant.',
        author: 'John Smith',
    },
    {
        id: 3,
        title: 'A Game Changer!',
        content: 'This product has completely changed the way I approach my work. The innovative design and functionality have saved me so much time and effort. I can’t imagine my life without it now!',
        author: 'Emily Johnson',
    },
];

const Stories = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Customer Stories</title>
                <meta name="description" content="Read inspiring stories from our customers." />
            </Head>
            <h1 className={styles.title}>Customer Stories</h1>
            <p className={styles.description}>Hear from our customers about their experiences with our products!</p>
            <div className={styles.storiesGrid}>
                {stories.map((story) => (
                    <div key={story.id} className={styles.storyCard}>
                        <h2 className={styles.storyTitle}>{story.title}</h2>
                        <p className={styles.storyContent}>{story.content}</p>
                        <p className={styles.author}>- {story.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stories;
