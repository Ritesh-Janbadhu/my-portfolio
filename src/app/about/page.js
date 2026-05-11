"use client";

import styles from './About.module.css';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <header className={styles.hero}>
          <span className={styles.label}>STRATEGIC DESIGNER</span>
          <h1 className={styles.title}>Merging Business Intelligence with Immersive Design<span>.</span></h1>
        </header>

        {/* Professional Narrative Paragraph Section */}
        <section className={styles.narrativeSection}>
          <div className={styles.paragraphBlock}>
            <p>
              I am a dedicated <strong>Game Designer</strong> with over two years of professional experience in crafting complex gameplay systems and narrative-driven experiences. With a unique academic foundation—holding an <strong>MBA from Dr. Ambedkar Institute of Management Studies</strong> and a specialized certification in <strong>Game Design & Production from Gamer2Maker</strong>—I bridge the gap between creative storytelling and strategic business goals. 
            </p>
            <p>
              My expertise lies in developing comprehensive <strong>Game Design Documents (GDD)</strong>, balancing intricate in-game economies, and designing player-centric progression loops. Currently contributing to the success of <strong>BooBoo Games</strong>, I specialize in cross-functional collaboration, ensuring that every technical implementation aligns with the core creative vision. From modeling IAP strategies in Excel to building atmospheric worlds for PC and Mobile, my goal is to design games that are not just played, but remembered.
            </p>
          </div>
        </section>

        {/* Stats / Skills Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <span className={styles.statValue}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>System Designs</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>MBA</span>
            <span className={styles.statLabel}>Strategic Edge</span>
          </div>
        </div>

        {/* Academic & Professional Timeline */}
        <section className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timeLabel}>PRESENT</div>
            <div className={styles.timeContent}>
              <h3>Game Designer</h3>
              <p>BooBoo Games | Focus on System & Narrative Design</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timeLabel}>2024</div>
            <div className={styles.timeContent}>
              <h3>Game Design Graduate</h3>
              <p>Gamer2Maker | Specialized in Narrative & Production</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timeLabel}>2023</div>
            <div className={styles.timeContent}>
              <h3>MBA (Marketing)</h3>
              <p>Dr. Ambedkar Institute of Management Studies</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className={styles.aboutFooter}>
          <p>Interested in collaborating on a narrative or system design project?</p>
          <a href="mailto:riteshjanbandhu10@gmail.com" className={styles.contactLink}>
            riteshjanbandhu10@gmail.com
          </a>
        </footer>
      </div>
      <Footer />
    </main>
  );
}