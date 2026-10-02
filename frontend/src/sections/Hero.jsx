import { ArrowUpRight, ArrowDown, Download, Code2 } from "lucide-react";
import { personalInfo as p } from "../data/personalInfo";
import { ExternalLink, Photo, Socials } from "../components/UI";
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="tiny-line" /> THE DEVELOPER PORTFOLIO
        </div>
        <p className="hello">Hi, I'm</p>
        <h1>
          {p.name || "[YOUR NAME]"}
          <span className="brand-dot">.</span>
        </h1>
        <h2>{p.title || "[YOUR PROFESSIONAL TITLE]"}</h2>
        <p className="hero-intro">
          {p.introduction ||
            "[WRITE YOUR SHORT PROFESSIONAL INTRODUCTION HERE]"}
        </p>
        <div className="hero-buttons">
          <a className="button primary" href="#projects">
            View Projects <ArrowUpRight size={18} />
          </a>
          <ExternalLink
            className="button secondary"
            href={p.resume}
            download="Nitin-Yadav-Resume.pdf"
          >
            <Download size={17} /> Download Resume
          </ExternalLink>
        </div>
        <div className="hero-connect">
          <Socials />
          <span />
          <a href="#contact">
            Contact Me <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="portrait-composition">
        <div className="portrait-frame">
          <div className="frame-top">
            <span>PROFILE / 01</span>
            <Code2 size={17} />
          </div>
          <Photo
            className="hero-photo"
            src={p.profileImage}
            label={
              p.profileImage
                ? `${p.name} — profile photo`
                : "YOUR_PROFILE_PHOTO"
            }
            priority
          />
          <div className="frame-bottom">
            <span>{p.name || "[YOUR NAME]"}</span>
            <ArrowUpRight size={20} />
          </div>
        </div>
        <div className="portrait-caption">
          <span className="tiny-line" /> A little about the person behind the
          code.
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#about">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>
        <span>IDEAS. CODE. EXPERIENCES.</span>
      </div>
    </section>
  );
}
