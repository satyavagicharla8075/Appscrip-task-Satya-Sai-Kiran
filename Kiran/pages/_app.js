// pages/_app.js
import '../styles/globals.css'; // Import your global styles here
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
