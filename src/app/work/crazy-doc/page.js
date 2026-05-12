"use client";

import { useState, useEffect } from 'react';
import styles from './CrazyDoc.module.css';
import Footer from '@/components/Footer';

// Aap yahan jitni chahe utni images add kar sakte hain
const slides = [
  "/crazy-doc (1).png",
  "/crazy-doc (3).png",
  "/crazy-doc (4).png",
  "/crazy-doc (5).png",
  "/crazy-doc (6).png",
  "/crazy-doc (7).png",
  "/crazy-doc (8).png",
  "/crazy-doc (9).png",
  "/crazy-doc (11).png",
  "/crazy-doc (12).png",
  "/crazy-doc (10).png"
];

export default function CrazyDocPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>MOBILE GAME DESIGN</span>
          <h1 className={styles.title}>CRAZY<span>-</span>DOC</h1>
        </div>
      </header>

      <div className={styles.container}>
        <section className={styles.sliderSection}>
          <div className={styles.sliderWrapper}>
            {/* Navigation Arrows */}
            <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            
            <div className={styles.slideContainer}>
              {slides.map((img, idx) => (
                <div key={idx} className={`${styles.slide} ${idx === current ? styles.active : ''}`}>
                  <img src={img} alt={`Crazy Doc Slide ${idx + 1}`} className={styles.slideImg} />
                </div>
              ))}
            </div>

            <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {/* Progress Indicators (Dots) */}
          <div className={styles.dots}>
            {slides.map((_, idx) => (
              <span 
                key={idx} 
                className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`} 
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}