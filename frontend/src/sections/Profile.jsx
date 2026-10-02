import {
  Layout,
  Server,
  Database,
  Terminal,
  Cloud,
  BookOpen,
  Languages,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo as p } from "../data/personalInfo";
import { skills } from "../data/skills";
import { experience, education, career } from "../data/experience";
import { SectionHeading, Photo, Socials } from "../components/UI";
const icons = {
  layout: Layout,
  server: Server,
  database: Database,
  terminal: Terminal,
  cloud: Cloud,
  book: BookOpen,
  languages: Languages,
};
export function About() {
  const fields = [
    ["Name", p.name, "YOUR NAME"],
    ["Email", p.email, "YOUR EMAIL"],
    ["Phone", p.phone, "YOUR PHONE"],
    ["Education", p.education, "YOUR EDUCATION"],
    ["University / College", p.college, "YOUR COLLEGE"],
    ["Degree", p.degree, "YOUR DEGREE"],
    ["Admission year", p.admissionYear, "YEAR"],
    ["Graduation year", p.graduationYear, "YEAR"],
  ];
  return (
    <section id="about" className="section container">
      <SectionHeading
        number="01"
        eyebrow="THE PERSON BEHIND THE CODE"
        title="About me"
      />
      <div className="about-grid">
        <div>
          <Photo
            className="about-photo"
            src={p.aboutImage}
            label={p.aboutImage ? `${p.name} — portrait` : "YOUR_ABOUT_PHOTO"}
          />
          <div className="about-caption">
            <span>LET'S CONNECT</span>
            <Socials />
          </div>
        </div>
        <div>
          <h3>A little introduction.</h3>
          <p className="about-description">
            {p.about || "[WRITE YOUR ABOUT ME DESCRIPTION HERE]"}
          </p>
          <dl className="details">
            {fields.map(([label, value, placeholder]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value || `[${placeholder}]`}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="skills" className="section tinted">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="TOOLS OF THE TRADE"
          title="My toolkit"
          description="The technologies and tools behind the work."
        />
        {skills.some((s) => s.isExample) && (
          <p className="example-note">
            Suggested toolkit · Example skills below are awaiting
            personalization.
          </p>
        )}
        <div className="skills-grid">
          {skills.map((s, i) => {
            const Icon = icons[s.icon] || CodeFallback;
            return (
              <article className="skill-card" key={s.category}>
                <div className="skill-top">
                  <Icon size={25} strokeWidth={1.5} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.category}</h3>
                <div className="tags">
                  {s.items.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const CodeFallback = Terminal;
export function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHeading
        number="03"
        eyebrow="THE JOURNEY SO FAR"
        title="Experience & education"
      />
      <div className="journey-grid">
        <div>
          <h3 className="column-heading">
            <BriefcaseBusiness size={20} /> Experience & responsibility
          </h3>
          <div className="timeline">
            {experience.length ? (
              experience.map((e, i) => (
                <article key={e.id || i}>
                  <span className="timeline-date">
                    {e.duration || "[START DATE] – [END DATE]"}
                  </span>
                  <h4>{e.role || "[JOB TITLE]"}</h4>
                  <p>{e.company || "[COMPANY NAME]"}</p>
                  <p>{e.description || "[DESCRIPTION]"}</p>
                </article>
              ))
            ) : (
              <article>
                <span className="timeline-date">YOUR NEXT CHAPTER</span>
                <h4>{career.emptyTitle}</h4>
                <p>{career.emptyDescription}</p>
                <a className="text-link" href="#contact">
                  Let's connect <ArrowUpRight size={16} />
                </a>
              </article>
            )}
          </div>
        </div>
        <div>
          <h3 className="column-heading">
            <GraduationCap size={21} /> Education
          </h3>
          <div className="timeline">
            {education.map((e, i) => (
              <article key={e.id || i}>
                <span className="timeline-date">
                  {e.duration || "[START YEAR] – [END YEAR]"}
                </span>
                <h4>{e.degree || "[DEGREE]"}</h4>
                <p>{e.institution || "[COLLEGE / UNIVERSITY]"}</p>
                <p>{e.description || "[DESCRIPTION]"}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
