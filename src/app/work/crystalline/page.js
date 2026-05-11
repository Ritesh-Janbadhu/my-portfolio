"use client";

import styles from './Crystalline.module.css';
import Footer from '@/components/Footer';

export default function CrystallineDetail() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>ADVENTURE CASE STUDY</span>
            <h1 className={styles.title}>CRYSTILLINE<span> CRYSTAL</span></h1>
            <p className={styles.tagline}>Dive deep to break the curse. The ocean is your only sanctuary.</p>
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
                <div className={styles.spec}><strong>Genre:</strong> Top-Down, Adventure</div>
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

        {/* Roles & Responsibilities Grid */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Design Contributions</h2>
          <div className={styles.featureGrid}>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🔱</div>
              <h4>Narrative & World</h4>
              <p>Conceptualized the survival-driven narrative and the lore behind the "Human Curse" and crystal-dependency mechanics.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🌊</div>
              <h4>Level Design</h4>
              <p>Designed the infinite vertical ocean levels, ensuring a balanced difficulty curve as the player dives deeper into the abyss.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🎨</div>
              <h4>UI/UX Design</h4>
              <p>Built the complete UI/UX in Figma, including wireframing and prototyping the HUD to track crystals and the remaining time.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🎵</div>
              <h4>Sound & SFX</h4>
              <p>Created immersive underwater SFX and edited ambient music to emphasize the pressure of the deep sea and the ticking clock.</p>
            </div>
          </div>
        </section>

        {/* Visual Archive */}
        {/* <section className={styles.section}>
          <h2 className={styles.secTitle}>Visual Archive</h2>
          <div className={styles.gallery}>
            <div className={styles.imgPlaceholder}>[OCEAN TRENCH LEVEL DESIGN]</div>
            <div className={styles.imgPlaceholder}>[FIGMA UI PREVIEW]</div>
          </div>
        </section> */}

        {/* Technical Summary */}
        <section className={styles.conclusion}>
          <h3>Project Summary</h3>
          <p>Integrated time-pressure mechanics with a top-down adventure aesthetic, delivering a high-stakes survival loop through atmospheric sound and level design.</p>
        </section>
      </div>

      <Footer />
    </main>
  );
}