"use client";

import styles from './CrazyDoc.module.css';
import Footer from '@/components/Footer';

export default function CrazyDocPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>MOBILE GAME DESIGN</span>
            <h1 className={styles.title}>CRAZY-DOC<span>.</span></h1>
            <p className={styles.tagline}>A top-down endless runner where the cure is as crazy as the doctor.</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Story & Concept */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>The Mission</h2>
          <div className={styles.gridSplit}>
            <div className={styles.content}>
              <p className={styles.text}>
                You play as a rogue doctor who has discovered the only antidote to a devastating global virus. 
                However, a powerful organization wants the cure for themselves. You must run, jump, and fight 
                to escape their grasp and deliver the antidote to the world.
              </p>
              <div className={styles.specs}>
                <div className={styles.spec}><strong>Platform:</strong> Android & iOS</div>
                <div className={styles.spec}><strong>Target:</strong> 13+ Audience</div>
                <div className={styles.spec}><strong>Model:</strong> Free to Play</div>
              </div>
            </div>
            <div className={styles.conceptBox}>
              <h3>Core Mechanics</h3>
              <ul>
                <li>Left/Right Shift & Jump/Crouch</li>
                <li>Melee: Jump towards enemy</li>
                <li>Ranged: Tap on enemy to attack</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gameplay Loop */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Core Loop</h2>
          <div className={styles.loopContainer}>
            <div className={styles.loopItem}>Start / Run</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.loopItem}>Collect Power-ups</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.loopItem}>Engage / Get Killed</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.loopItem}>Revive / Watch Ads</div>
          </div>
        </section>

        {/* The Swiss Army Stick */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>The Multi-Mode Stick</h2>
          <div className={styles.stickGrid}>
            <div className={styles.stickCard}>
              <h4>Cane Mode</h4>
              <p>Standard movement and basic melee strikes.</p>
            </div>
            <div className={styles.stickCard}>
              <h4>Gun Mode</h4>
              <p>Transforms for high-speed projectile attacks.</p>
            </div>
            <div className={styles.stickCard}>
              <h4>Rope Mode</h4>
              <p>Used for grappling and tactical maneuvering.</p>
            </div>
          </div>
        </section>

        {/* Economy & Power-ups */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Inventory & Economy</h2>
          <div className={styles.powerGrid}>
            <div className={styles.pItem}><strong>Enerjons:</strong> Main Energy Currency</div>
            <div className={styles.pItem}><strong>Duollets:</strong> Specialized Ammunition</div>
            <div className={styles.pItem}><strong>Skoes:</strong> Speed-boost Roller Skates</div>
            <div className={styles.pItem}><strong>Boomer's Stick:</strong> Signature Weapon</div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Market Positioning</h2>
          <div className={styles.compGrid}>
            <div className={styles.compCard}>
              <p>Inspired by <strong>Blade of Brim</strong> (10M+ Downloads) and <strong>Run and Gun: Banditos</strong>.</p>
              <p>Visual Style: Stylized 3D low-poly with vibrant, high-contrast environments.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}