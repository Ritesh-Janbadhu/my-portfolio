"use client";

import { useState, useEffect } from 'react';
import styles from './Resume.module.css';
import Footer from '@/components/Footer';

export default function ResumePage() {
  // Ensure your PDF is in the public folder
  const resumeFileName = "Ritesh_Janbandhu_Resume.pdf";
  const resumeUrl = `/${resumeFileName}`;
  
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <div className={styles.textGroup}>
            <span className={styles.label}>CAREER ASSETS</span>
            <h1 className={styles.title}>Professional Resume<span>.</span></h1>
            <p className={styles.desc}>MBA & Game Designer</p>
          </div>
          
          <div className={styles.btnGroup}>
            <button className={styles.glassBtn} onClick={handleShare}>
              {copied ? "Link Copied" : "Share"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
            </button>

            <a href={resumeUrl} download={resumeFileName} className={styles.solidBtn}>
              Download PDF
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </a>
          </div>
        </header>

        {/* Cinematic Viewer Frame */}
        <div className={styles.viewerFrame}>
          {isMounted ? (
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              className={styles.pdfFrame}
              title="Ritesh Resume"
            />
          ) : (
            <div className={styles.loader}>Loading Asset...</div>
          )}
        </div>

        <div className={styles.footerNote}>
          <p>Optimized for professional review. Best viewed on larger screens.</p>
        </div>

      </div>
      <Footer />
    </main>
  );
}