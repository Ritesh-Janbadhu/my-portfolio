"use client";

import styles from './About.module.css';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <header className={styles.hero}>
          <span className={styles.label}>GAME DESIGNER & STRATEGIST</span>
          <h1 className={styles.title}>Crafting Player-Centric Worlds with <span>Strategic Precision.</span></h1>
        </header>

        {/* Professional Narrative Section */}
        <section className={styles.narrativeSection}>
          <div className={styles.paragraphBlock}>
            <p>
              I am a dedicated <strong>Game Designer</strong> with over two years of professional experience in developing complex gameplay systems and immersive narratives. My approach combines creative storytelling with a strong focus on <strong>player engagement</strong>, ensuring that every mechanic serves the overall experience.
            </p>
            <p>
              Specializing in <strong>Narrative Design, Game Economy, and System Architecture</strong>, I excel at turning high-level concepts into detailed, actionable Game Design Documents (GDD). Currently at <strong>BooBoo Games</strong>, I lead the design of gameplay flows and retention loops for mobile titles, working in close collaboration with cross-functional teams to deliver high-quality features.
            </p>
          </div>
        </section>

        {/* Strategic Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <span className={styles.statValue}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>Core</span>
            <span className={styles.statLabel}>System Architect</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>Strategic</span>
            <span className={styles.statLabel}>Design Edge</span>
          </div>
        </div>

        {/* Professional Milestones Timeline */}
        <section className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timeLabel}>PRESENT</div>
            <div className={styles.timeContent}>
              <h3>Game Designer</h3>
              <p>BooBoo Games | Developing systems and economy for mobile titles</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timeLabel}>2025</div>
            <div className={styles.timeContent}>
              <h3>Game Designer</h3>
              <p>Gameink Studios | Led quest-based narrative systems</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timeLabel}>2024</div>
            <div className={styles.timeContent}>
              <h3>Narrative Designer</h3>
              <p>Sherlock Studios | Designed narrative-driven puzzles</p>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer className={styles.aboutFooter}>
          <p>Ready to build something immersive together?</p>
          <a href="mailto:riteshjanbandhu10@gmail.com" className={styles.contactLink}>
            riteshjanbandhu10@gmail.com
          </a>
        </footer>
      </div>
      <Footer />
    </main>
  );
}