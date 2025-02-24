import Education from "../components/Education";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Projects />
      <Education />
    </div>
  );
}
