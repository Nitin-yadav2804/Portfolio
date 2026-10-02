import { useEffect } from "react";
import { ArrowUp, Code2 } from "lucide-react";
import Navbar from "./components/Navbar";
import { Socials } from "./components/UI";
import Hero from "./sections/Hero";
import { About, Skills, Experience } from "./sections/Profile";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";
import { personalInfo as p } from "./data/personalInfo";
export default function App() {
  const theme = useTheme();
  useEffect(() => {
    const title = `${p.name || "[YOUR NAME]"} — ${p.title || "[YOUR PROFESSIONAL TITLE]"}`;
    document.title = title;
    document.querySelector('meta[property="og:title"]').content = title;
    const description = p.seoDescription || "[YOUR PORTFOLIO DESCRIPTION]";
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:description"]').content =
      description;
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar {...theme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="brand" href="#home">
                <Code2 size={22} />
                {p.name || "[YOUR NAME]"}
              </a>
              <p>{p.tagline || "[SHORT TAGLINE]"}</p>
            </div>
            <div className="footer-socials">
              <Socials />
              {p.email ? (
                <a href={`mailto:${p.email}`}>Email</a>
              ) : (
                <span className="unavailable">[YOUR EMAIL]</span>
              )}
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {p.name || "[YOUR NAME]"}. All rights
              reserved.
            </span>
            <a href="#home">
              Back to top <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
