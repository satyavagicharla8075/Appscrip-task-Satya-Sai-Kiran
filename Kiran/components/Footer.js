// Footer.js
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa, faCcMastercard, faCcPaypal, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribe}>
        <h2>BE THE FIRST TO KNOW</h2>
        <p>Sign up for updates from mettā muse.</p>
        <form>
          <input type="email" placeholder="Enter your e-mail..." required />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.company}>
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.quickLinks}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettasmuse.com</p>
          <h3>CURRENCY</h3>
          <p>USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>

        <div className={styles.socialMedia}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        <div className={styles.paymentMethods}>
          <h3>mettā muse ACCEPTS</h3>
          <div className={styles.paymentIcons}>
            <FontAwesomeIcon icon={faCcVisa} size="2x" />
            <FontAwesomeIcon icon={faCcMastercard} size="2x" />
            <FontAwesomeIcon icon={faCcPaypal} size="2x" />
            <FontAwesomeIcon icon={faCcAmex} size="2x" />
          </div>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>Copyright © 2023 mettā muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
