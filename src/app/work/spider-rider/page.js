"use client";

import styles from './SpiderRider.module.css';
import Footer from '@/components/Footer';

export default function SpiderRiderPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section with Title Image */}
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
        {/* Story & Visual Concept */}
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
            <div className={styles.imageContainer}>
              <img src="/2.webp" alt="Story Concept" className={styles.sideImg} />
            </div>
          </div>
        </section>

        {/* Unique Mechanics Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Unique Selling Points</h2>
          <div className={styles.uspGrid}>
            <div className={styles.uspContent}>
               <ul>
                <li><strong>Authentic Experience:</strong> Only game to give actual spider climbing experience.</li>
                <li><strong>Random Dimensions:</strong> Dynamic environments ensure players expect the unexpected.</li>
                <li><strong>High Agency:</strong> Players must navigate complex vertical layouts.</li>
              </ul>
            </div>
            <img src="/9.webp" alt="Unique Dimension Mechanics" className={styles.featureImg} />
          </div>
        </section>

        {/* Core Loop & Logic */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Core Gameplay Loop</h2>
          <div className={styles.diagramBox}>
            <img src="/8.webp" alt="Core Gameplay Flowchart" className={styles.fullWidthImg} />
            <p className={styles.caption}>The loop focuses on climbing progression, power-ups, and a monetization-based revival system.</p>
          </div>
        </section>

        {/* Control System */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Precision Controls</h2>
          <div className={styles.controlSection}>
             <img src="/5.webp" alt="Movement Controls" className={styles.controlImg} />
             <div className={styles.controlText}>
                <p>Designed for mobile ergonomics: Left/Right clicks for movement, Jump and Swing clicks for advanced vertical mobility.</p>
             </div>
          </div>
        </section>

        {/* Economy & Power-ups */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Economy & Visual References</h2>
          <div className={styles.artGrid}>
            <div className={styles.artCard}>
               <img src="/6.webp" alt="Power-ups" className={styles.cardImg} />
               <h4>Power-ups & Currency</h4>
               <p>Web Coins, Zarbles, Bulse, and Cotton Sandy drive the game's economy.</p>
            </div>
            <div className={styles.artCard}>
               <img src="/7.webp" alt="Art Reference" className={styles.cardImg} />
               <h4>Art Style Inspiration</h4>
               <p>Reference board for low-poly environments and organic animations.</p>
            </div>
          </div>
        </section>

        {/* Mockup & Competition */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Market Analysis</h2>
          <div className={styles.marketGrid}>
            <img src="/10.webp" alt="Competitor Analysis" className={styles.compImg} />
            <div className={styles.compText}>
               <p>Positioned against 1M+ download titles like Rocky Climb and Spider Trouble, offering a more narrative-driven "Random Dimension" twist.</p>
            </div>
          </div>
        </section>

        {/* Mockup Viewer */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Level Mockup</h2>
          <div className={styles.mockupContainer}>
            <img src="/4.webp" alt="Gameplay Mockup" className={styles.mockImg} />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}