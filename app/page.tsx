import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/landing-page/Hero";
import Skills from "@/features/landing-page/Skills";
import Strip from "@/features/landing-page/Strip";
import Works from "@/features/landing-page/Works";
import Experience from "@/features/landing-page/Experience";
import SideQuests from "@/features/landing-page/SideQuests";
import Contact from "@/features/landing-page/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <header className="bg-background fixed top-0 left-0 w-full h-20.5 z-50">
        <Navbar />
      </header>
      <main className="mt-24 pb-14">
        <Hero />
        <Strip />
        <Works />
        <Skills />
        <Experience />
        <SideQuests />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
