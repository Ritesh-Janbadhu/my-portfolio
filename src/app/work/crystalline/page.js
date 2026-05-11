"use client";

import styles from './Crystalline.module.css';
import Footer from '@/components/Footer';

export default function CrystallineDetail() {
  const figmaLink = "https://www.figma.com/proto/SkyYSXhX9c8QRgTOuJZ3yz/Untitled?page-id=185%3A2&node-id=187-25&node-type=canvas&viewport=-25%2C617%2C0.07&t=tpxOjCCe9dkuIrK5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=187%3A25";

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>ADVENTURE CASE STUDY</span>
            <h1 className={styles.title}>CRYSTALLINE<span>.</span></h1>
            <p className={styles.tagline}>Dive deep to break the curse. The ocean is your only sanctuary.</p>
            
            <a href={figmaLink} target="_blank" rel="noopener noreferrer" className={styles.playBtn}>
              Play Prototype
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Project Overview */}
        <section className={styles.section}>
          <div className={styles.gridSplit}>
            <div className={styles.content}>
              <h2 className={styles.secTitle}>The Mermaid's Curse</h2>
              <p className={styles.text}>
                You play as a mermaid cursed to become human. To maintain your true form, you must dive into the deepest trenches of the ocean to collect rare crystals. 
                As an infinite scroller, the stakes are high: once the timer runs out, the curse takes hold, and your journey ends.
              </p>
              <div className={styles.specs}>
                <div className={styles.spec}><strong>Engine:</strong> Unity</div>
                <div className={styles.spec}><strong>Platform:</strong> Desktop</div>
                <div className={styles.spec}><strong>Genre:</strong> Top-Down Adventure</div>
              </div>
            </div>
            <div className={styles.roleCard}>
              <h3>Core Roles</h3>
              <ul>
                <li>Narrative Designer</li>
                <li>Level Designer</li>
                <li>UI/UX Designer</li>
                <li>Sound Designer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Contributions Grid */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Design Contributions</h2>
          <div className={styles.featureGrid}>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🔱</div>
              <h4>Narrative & World</h4>
              <p>Conceptualized the survival-driven narrative and the "Human Curse" mechanics.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🌊</div>
              <h4>Level Design</h4>
              <p>Designed infinite vertical levels with a balanced difficulty curve for deep-sea diving.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🎨</div>
              <h4>UI/UX Prototyping</h4>
              <p>Built complete HUD and menu flows in Figma to track crystals and oxygen levels.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🎵</div>
              <h4>Atmospheric Sound</h4>
              <p>Created immersive underwater SFX to emphasize the pressure of the deep sea.</p>
            </div>
          </div>
        </section>

        {/* Technical Summary */}
        <section className={styles.conclusion}>
          <h3>Project Summary</h3>
          <p>Integrated time-pressure mechanics with a top-down adventure aesthetic, delivering a high-stakes survival loop through atmospheric sound and responsive level design.</p>
          <a href={figmaLink} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
            View Design Files in Figma
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}