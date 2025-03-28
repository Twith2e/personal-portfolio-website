import ContactForm from "../components/ContactForm";
import Education from "../components/Education";
import Hero from "../components/Hero";
import SkillList from "../components/SkillList";
import Projects from "../components/Projects";
import { Helmet } from "react-helmet";
import Experience from "../components/Experience";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-10">
      <Helmet>
        <title>Abdulbasit Adebajo | A Fullstack Developer</title>
        <meta
          name="description"
          content="A portfolio website showing my skills, experience, education and projects"
        />
        <meta
          property="og:title"
          content="Abdulbasit Adebajo | A Fullstack Developer"
        />
        <meta
          property="og:description"
          content="A portfolio website showing my skills, experience, education and projects."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:site_name" content="Abdulbasit Adebajo" />
        <meta
          property="og:url"
          content="https://abdulbasit-alpha.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abdulbasit Adebajo | A Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="A portfolio website showing my skills, experience, education and projects"
        />
        <meta name="twitter:image" content="/favicon.png" />
        <meta
          name="twitter:url"
          content="https://abdulbasit-alpha.vercel.app"
        />
      </Helmet>
      <section>
        <Hero />
      </section>
      <section>
        <SkillList />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <ContactForm />
      </section>
    </div>
  );
}
