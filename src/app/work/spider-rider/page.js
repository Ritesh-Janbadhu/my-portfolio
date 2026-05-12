"use client";

import { useState, useEffect } from 'react';
import styles from './SpiderRider.module.css';
import Footer from '@/components/Footer';

const slides = [
  "/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp", 
  "/6.webp", "/7.webp", "/8.webp", "/9.webp", "/10.webp", "/11.webp"
];

export default function SpiderRiderPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>GAME DESIGN CASE STUDY</span>
          <h1 className={styles.title}>SPIDER<span>:</span> RIDER</h1>
        </div>
      </header>

      <div className={styles.container}>
        <section className={styles.sliderSection}>
          <div className={styles.sliderWrapper}>
            <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            
            <div className={styles.slideContainer}>
              {slides.map((img, idx) => (
                <div key={idx} className={`${styles.slide} ${idx === current ? styles.active : ''}`}>
                  <img src={img} alt={`Slide ${idx + 1}`} className={styles.slideImg} />
                </div>
              ))}
            </div>

            <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          <div className={styles.dots}>
            {slides.map((_, idx) => (
              <span key={idx} className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`} onClick={() => setCurrent(idx)}></span>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}