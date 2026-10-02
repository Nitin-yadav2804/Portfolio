import {
  ArrowUpRight,
  Github,
  Layers,
  Server,
  Layout,
  ArrowRight,
  Terminal,
  Code2,
} from "lucide-react";
import { projects } from "../data/projects";
import { ExternalLink, Photo, SectionHeading } from "../components/UI";
function ProjectCard({ project, featured, index, showLiveDemo }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-visual">
        {project.image ? (
          <Photo
            src={project.image}
            label={`${project.title} project preview`}
          />
        ) : (
          <div className="project-cover">
            <Code2 size={38} strokeWidth={1.2} />
            <span>{project.title}</span>
            <small>{project.technologies.slice(0, 3).join(" / ")}</small>
          </div>
        )}
        <span className="project-index">
          PROJECT / {String(index + 1).padStart(2, "0")}
        </span>
        {featured && <span className="featured-badge">FEATURED PROJECT</span>}
      </div>
      <div className="project-content">
        <div className="tags">
          {project.technologies.map((t, i) => (
            <span key={i}>{t || "[TECHNOLOGY]"}</span>
          ))}
        </div>
        <h4>
          {project.title ||
            (featured ? "[FULL STACK PROJECT NAME]" : "[PROJECT NAME]")}
        </h4>
        <p>{project.description || "[PROJECT DESCRIPTION]"}</p>
        <ul className="features">
          {project.features.map((feature, i) => (
            <li key={i}>
              <ArrowRight size={13} />
              {feature || "[FEATURE]"}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <ExternalLink className="button secondary" href={project.github}>
            <Github size={16} /> Source code
          </ExternalLink>
          {showLiveDemo && (
            <ExternalLink className="text-link" href={project.liveDemo}>
              Live Demo <ArrowUpRight size={16} />
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
export default function Projects() {
  const groups = [
    ["fullStack", "Full Stack Projects", Layers],
    ["backend", "Backend Projects", Server],
    ["frontend", "Frontend Projects", Layout],
    ["nodejs", "Node.js Projects", Terminal],
  ];
  return (
    <section id="projects" className="section tinted">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="FROM CONCEPT TO CODE"
          title="Selected projects"
          description="A space for the things I build. Explore the work, the process, and the code."
        />
        {groups.map(([key, title, Icon]) => (
          <div className="project-group" key={key}>
            <div className="project-group-heading">
              <h3>
                <Icon size={20} />
                {title}
              </h3>
              <span>
                {String(projects[key].length).padStart(2, "0")} PROJECT
                {projects[key].length === 1 ? "" : "S"}
              </span>
            </div>
            <div
              className={
                key === "fullStack" ? "featured-grid" : "projects-grid"
              }
            >
              {projects[key].map((project, index) => (
                <ProjectCard
                  key={project.id || index}
                  project={project}
                  featured={key === "fullStack" && index === 0}
                  index={index}
                  showLiveDemo={
                    Boolean(project.liveDemo) &&
                    ["frontend", "fullStack"].includes(key)
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
