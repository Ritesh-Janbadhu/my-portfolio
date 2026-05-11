"use client";

import styles from './CrazyDoc.module.css';
import Footer from '@/components/Footer';

export default function CrazyDocPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section - Psychedelic Visual */}
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
        {/* Story Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>The Mission</h2>
          <div className={styles.gridSplit}>
            <div className={styles.content}>
              <p className={styles.text}>
                Play as a doc who holds the antidote to a global virus. Escape the organization's grasp and run to save the world without getting caught.
              </p>
              <div className={styles.specs}>
                <div className={styles.spec}><strong>Platform:</strong> Android & iOS</div>
                <div className={styles.spec}><strong>Target:</strong> 13+ Audience</div>
                <div className={styles.spec}><strong>Model:</strong> Free to Play</div>
              </div>
            </div>
            <div className={styles.imageBox}>
              <img src="/crazy-doc (3).png" alt="Crazy Doc Story" className={styles.sideImg} />
            </div>
          </div>
        </section>

        {/* Gameplay Mechanics */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Mechanics & Controls</h2>
          <div className={styles.mechanicLayout}>
            <img src="/crazy-doc (6).png" alt="Game Mechanics Diagram" className={styles.fullWidthImg} />
            <div className={styles.mechanicText}>
              <p>Precise movement with Shift & Jump controls combined with unique Melee and Ranged attack patterns.</p>
            </div>
          </div>
        </section>

        {/* Core Loop Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Core Gameplay Loop</h2>
          <div className={styles.loopBox}>
            <img src="/crazy-doc (12).png" alt="Core Loop Flowchart" className={styles.fullWidthImg} />
          </div>
        </section>

        {/* The Swiss Army Stick Modes */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>The Multi-Mode Stick</h2>
          <div className={styles.stickContent}>
             <img src="/crazy-doc (7).png" alt="Modes of Stick" className={styles.fullWidthImg} />
             <div className={styles.stickDesc}>
                <p>Switch between <strong>Cane Mode</strong>, <strong>Gun Mode</strong>, and <strong>Rope Mode</strong> to tackle different environmental challenges.</p>
             </div>
          </div>
        </section>

        {/* Inventory & Economy */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Power-ups & Currency</h2>
          <div className={styles.powerSection}>
            <img src="/crazy-doc (8).png" alt="Power-ups and Currency" className={styles.fullWidthImg} />
          </div>
        </section>

        {/* Visual Identity & Competition */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Art Style & Market</h2>
          <div className={styles.marketGrid}>
            <div className={styles.marketCard}>
               <img src="/crazy-doc (11).png" alt="Art Reference" className={styles.marketImg} />
               <p>Art Reference: High-contrast action environments.</p>
            </div>
            <div className={styles.marketCard}>
               <img src="/crazy-doc (9).png" alt="Competitors" className={styles.marketImg} />
               <p>Market Position: Targeting fans of Blade of Brim and Banditos.</p>
            </div>
          </div>
        </section>

        {/* Level Mockup Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Game Mockup</h2>
          <div className={styles.mockupContainer}>
            <img src="/crazy-doc (5).png" alt="Crazy Doc Mockup" className={styles.mockImg} />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}