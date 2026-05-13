"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Work.module.css';
import Footer from '@/components/Footer';

const projectSections = [
  {
    title: "Story",
    projects: [
      {
        id: "rahasya",
        title: "RAHASYA: VOL 1",
        category: "Narrative Design",
        context: "Flight 1-472 Survival Mystery",
        tags: ["Horror", "Mystery"],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
        color: "#f59e0b"
      }
    ]
  },
  {
    title: "Games",
    projects: [
      {
        id: "dragon-orbs",
        title: "DRAGON ORBS",
        category: "Level Design",
        context: "Action RPG Progression",
        tags: ["Unity", "UI/UX"],
        image: "/dragonbg.jpeg",
        color: "#6366f1"
      },
      {
        id: "crystalline",
        title: "CRYSTALLINE",
        category: "System Design",
        context: "Ocean Survival Mechanics",
        tags: ["Logic", "PC"],
        image: "/crytilines.png",
        color: "#22d3ee"
      }
    ]
  },
  {
    title: "Game Pitch",
    projects: [
      {
        id: "spider-rider",
        title: "SPIDER RIDER",
        category: "Lead Design",
        context: "Vertical Dimension Action",
        tags: ["Mechanics", "3D"],
        image: "/1.webp",
        color: "#ef4444"
      },
      {
        id: "crazy-doc",
        title: "CRAZY DOC",
        category: "Lead Design",
        context: "Top-down Endless Runner",
        tags: ["Action", "3D"],
        image: "/crazy-doc (1).png",
        color: "#10b981"
      }
    ]
  },
  {
    title: "Breakdown",
    projects: [
      {
        id: "doors-paradox",
        title: "DOORS: PARADOX",
        category: "Economy Design",
        context: "IAP Balancing Case Study",
        tags: ["Excel", "Math"],
        image: "/1.png",
        color: "#6366f1"
      }
    ]
  }
];

export default function WorkPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.magicCursor} style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.version}>PROJECTS // 2026</span>
          <h1 className={styles.mainTitle}>WORK<span>.</span></h1>
        </div>
      </header>

      {projectSections.map((section, sIdx) => (
        <section key={sIdx} className={styles.gridSection}>
          <div className={styles.container}>
            <h2 className={styles.secTitle}>{section.title}</h2>
            <div className={styles.grid}>
              {section.projects.map((p, idx) => (
                <Link href={`/work/${p.id}`} key={p.id} className={styles.projectCard}>
                  <div className={styles.imageBox}>
                    <img src={p.image} alt={p.title} className={styles.cardImg} loading="lazy" />
                    <div className={styles.cardOverlay} style={{ '--accent': p.color }}>
                      <div className={styles.cardContent}>
                        <div className={styles.topRow}>
                          <span className={styles.index}>0{idx + 1}</span>
                          <span className={styles.category}>{p.category}</span>
                        </div>
                        <h3 className={styles.pTitle}>{p.title}</h3>
                        <p className={styles.pContext}>{p.context}</p>
                        <div className={styles.viewMission}>
                          VIEW DETAILS 
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </main>
  );
}