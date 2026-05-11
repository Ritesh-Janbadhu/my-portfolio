"use client";

import styles from './Rahasya.module.css';
import Footer from '@/components/Footer';

const survivors = [
  { id: 1, name: "Puja (23)", role: "Nurse", bio: "Firm-willed and empathetic. Instinctively assumes control, nursing the injured." },
  { id: 2, name: "Ajay (29)", role: "Electronics Engineer", bio: "Strategic problem solver. Repairs and reuses wreckage as the group's technician." },
  { id: 3, name: "Rahul (19)", role: "Student", bio: "Courageous but hasty. Fights fear to prove his usefulness to the survivors." },
  { id: 4, name: "Meera (51)", role: "Journalist", bio: "Perceptive and cynical. Keeps a record of adventures and investigates secrets." },
  { id: 5, name: "Vikram (47)", role: "Doctor", bio: "Logical and systematic. Keeps a cool head and dresses wounds in crisis." },
  { id: 6, name: "Ravi (60)", role: "Ex-Army Officer", bio: "Experienced but physically impaired. Offers strategic advice and moral support." },
  { id: 7, name: "Elena (32)", role: "Foreign Backpacker", bio: "Adventurous and pragmatic. Brings survival and foraging experience." },
  { id: 8, name: "Nitya (10)", role: "Orphaned Girl", bio: "Scared but tough. Holds on to Puja as a mother figure after the disaster." }
];

const chapters = [
  { num: "01", title: "The Flight", content: "A massive explosion rocks Flight 1-472. Oxygen masks fall as the plane dives into pandemonium." },
  { num: "02", title: "Stranded", content: "Puja awakens on a beach with 8 survivors. Ominous noises reverberate from the jungle." },
  { num: "03", title: "Village of Secrets", content: "They find a village of outdated people who watch them with otherworldly indifference." },
  { num: "04", title: "Temple of Shadows", content: "A forgotten temple reveals murals of Noah's Ark and a ghost that veils the island." },
  { num: "05", title: "Descent into Madness", content: "Paranoia strikes as Vikram vanishes. A rescue helicopter stalls and careens mid-air." },
  { num: "06", title: "The Last Signal", content: "Ajay repairs an old radio. The group prepares for one last night against the darkness." }
];

export default function RahasyaPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>NARRATIVE BIBLE: VOL. 1</span>
            <h1 className={styles.title}>RAHASYA<span>.</span></h1>
            <p className={styles.tagline}>"The island never lets go" — Flight 1-472</p>
            
            {/* Direct PDF Link for Mobile/Desktop */}
            <div className={styles.heroActions}>
              <a href="/Rahasya_Vol_1_Story.pdf" target="_blank" className={styles.primaryBtn}>
                Read Full Manuscript (PDF)
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* PDF Viewer Section */}
        <section className={styles.pdfSection}>
          <h2 className={styles.secTitle}>The Original Document</h2>
          <div className={styles.pdfWrapper}>
            <iframe 
              src="/Rahasya_Vol_1_Story.pdf#toolbar=0" 
              className={styles.pdfFrame}
              title="Rahasya Story PDF"
            ></iframe>
          </div>
        </section>

        {/* Chapters Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>Mission Chapters</h2>
          <div className={styles.chapterGrid}>
            {chapters.map(ch => (
              <div key={ch.num} className={styles.chCard}>
                <div className={styles.chHeader}>
                  <span className={styles.chNum}>{ch.num}</span>
                  <h3>{ch.title}</h3>
                </div>
                <p>{ch.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Survivors Section */}
        <section className={styles.section}>
          <h2 className={styles.secTitle}>The Survivors</h2>
          <div className={styles.sGrid}>
            {survivors.map(s => (
              <div key={s.id} className={styles.sCard}>
                <div className={styles.sTop}>
                  <h4>{s.name}</h4>
                  <span className={styles.sRole}>{s.role}</span>
                </div>
                <p>{s.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Epilogue Section */}
        <section className={styles.epilogue}>
          <div className={styles.epiContent}>
            <h2>Epilogue: Erased from History</h2>
            <p>
              Satellite photos show only a tiny rocky outcropping—no jungle, no village exists. 
              Puja receives an anonymous package: a carved idol and a whisper.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}