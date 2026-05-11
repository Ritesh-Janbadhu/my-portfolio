"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { RiteshData } from '@/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for modern sticky look
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          RJ<span>.</span>
        </Link>

        {/* Desktop Links */}
        <div className={styles.links}>
          {/* Work link updated to /work page */}
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          {/* <a href="https://www.linkedin.com/in/ritesh-janbandhu-rj" target="_blank" rel="noreferrer">LinkedIn </a> */}
        </div>

        {/* Hamburger Icon */}
        <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
          <Link href="/work" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <a href="https://www.linkedin.com/in/ritesh-janbandhu-rj" target="_blank" rel="noreferrer">LinkedIn </a>
        </div>
      </div>
    </nav>
  );
}