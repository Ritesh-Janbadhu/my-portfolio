"use client";

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topSection}>
          <div className={styles.brandSide}>
            <h2 className={styles.logo}>RJ<span>.</span></h2>
            <p className={styles.tagline}>
              Crafting immersive narratives and <br /> 
              balancing complex game economies. 
            </p>
          </div>
          
          <div className={styles.linksSide}>
            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Contact</span>
              <a href="mailto:riteshjanbandhu10@gmail.com" className={styles.link}>Email</a> 
              {/* <a href="tel:+919673779109" className={styles.link}>+91-9673779109</a>  */}
            </div>
            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Social</span>
              <a href="https://linkedin.com/in/ritesh-janbandhu-rj" target="_blank" className={styles.link}>LinkedIn</a> 
              {/* <a href="https://itsriteshportfolio.framer.website/" target="_blank" className={styles.link}>Framer</a>  */}
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {currentYear} Ritesh Janbandhu. All rights reserved. 
          </div>
          <div className={styles.status}>
            <span className={styles.pulse}></span> Available for new opportunities
          </div>
        </div>

      </div>
    </footer>
  );
}