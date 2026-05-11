"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Work.module.css';
import Footer from '@/components/Footer';

const projects = [
  {
    id: "rahasya", // Points to /work/rahasya
    title: "RAHASYA: VOL 1",
    category: "Narrative Design",
    context: "Flight 1-472 Survival Mystery",
    tags: ["Horror", "Mystery", "Quest"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
    color: "#f59e0b"
  },
  {
    id: "dragon-orbs", // Points to /work/dragon-orbs
    title: "DRAGON ORBS",
    category: "Level Design",
    context: "Action RPG Progression",
    tags: ["Unity", "UI/UX", "SFX"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200",
    color: "#6366f1"
  },
  {
    id: "doors-paradox", // Points to /work/idle-systems
    title: "doors-paradox",
    category: "Economy Design",
    context: "Mobile IAP Balancing",
    tags: ["Excel", "Retention", "Math"],
    image: "/1.png",
    color: "#10b981"
  },
  {
    id: "crystalline", // Points to /work/crystalline
    title: "CRYSTALLINE",
    category: "System Design",
    context: "Atmospheric Puzzle Mechanics",
    tags: ["Logic", "Environmental", "PC"],
    image: "/crytilines.png",
    color: "#22d3ee"
  },
  {
    id: "spider-rider", // Points to /work/spider-rider
    title: "SPIDER RIDER",
    category: "Lead Design",
    context: "Dimension-Hopping Action",
    tags: ["Mechanics", "3D", "Gadgets"],
    image: "/1.webp",
    color: "#ef4444"
  },
   {
    id: "crazy-doc", // Points to /work/spider-rider
    title: "CRAZY DOC",
    category: "Lead Design",
    context: "Dimension-Hopping Action",
    tags: ["Mechanics", "3D", "Gadgets"],
    image: "/crazy-doc (1).png",
    color: "#ef4444"
  }
];

export default function WorkPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className={styles.main}>
      <div 
        className={styles.magicCursor} 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.version}>VER 2.0.26</span>
          <h1 className={styles.mainTitle}>PROJECT ARCHIVE</h1>
          <p className={styles.tagline}>A deep dive into narrative architecture and system design.</p>
        </div>
      </header>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {projects.map((p, idx) => (
              <Link href={`/work/${p.id}`} key={p.id} className={styles.projectCard}>
                <div className={styles.imageBox}>
                  <img src={p.image} alt={p.title} className={styles.cardImg} />
                  <div className={styles.cardOverlay} style={{ '--accent': p.color }}>
                    <div className={styles.cardContent}>
                      <div className={styles.topRow}>
                        <span className={styles.index}>0{idx + 1}</span>
                        <span className={styles.category}>{p.category}</span>
                      </div>
                      <h2 className={styles.pTitle}>{p.title}</h2>
                      <p className={styles.pContext}>{p.context}</p>
                      <div className={styles.tags}>
                        {p.tags.map(t => <span key={t} className={styles.tag}>#{t}</span>)}
                      </div>
                      <div className={styles.viewMission}>
                        VIEW MISSION DETAILS 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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

      <Footer />
    </main>
  );
}