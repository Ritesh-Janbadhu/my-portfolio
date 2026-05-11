"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    id: "01",
    title: "Find The Dragon Orbs",
    role: "Narrative & UI/UX Designer",
    desc: "A premium game concept focusing on immersive narrative structure, player agency, and intuitive UX flows.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200",
    tags: ["Unity", "Figma", "GDD"],
    color: "#6366f1",
    link: "/work/dragon-orbs"
  },
  {
    id: "02",
    title: "Rahasya: Vol 1",
    role: "Lead Narrative Designer",
    desc: "An interactive narrative bible exploring the survival mystery of Flight 1-472. Follow the story of 8 survivors.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
    tags: ["Story", "Mystery", "Quest"],
    color: "#f59e0b",
    link: "/work/rahasya"
  },
  {
    id: "03",
    title: "Doors: Paradox",
    role: "Economy Designer",
    desc: "Designing and balancing game economies to optimize player retention and IAP monetization strategies.",
    image: "/1.png",
    tags: ["Retention", "IAP", "Math"],
    color: "#10b981",
    link: "/work/doors-paradox"
  },
  {
    id: "04",
    title: "Crystalline",
    role: "System Designer",
    desc: "Atmospheric puzzle mechanics based on crystal refraction and environmental storytelling.",
    image: "/crytilines.png",
    tags: ["Logic", "Environmental", "PC"],
    color: "#22d3ee",
    link: "/work/crystalline"
  },
  {
    id: "05",
    title: "Spider: Dimension Rider",
    role: "Lead Designer",
    desc: "Fast-paced action title exploring dimension-hopping mechanics and futuristic gadgetry.",
    image: "/1.webp",
    tags: ["Mechanics", "3D", "Gadgets"],
    color: "#ef4444",
    link: "/work/spider-rider"
  },
  {
    id: "06",
    title: "Crazy Doc",
    role: "Lead Designer",
    desc: "Dimension-hopping action runner with high-intensity mechanics and futuristic environments.",
    image: "/crazy-doc (1).png",
    tags: ["Mechanics", "3D", "Action"],
    color: "#8b5cf6",
    link: "/work/crazy-doc"
  }
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (isAuto) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    return () => resetTimeout();
  }, [active, isAuto]);

  const nextSlide = () => {
    setActive((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setIsAuto(false);
  };

  const handleManual = (index) => {
    setActive(index);
    setIsAuto(false);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <span className={styles.label}>SELECTED ARCHIVE</span>
            <div className={styles.arrowControls}>
              <button className={styles.arrowBtn} onClick={prevSlide} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className={styles.arrowBtn} onClick={() => { nextSlide(); setIsAuto(false); }} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <h2 className={styles.mainTitle}>Featured Projects<span>.</span></h2>
        </header>

        <div className={styles.sliderFrame}>
          <div className={styles.viewport}>
            {projects.map((p, i) => (
              <div 
                key={p.id} 
                className={`${styles.slide} ${i === active ? styles.activeSlide : ''}`}
                style={{ '--accent': p.color }}
              >
                <div className={styles.imagePart}>
                  <img src={p.image} alt={p.title} className={styles.img} />
                  <div className={styles.imgOverlay}>
                    <span className={styles.index}>0{i + 1}</span>
                  </div>
                </div>

                <div className={styles.textPart}>
                  <p className={styles.role} style={{ color: p.color }}>{p.role}</p>
                  <h3 className={styles.pTitle}>{p.title}</h3>
                  <p className={styles.pDesc}>{p.desc}</p>
                  
                  <div className={styles.tags}>
                    {p.tags.map(t => <span key={t} className={styles.tag}>#{t}</span>)}
                  </div>

                  <a href={p.link} className={styles.caseBtn} style={{ background: p.color }}>
                    View Case Study
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.navBar} style={{ gridTemplateColumns: `repeat(${projects.length}, 1fr)` }}>
            {projects.map((p, i) => (
              <button 
                key={p.id}
                className={`${styles.navDot} ${i === active ? styles.navActive : ''}`}
                onClick={() => handleManual(i)}
              >
                <span className={styles.navLabel}>{p.title}</span>
                <div className={styles.progressBase}>
                  <div className={styles.progressFill} style={{ 
                    width: i === active ? '100%' : '0%',
                    backgroundColor: p.color,
                    transitionDuration: i === active && isAuto ? '5s' : '0.3s'
                  }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}