"use client";

import styles from './Rahasya.module.css';
import Footer from '@/components/Footer';

const survivors = [
  { id: 1, name: "Puja (23)", role: "Nurse", bio: "Firm-willed and empathetic. Working in an Indian Army hospital, she instinctively assumes control, nursing the injured and maintaining group unity." },
  { id: 2, name: "Ajay (29)", role: "Electronics Engineer", bio: "Strategic and able problem solver. He instantly becomes the technician of the group, repairing and reusing wreckage." },
  { id: 3, name: "Rahul (19)", role: "Student", bio: "Courageous but hasty. He fights fear and self-doubt but yearns to be shown useful to the group." },
  { id: 4, name: "Meera (51)", role: "Journalist", bio: "Perceptive and cynical. She keeps a record of their adventures and investigates the island's secrets." },
  { id: 5, name: "Vikram (47)", role: "Doctor", bio: "Logical and systematic. He dresses wounds and keeps a cool head in times of crisis." },
  { id: 6, name: "Ravi (60)", role: "Ex-Army Officer", bio: "Experienced but physically impaired. Offers strategic advice and moral support like a field officer." },
  { id: 7, name: "Elena (32)", role: "Foreign Backpacker", bio: "Adventurous and pragmatic. Brings survival experience from her travels and assists in food foraging." },
  { id: 8, name: "Nitya (10)", role: "Orphaned Girl", trait: "Scared but tough. She holds on to Puja as a mother figure after losing her parents." }
];

const chapters = [
  {
    num: "01",
    title: "The Flight",
    content: "Puja boards an international flight for her friend's wedding. Halfway through, a massive explosion blows up from the engine. Oxygen masks fall, and the plane dives into a state of pandemonium before a deafening crash."
  },
  {
    num: "02",
    title: "Stranded",
    content: "Puja awakens on a beach surrounded by smoldering wreckage. Of hundreds on board, only she and eight others survived. They huddle near a faint fire, listening to ominous noises reverberating through the jungle."
  },
  {
    num: "03",
    title: "The Village of Secrets",
    content: "The group finds a village of people in outdated attire who speak an unintelligible dialect. They show 'otherworldly indifference' to the survivors' pleas, watching them with unnerving fascination from the tree line."
  },
  {
    num: "04",
    title: "The Temple of Shadows",
    content: "They discover a moss-covered underground temple with murals of Noah's Ark. Legend says the Ark brought an 'element of evil' here, and a bitter ghost now veils the island in storms to prevent any man or machine from leaving."
  },
  {
    num: "05",
    title: "Descent into Madness",
    content: "Paranoia sets in after Vikram vanishes, leaving only a blood-stained shirt at a stone altar. A rescue helicopter stalls mid-air before twirling grotesquely and disappearing behind the mountains."
  },
  {
    num: "06",
    title: "The Last Signal",
    content: "Ajay finds an old military radio and contacts ATS Chennai. The survivors craft spears from landing gear struts and shields from paneling to defend their ridge until Navy gunfire pushes back the darkness."
  }
];

export default function RahasyaPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.label}>NARRATIVE BIBLE: VOL. 1</span>
            <h1 className={styles.title}>RAHASYA<span>.</span></h1>
            <p className={styles.tagline}>"The island never lets go" — The Mystery of Flight 1-472.</p>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Chapters Section */}
        <section className={styles.chaptersSection}>
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
        <section className={styles.survivorSection}>
          <h2 className={styles.secTitle}>The Nine Survivors</h2>
          <div className={styles.sGrid}>
            {survivors.map(s => (
              <div key={s.id} className={styles.sCard}>
                <div className={styles.sTop}>
                  <h4>{s.name}</h4>
                  <span className={styles.sRole}>{s.role}</span>
                </div>
                <p>{s.bio || s.trait}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Epilogue Section */}
        <section className={styles.epilogue}>
          <div className={styles.epiContent}>
            <h2>Epilogue: Erased from History</h2>
            <p>
              Military intelligence denies the island's existence, claiming survivors were on a lifeboat. 
              Satellite photos show only a tiny rocky outcropping—no jungle, no village, no temple. 
              Puja receives an anonymous package: a carved idol and a whisper.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}