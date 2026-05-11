import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

/**
 * Ritesh Janbandhu Portfolio - Home Page
 * Structure: Hero -> Skills -> Experience -> Projects -> Footer
 */
export default function Home() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 1. Introduction & Branding */}
      <Hero />

          {/* 4. Interactive Projects Showcase */}
      <Projects />

      {/* 2. Technical Expertise Matrix */}
      <Skills />

      {/* 3. Professional Journey Timeline */}
      <Experience />

      {/* 4. Interactive Projects Showcase */}
      {/* <Projects /> */}

      {/* 5. Elite Professional Footer */}
      <Footer />
    </main>
  );
}