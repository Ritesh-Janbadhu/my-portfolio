"use client";

import styles from './DragonOrbs.module.css';
import Footer from '@/components/Footer';

export default function DragonOrbsDetail() {
  const gameLink = "https://find-the-dragon-orbs.itch.io/find-the-dragon-orbs";

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>ARCADE ACTION CASE STUDY</span>
            <h1 className={styles.title}>FIND THE<span> DRAGON ORBS</span></h1>
            <p className={styles.tagline}>When the book opens, hell rises. Seven orbs to save the world.</p>
            
            {/* Attractive Play Button */}
            <div className={styles.ctaWrapper}>
              <a href={gameLink} target="_blank" rel="noopener noreferrer" className={styles.playButton}>
                <span className={styles.btnText}>PLAY ON ITCH.IO</span>
                <span className={styles.btnIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
            </div>
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
                <div className={styles.spec}><strong>Platform:</strong> Desktop / Web</div>
                <div className={styles.spec}><strong>Genre:</strong> Top-Down Action</div>
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
              <p>Conceptualized the world of Gyru, wrote the full story script, and established the lore of the rising islands.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🏗️</div>
              <h4>Level & Puzzle Design</h4>
              <p>Integrated complex logic puzzles that players must solve to reach the hidden Orbs.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🎨</div>
              <h4>UI/UX Prototyping</h4>
              <p>Built complete interactive prototyping for the game's interface and HUD using Figma.</p>
            </div>
            <div className={styles.fCard}>
              <div className={styles.fIcon}>🔊</div>
              <h4>Arcade Soundscape</h4>
              <p>Engineered high-energy SFX and edited background music to match the arcade atmosphere.</p>
            </div>
          </div>
        </section>

        {/* Technical Summary */}
        <section className={styles.conclusion}>
          <div className={styles.finalCta}>
            <h3>Ready to retrieve the Orbs?</h3>
            <p>Experience the fast-paced arcade action and strategic level design firsthand.</p>
            <a href={gameLink} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              LAUNCH MISSION ON ITCH.IO
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}