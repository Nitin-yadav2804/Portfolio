import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { personalInfo as p } from "../data/personalInfo";
import { Socials } from "./UI";
const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main > section")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Code2 size={21} />
          </span>
          <span>
            {p.name || "[YOUR NAME]"}
            <span className="brand-dot">.</span>
          </span>
        </a>
        <nav
          id="navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle").focus();
            }
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              aria-current={
                active === link.toLowerCase() ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <Socials />
          <span className="nav-divider" />
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
