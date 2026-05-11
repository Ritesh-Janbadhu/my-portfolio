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
                By solving intricate puzzles on magical doors, players collect hidden notes that gradually explain the lore and the paradox of the world.
              </p>
            </div>
            <div className={styles.specBox}>
              <div className={styles.specItem}><strong>Developer:</strong> Big Loop Studios</div>
              <div className={styles.specItem}><strong>Publisher:</strong> Snapbreak</div>
              <div className={styles.specItem}><strong>Platform:</strong> PC (Steam/Epic), Mobile</div>
            </div>
          </div>
        </section>

        {/* Core Loop & Mechanics */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Core Gameplay Loop</h2>
          <div className={styles.loopContainer}>
            <div className={styles.loopCard}>
              <h4>Gameplay</h4>
              <p>Solving independent 3D diorama puzzles (Doors).</p>
            </div>
            <div className={styles.loopArrow}>→</div>
            <div className={styles.loopCard}>
              <h4>Rewards</h4>
              <p>Acquiring notes and unfolding the mystery.</p>
            </div>
            <div className={styles.loopArrow}>→</div>
            <div className={styles.loopCard}>
              <h4>Timegate</h4>
              <p>Progression based on level completion and chapter unlocks.</p>
            </div>
          </div>
        </section>

        {/* Visual Identity */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Art Style</h2>
          <div className={styles.artGrid}>
            <div className={styles.artItem}>
              <h3>Toony 3D Style</h3>
              <p>Features hand-painted textures with bright, shiny colors to create a surreal atmosphere.</p>
            </div>
            <div className={styles.artItem}>
              <h3>Hard Surface Modeling</h3>
              <p>Detailed mechanical and architectural diorama designs.</p>
            </div>
          </div>
        </section>

        {/* Level Architecture */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Level Difficulty</h2>
          <div className={styles.levelTable}>
            <div className={styles.levelRow}>
              <span>Chapter 1</span>
              <span>22 Levels</span>
              <p>Introductory puzzles and mechanics.</p>
            </div>
            <div className={styles.levelRow}>
              <span>Chapter 2 & 3</span>
              <span>18 Levels Each</span>
              <p>Advanced obstacles and complex themes.</p>
            </div>
          </div>
        </section>

        {/* UI/UX Wireframing */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>UI Wireframing</h2>
          <div className={styles.wireframeBox}>
            <div className={styles.wfColumn}>
              <h4>Main Menu Flow</h4>
              <ul>
                <li>Start → Play / Settings / Notes</li>
                <li>Quit Game / Reset Progress</li>
              </ul>
            </div>
            <div className={styles.wfColumn}>
              <h4>Settings Options</h4>
              <ul>
                <li>Resolution / V-Sync / Screen Mode</li>
                <li>Audio (Music/SFX) / Language</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Monetization & Reception */}
        <section className={styles.section}>
          <div className={styles.gridSplit}>
            <div className={styles.mBox}>
              <h3>Monetization</h3>
              <p>Premium Purchase Model: <strong>Rs. 539 (Epic)</strong> | <strong>Rs. 690 (Steam)</strong>.</p>
            </div>
            <div className={styles.mBox}>
              <h3>Player Reception</h3>
              <p><strong>"Very Positive"</strong> on Steam. Praised for relaxing "popcorn-style" puzzles and high player agency.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}