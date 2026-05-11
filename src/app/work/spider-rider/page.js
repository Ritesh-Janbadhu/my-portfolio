"use client";

import styles from './SpiderRider.module.css';
import Footer from '@/components/Footer';

export default function SpiderRiderPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>MOBILE GAME DESIGN CASE STUDY</span>
            <h1 className={styles.title}>SPIDER<span>:</span> THE DIMENSION RIDER</h1>
            <p className={styles.tagline}>A serious explosion, a random dimension, and one way out: UP.</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Story & Concept */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>The Origin Story</h2>
          <div className={styles.gridSplit}>
            <div className={styles.content}>
              <p className={styles.text}>
                After a catastrophic explosion in a chemical factory, a spider is suddenly transported into a surreal "RANDOM DIMENSION." 
                The only way to return to its original world is to climb through unpredictable environments where anything can happen.
              </p>
              <div className={styles.specs}>
                <div className={styles.spec}><strong>Platform:</strong> Android & iOS</div>
                <div className={styles.spec}><strong>Target:</strong> 7+ Audience</div>
                <div className={styles.spec}><strong>Genre:</strong> 2D Up-Scroll</div>
              </div>
            </div>
            <div className={styles.conceptBox}>
              <h3>Unique Selling Points</h3>
              <ul>
                <li>Authentic spider climbing experience.</li>
                <li>Random Dimension mechanics: expect the unexpected.</li>
                <li>Dynamic environmental obstacles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Loop & Monetization */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Core Gameplay Loop</h2>
          <div className={styles.loopContainer}>
            <div className={styles.loopItem}>Start / Climbing</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.loopItem}>Power Ups / Fall</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.loopItem}>End / Monitise</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.loopItem}>Watch Ads / Unlock Character</div>
          </div>
        </section>

        {/* Control System */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Precision Controls</h2>
          <div className={styles.controlGrid}>
            <div className={styles.controlCard}>
              <h4>Movement</h4>
              <p>Left Click, Right Click, and Roll-up mechanics for vertical navigation.</p>
            </div>
            <div className={styles.controlCard}>
              <h4>Action</h4>
              <p>Jump Click and Swing Click for clearing gaps and escaping traps.</p>
            </div>
          </div>
        </section>

        {/* Power-ups & Economy */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Power-ups & Currency</h2>
          <div className={styles.powerGrid}>
            <div className={styles.pItem}><strong>Web Coins:</strong> Primary Game Currency</div>
            <div className={styles.pItem}><strong>Zarbles:</strong> Rare reward items</div>
            <div className={styles.pItem}><strong>Bulse:</strong> Energy boosting consumables</div>
            <div className={styles.pItem}><strong>Cotton Sandy:</strong> Special power-up item</div>
          </div>
        </section>

        {/* Competitive Market */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Market Positioning</h2>
          <div className={styles.compGrid}>
            <div className={styles.compCard}>
              <p>Targeting fans of high-performance climbers like <strong>Rocky Climb</strong>, <strong>Hang Line</strong>, and <strong>Spider Trouble</strong> (all with 1M+ downloads).</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}