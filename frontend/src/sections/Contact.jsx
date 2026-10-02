import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  LoaderCircle,
} from "lucide-react";
import { personalInfo as p } from "../data/personalInfo";
import { SectionHeading, ExternalLink } from "../components/UI";
export default function Contact() {
  const [state, setState] = useState({ status: "idle", message: "" });
  const [delivery, setDelivery] = useState("checking");
  const [draft, setDraft] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    fetch("/api/contact/status", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((result) =>
        setDelivery(result.deliveryAvailable === true ? "server" : "email"),
      )
      .catch(() => setDelivery("email"))
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);
  function emailDraft(values) {
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: p.email,
      su: values.subject.trim(),
      body: `${values.message.trim()}\n\nFrom: ${values.name.trim()}\nReply to: ${values.email.trim()}`,
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
  }
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const draftUrl = emailDraft(values);
    setDraft(draftUrl);
    if (delivery !== "server") {
      window.open(draftUrl, "_blank", "noopener,noreferrer");
      setState({
        status: "draft",
        message:
          "Continue in Gmail to review your draft and press Send. If no tab opened, use the link below. Nothing has been sent from this website.",
      });
      return;
    }
    setState({ status: "loading", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (response.status === 503) {
        setDelivery("email");
        setState({
          status: "error",
          message:
            "Direct delivery is unavailable. Your message is preserved; use the email draft link below.",
        });
        return;
      }
      if (!response.ok)
        throw new Error(
          result.message || "Unable to send your message. Please try again.",
        );
      setState({ status: "success", message: result.message });
      setDraft("");
      form.reset();
    } catch (error) {
      setState({
        status: "error",
        message:
          error.name === "TimeoutError"
            ? "The request timed out. Please try again shortly."
            : error.message === "Failed to fetch"
              ? "Unable to reach the server. Please try again shortly."
              : error.message,
      });
    }
  }
  return (
    <section id="contact" className="section container">
      <SectionHeading
        number="05"
        eyebrow="GET IN TOUCH"
        title="Let's connect."
      />
      <div className="contact-grid">
        <div className="contact-copy">
          <h3>Good work starts with a hello.</h3>
          <p>
            Have a project, internship opportunity, or collaboration in mind?
            Tell me what you’re working on — I’d love to hear from you.
          </p>
          <div className="contact-details">
            <div>
              <Mail />
              <span>
                <small>Email</small>
                {p.email ? (
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                ) : (
                  "[YOUR EMAIL]"
                )}
              </span>
            </div>
            <div>
              <Phone />
              <span>
                <small>Phone</small>
                {p.phone ? (
                  <a href={`tel:${p.phone}`}>{p.phone}</a>
                ) : (
                  "[YOUR PHONE]"
                )}
              </span>
            </div>
          </div>
          <div className="contact-socials">
            <ExternalLink href={p.github}>
              <Github size={18} /> {p.github ? "GitHub" : "[YOUR GITHUB URL]"}
              <ArrowUpRight size={15} />
            </ExternalLink>
            <ExternalLink href={p.linkedin}>
              <Linkedin size={18} />
              {p.linkedin ? "LinkedIn" : "[YOUR LINKEDIN URL]"}
              <ArrowUpRight size={15} />
            </ExternalLink>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h3 className="contact-form-heading">Write me a note</h3>
          <p className="contact-method">
            {delivery === "checking"
              ? "Checking how to send your note…"
              : delivery === "server"
                ? "Send a message directly from this form."
                : "Fill in your note, then open Gmail in a new tab to review and send it. You may need to sign in."}
          </p>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
                minLength={2}
                maxLength={100}
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label>
            Subject
            <input
              name="subject"
              placeholder="What would you like to discuss?"
              required
              minLength={3}
              maxLength={160}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me a little about your idea…"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
            />
          </label>
          <button
            className="button primary submit-button"
            disabled={state.status === "loading" || delivery === "checking"}
          >
            {state.status === "loading" ? (
              <>
                <LoaderCircle className="spin" size={18} /> Sending…
              </>
            ) : (
              <>
                {delivery === "checking"
                  ? "Please wait…"
                  : delivery === "server"
                    ? "Send message"
                    : "Open draft in Gmail"}{" "}
                <ArrowUpRight size={18} />
              </>
            )}
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {state.message}
          </p>
          {draft &&
            state.status !== "success" &&
            state.status !== "loading" && (
              <div className="draft-actions">
                <a
                  className="text-link"
                  href={draft}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continue to Gmail <ArrowUpRight size={15} />
                </a>
                <p>
                  Prefer another email service? Copy your note there and send it
                  to <a href={`mailto:${p.email}`}>{p.email}</a>.
                </p>
              </div>
            )}
        </form>
      </div>
    </section>
  );
}
