"use client";

import styles from './DragonOrbs.module.css';
import Footer from '@/components/Footer';

export default function DragonOrbsDetail() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>ARCADE ACTION CASE STUDY</span>
            <h1 className={styles.title}>FIND THE<span> DRAGON ORBS</span></h1>
            <p className={styles.tagline}>When the book opens, hell rises. Seven orbs to save the world.</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Project Overview */}
        <section className={styles.section}>
          <div className={styles.gridSplit}>
            <div className={styles.content}>
              <h2 className={styles.secTitle}>The Legend of Gyru</h2>
              <p className={styles.text}>
                Gyru, a humble fisherman, unknowingly triggers a global cataclysm by opening an ancient book. 
                Islands from the book's pages physically rise from the sea, bringing hell to Earth. 
                The player must navigate these treacherous lands to retrieve all seven Dragon Orbs.
              </p>
              <div className={styles.specs}>
                <div className={styles.spec}><strong>Engine:</strong> Unity</div>
                <div className={styles.spec}><strong>Platform:</strong> Desktop</div>
                <div className={styles.spec}><strong>Genre:</strong> Top-Down, Action, Arcade</div>
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
              <div className={styles.fIcon}>✍️</div>
              <h4>Narrative & Concept</h4>
              <p>Conceptualized the world of Gyru, wrote the full story script, and established the lore of the rising book-islands.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🏗️</div>
              <h4>Level & Puzzle Design</h4>
              <p>Designed the concept levels and integrated complex logic puzzles that players must solve to reach the Orbs.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>📱</div>
              <h4>UI/UX Design</h4>
              <p>Created the entire wireframing and interactive prototyping for the game's interface using Figma.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🔊</div>
              <h4>Sound Design</h4>
              <p>Engineered the SFX and edited the background music to match the high-energy arcade atmosphere.</p>
            </div>
          </div>
        </section>

        {/* Visual Gallery Placeholder */}
        {/* <section className={styles.section}>
          <h2 className={styles.secTitle}>Visual Archive</h2>
          <div className={styles.gallery}>
            <div className={styles.imgPlaceholder}>[CONCEPT LEVEL DESIGN]</div>
            <div className={styles.imgPlaceholder}>[FIGMA UI PROTOTYPE]</div>
          </div>
        </section> */}

        {/* Technical Summary */}
        <section className={styles.conclusion}>
          <h3>Mission Result</h3>
          <p>Created a cohesive top-down experience by balancing fast-paced arcade action with deep narrative stakes and strategic level design.</p>
        </section>
      </div>

      <Footer />
    </main>
  );
}