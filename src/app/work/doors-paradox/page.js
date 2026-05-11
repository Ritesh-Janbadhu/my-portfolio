"use client";

import styles from './Doors.module.css';
import Footer from '@/components/Footer';

export default function DoorsParadox() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>GAME DESIGN CASE STUDY</span>
            <h1 className={styles.title}>DOORS<span>:</span> PARADOX</h1>
            <p className={styles.tagline}>A relaxing puzzle escape game through hand-crafted 3D dioramas.</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Overview & Narrative */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Overview & Story</h2>
          <div className={styles.grid}>
            <div className={styles.content}>
              <p className={styles.text}>
                The game follows a mysterious cat, a messenger of chaos, who guides players through the duality of <strong>ORDER and CHAOS</strong>. 
                By solving intricate puzzles on magical doors, players collect hidden notes that explain the lore.
              </p>
              <img src="/3.png" alt="Doors Overview" className={styles.inlineImg} />
            </div>
            <div className={styles.specBox}>
              <div className={styles.specItem}><strong>Developer:</strong> Big Loop Studios</div>
              <div className={styles.specItem}><strong>Publisher:</strong> Snapbreak</div>
              <div className={styles.specItem}><strong>Platform:</strong> PC & Mobile</div>
              <img src="/2.png" alt="Content Index" className={styles.specImg} />
            </div>
          </div>
        </section>

        {/* Core Loop Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Core Gameplay Loop</h2>
          <div className={styles.loopBox}>
            <img src="/4.png" alt="Core Loop Diagram" className={styles.fullWidthImg} />
            <p className={styles.caption}>Progression cycle: Gameplay → Rewards → Timegate.</p>
          </div>
        </section>

        {/* Art Style Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Visual Identity</h2>
          <div className={styles.artSection}>
            <img src="/6.png" alt="Art Style Reference" className={styles.featureImg} />
            <div className={styles.artContent}>
              <h3>Toony 3D Style</h3>
              <p>Features hand-painted textures with bright, shiny colors and detailed hard-surface modeling.</p>
            </div>
          </div>
        </section>

        {/* Level Architecture */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Level Difficulty</h2>
          <div className={styles.difficultyBox}>
            <img src="/5.png" alt="Level Difficulty Info" className={styles.fullWidthImg} />
          </div>
        </section>

        {/* UI/UX Wireframing */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>UI Wireframing & Flow</h2>
          <div className={styles.wireframeContainer}>
            <img src="/9.png" alt="UI Wireframe Diagram" className={styles.fullWidthImg} />
          </div>
        </section>

        {/* Monetization & Market */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Monetization & Reception</h2>
          <div className={styles.marketGrid}>
            <div className={styles.marketCard}>
              <img src="/7.png" alt="Epic Games Pricing" className={styles.marketImg} />
              <p>Premium Purchase: Rs. 539 on Epic / Rs. 690 on Steam.</p>
            </div>
            <div className={styles.marketCard}>
              <img src="/10.png" alt="Player Reviews" className={styles.marketImg} />
              <p>Highly praised for relaxing "popcorn-style" puzzles.</p>
            </div>
          </div>
          <div className={styles.steamOverview}>
             <img src="/8.png" alt="Steam Store Page" className={styles.fullWidthImg} />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}