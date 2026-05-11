"use client";

import styles from './Experience.module.css';

const workHistory = [
  {
    company: "BooBoo Games",
    role: "Game Designer",
    period: "Nov. 2025 — Present",
    desc: "Focusing on idle-casual mobile titles through systems design and GDD construction[cite: 36, 37, 38, 39].",
    points: [
      "Balanced in-game economies including soft currency, RV rewards, and IAP progression using Excel.",
      "Designed UI elements and gameplay flows for idle mechanics and progression systems[cite: 41].",
      "Collaborated with programmers and artists to ensure accurate feature execution[cite: 42]."
    ],
    accent: "#6366f1"
  },
  {
    company: "Gameink Studios",
    role: "Game Designer",
    period: "Nov. 2024 — Oct. 2025",
    desc: "Developed quest-based narrative systems and puzzle mechanics for sci-fi and horror titles[cite: 43, 44, 45, 46, 47].",
    points: [
      "Produced technical feature documentation, design specs, and gameplay flows[cite: 48].",
      "Aligned gameplay vision with technical implementation across art and sound teams[cite: 49].",
      "Contributed to marketing strategy and promotional content for game launches[cite: 50]."
    ],
    accent: "#10b981"
  },
  {
    company: "Sherlock Studios",
    role: "Narrative Designer",
    period: "June 2024 — Oct. 2024",
    desc: "Specialized in narrative-driven puzzles and immersive story sequences[cite: 51, 52, 53].",
    points: [
      "Collaborated with UI/UX and sound teams to ensure cohesive player experience[cite: 54].",
      "Balanced creative writing with gameplay flow for immersive storytelling moments[cite: 55]."
    ],
    accent: "#f59e0b"
  }
];

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <span className={styles.label}>CAREER</span>
          <h2 className={styles.title}>Professional Journey</h2>
        </header>

        <div className={styles.timeline}>
          {workHistory.map((job, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.lineSide}>
                <div className={styles.dot} style={{ backgroundColor: job.accent }}></div>
                {idx !== workHistory.length - 1 && <div className={styles.line}></div>}
              </div>
              
              <div className={styles.content}>
                <header className={styles.itemHeader}>
                  <div className={styles.meta}>
                    <span className={styles.period}>{job.period}</span>
                    <h3 className={styles.role}>{job.role}</h3>
                    <span className={styles.company} style={{ color: job.accent }}>@{job.company}</span>
                  </div>
                </header>
                
                <p className={styles.summary}>{job.desc}</p>
                
                <ul className={styles.list}>
                  {job.points.map((point, pIdx) => (
                    <li key={pIdx} className={styles.listItem}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}