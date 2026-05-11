"use client";

import styles from './Skills.module.css';

const categories = [
  {
    title: "Core Design",
    items: ["Narrative Design", "Game Economy", "System Design", "Mission Design", "Player Progression"],
    accent: "#6366f1"
  },
  {
    title: "Software",
    items: ["Excel (Balancing)", "Figma", "Photoshop", "Audacity", "Trello / Miro"],
    accent: "#10b981"
  },
  {
    title: "Additional",
    items: ["Game Research", "Project Management", "SFX Design", "UI/UX Design", "Data Visualization"],
    accent: "#f59e0b"
  }
];

export default function Skills() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sideHeader}>
          <div className={styles.tag}>EXPERTISE</div>
          <h2 className={styles.title}>Technical <br />Skills & <br />Software</h2>
          <p className={styles.desc}>2 years of experience designing quest systems and progression-driven narratives.</p>
        </div>
        <div className={styles.matrix}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.skillCard}>
              <div className={styles.cardTop}>
                <div className={styles.indicator} style={{ background: cat.accent }}></div>
                <h3 className={styles.catName}>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.items.map((skill, j) => (
                  <div key={j} className={styles.skillItem}>
                    <span className={styles.bullet}>—</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}