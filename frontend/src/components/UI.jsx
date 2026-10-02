import {
  Github,
  Linkedin,
  ArrowUpRight,
  Image as ImageIcon,
} from "lucide-react";
import { personalInfo as p } from "../data/personalInfo";
import { safeUrl } from "../utils/links";
export function ExternalLink({
  href,
  children,
  className = "",
  label,
  download,
}) {
  const url = safeUrl(href);
  return url ? (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      download={download}
    >
      {children}
    </a>
  ) : (
    <span
      className={`${className} unavailable`}
      aria-label={label ? `${label}: not configured` : undefined}
      title="Link not configured"
    >
      {children}
    </span>
  );
}
export function Socials() {
  return (
    <div className="socials">
      <ExternalLink href={p.github} label="GitHub">
        <Github size={19} />
      </ExternalLink>
      <ExternalLink href={p.linkedin} label="LinkedIn">
        <Linkedin size={19} />
      </ExternalLink>
    </div>
  );
}
export function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Photo({ src, label, className = "", priority = false }) {
  const url = safeUrl(src);
  return (
    <div className={`photo ${className}`}>
      {url ? (
        <img
          src={url}
          alt={label}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.hidden = false;
          }}
        />
      ) : null}
      <div className="photo-placeholder" hidden={!!url}>
        <ImageIcon size={30} strokeWidth={1} />
        <span>{label}</span>
      </div>
    </div>
  );
}
export function TextLink({ href, children }) {
  return (
    <a href={href} className="text-link">
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
