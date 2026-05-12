"use client";

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Cubes Pattern */}
      <div className={styles.cubePattern}></div>

      <div className={styles.container}>
        <div className={styles.standardCard}>
          <div className={styles.cardGrid}>
            
            {/* Left Column: Image & Highlights */}
            <div className={styles.visualColumn}>
              <div className={styles.photoWrapper}>
                <img src="/ritesh passport photo.png" alt="Ritesh Janbandhu" className={styles.profilePic} />
              </div>
              <div className={styles.statBox}>
                <span className={styles.expText}>2+ YEARS EXPERIENCE</span>
              </div>
            </div>

            {/* Right Column: Branding & About */}
            <div className={styles.infoColumn}>
              <div className={styles.badgeRow}>
                <span className={styles.roleTag}>GAME DESIGNER</span>
                <div className={styles.statusDot}></div>
              </div>

              <h1 className={styles.userName}>Ritesh Janbandhu</h1>
              
              <div className={styles.aboutContent}>
                <h3 className={styles.sectionTitle}>About Myself</h3>
                <p className={styles.bio}>
                  I am a game designer with 2 years of experience designing quest systems, 
                  progression-driven narratives, and immersive gameplay. 
                  I focus on player engagement and iterative design based on feedback.
                </p>
              </div>

              <div className={styles.ctaRow}>
                {/* Link to Resume Page */}
                <Link href="/resume" className={styles.btnGold}>
                  Explore Portfolio
                </Link>

                {/* Direct Gmail Link */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshjanbandhu10@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.btnOutline}
                >
                  Contact
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
