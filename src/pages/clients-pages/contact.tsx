import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const socialLinks = [
  {
    label: "GitHub",
    handle: "@yrpbcrafts",
    href: "https://github.com/yrpbcrafts",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Yves Rey Badan",
    href: "https://linkedin.com/in/yvesreybadan",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "yrpbadan.eg@gmail.com",
    href: "mailto:yrpbadan.eg@gmail.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ── Styled input ──────────────────────────────────────────────
const Field = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  textarea = false,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder: string;
  textarea?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  const baseStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid ${error ? "#ef4444" : focused ? "#ea580c" : "#292524"}`,
    padding: "0.75rem 0",
    fontFamily: '"Georgia", serif',
    fontSize: "0.95rem",
    color: "#e7e5e4",
    outline: "none",
    resize: "none" as const,
    transition: "border-color 0.25s ease",
    caretColor: "#ea580c",
  };

  return (
    <div style={{ position: "relative", marginBottom: "2.25rem" }}>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontFamily: '"Courier New", monospace',
          fontSize: "0.62rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: error ? "#ef4444" : focused || hasValue ? "#ea580c" : "#44403c",
          marginBottom: "0.5rem",
          transition: "color 0.25s ease",
        }}
      >
        {label}
        {error && (
          <span style={{ marginLeft: "0.75rem", letterSpacing: "0.1em", color: "#ef4444" }}>
            — {error}
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={id}
          value={value}
          placeholder={placeholder}
          rows={5}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...baseStyle, display: "block" }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...baseStyle, display: "block" }}
        />
      )}

      {/* Focus underline sweep */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          backgroundColor: "#ea580c",
          width: focused ? "100%" : "0%",
          transition: "width 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
};

// ── Main component ────────────────────────────────────────────
export const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (key: keyof FormState) => (v: string) => {
    setForm((f) => ({ ...f, [key]: v }));
    if (errors[key as keyof FormErrors]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSending(true);
    // Simulate send — wire to your backend/EmailJS/Formspree here
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div
      id="contact"
      className="relative bg-stone-950 min-h-screen overflow-hidden pb-32"
    >
      {/* ── Grain ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── Orange top-center glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(234,88,12,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Ghost watermark ── */}
      <div
        className="absolute select-none pointer-events-none uppercase font-black"
        style={{
          fontFamily: '"Georgia", serif',
          fontSize: "clamp(7rem, 20vw, 20rem)",
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(41,37,36,0.45)",
          opacity: 0.35,
          bottom: "-2%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        Let's Talk
      </div>

      {/* ── Header ── */}
      <div className="relative max-w-6xl mx-auto px-8 pt-28 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-orange-600" />
          <span
            className="text-orange-600 uppercase font-semibold"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
            }}
          >
            Get In Touch
          </span>
        </div>

        <div className="flex items-end justify-between gap-8 flex-wrap">
          <h2
            className="font-black text-stone-50 m-0"
            style={{
              fontFamily: '"Georgia", "Times New Roman", serif',
              fontSize: "clamp(3rem, 7vw, 6rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Contact<span className="text-orange-600">.</span>
          </h2>
          <p
            className="text-stone-600 mb-1"
            style={{
              fontFamily: '"Georgia", serif',
              fontSize: "1rem",
              maxWidth: "22rem",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>
      </div>

      {/* ── Top rule ── */}
      <div className="max-w-6xl mx-auto px-8 mb-0">
        <div className="h-px bg-stone-900" />
      </div>

      {/* ── Split layout ── */}
      <div
        className="relative max-w-6xl mx-auto px-8"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "0",
          alignItems: "start",
        }}
      >
        {/* ── Left panel ── */}
        <div
          className="py-16 pr-16"
          style={{ borderRight: "1px solid #1c1917" }}
        >
          {/* Availability badge */}
          <div
            className="flex items-center gap-3 mb-12"
            style={{
              padding: "0.75rem 1.25rem",
              border: "1px solid rgba(234,88,12,0.25)",
              borderRadius: "2px",
              backgroundColor: "rgba(234,88,12,0.04)",
              display: "inline-flex",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#22c55e",
                boxShadow: "0 0 6px #22c55e",
                animation: "contactPulse 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-stone-400"
              style={{
                fontFamily: '"Courier New", monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Available for new projects
            </span>
          </div>

          {/* Tagline */}
          <h3
            className="font-black mb-4"
            style={{
              fontFamily: '"Georgia", serif',
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "#e7e5e4",
            }}
          >
            Let's build something{" "}
            <span
              className="italic"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(231,229,228,0.3)",
              }}
            >
              remarkable
            </span>
            <span className="text-orange-600">.</span>
          </h3>

          <p
            className="mb-14 text-stone-500"
            style={{
              fontFamily: '"Georgia", serif',
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            Whether you have a project brief, a rough idea, or just want to
            explore possibilities — I'm open to conversations about frontend
            development, full-stack builds, and API work.
          </p>

          {/* Social links */}
          <div className="flex flex-col">
            <p
              className="text-stone-700 mb-4 uppercase"
              style={{
                fontFamily: '"Courier New", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
              }}
            >
              Find me on
            </p>

            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center justify-between group no-underline transition-all duration-200"
                style={{
                  padding: "1rem 0",
                  borderBottom: "1px solid #1c1917",
                  color: "#57534e",
                  animation: `contactFadeUp 0.4s ease both`,
                  animationDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ea580c")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#57534e")
                }
              >
                <div className="flex items-center gap-3">
                  <span style={{ transition: "color 0.2s" }}>{link.icon}</span>
                  <div>
                    <p
                      className="m-0 font-black transition-colors duration-200"
                      style={{
                        fontFamily: '"Georgia", serif',
                        fontSize: "0.9rem",
                        color: "inherit",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="m-0"
                      style={{
                        fontFamily: '"Courier New", monospace',
                        fontSize: "0.6rem",
                        letterSpacing: "0.06em",
                        color: "#44403c",
                        marginTop: "0.1rem",
                      }}
                    >
                      {link.handle}
                    </p>
                  </div>
                </div>
                <span
                  className="transition-transform duration-200"
                  style={{
                    transform: "translateX(0)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateX(3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <ArrowRight />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right panel: Form ── */}
        <div className="py-16 pl-16">
          {submitted ? (
            /* ── Success state ── */
            <div
              className="flex flex-col items-start justify-center h-full"
              style={{ minHeight: "28rem" }}
            >
              <div
                className="flex items-center justify-center mb-8"
                style={{
                  width: "4rem",
                  height: "4rem",
                  border: "1px solid rgba(234,88,12,0.4)",
                  borderRadius: "2px",
                  backgroundColor: "rgba(234,88,12,0.06)",
                  color: "#ea580c",
                }}
              >
                <CheckIcon />
              </div>
              <h3
                className="font-black mb-3"
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: "2rem",
                  letterSpacing: "-0.02em",
                  color: "#fafaf9",
                  lineHeight: 1.1,
                }}
              >
                Message sent<span className="text-orange-600">.</span>
              </h3>
              <p
                className="text-stone-500 mb-8"
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  maxWidth: "24rem",
                }}
              >
                Thanks for reaching out, {form.name.split(" ")[0]}. I'll get
                back to you within 24–48 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="uppercase transition-colors duration-200"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "#57534e",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ea580c")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#57534e")
                }
              >
                Send another message →
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <div>
              <p
                className="text-stone-700 mb-10 uppercase"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                }}
              >
                Send a message
              </p>

              {/* Name + Email row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                }}
              >
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={update("name")}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </div>

              <Field
                id="subject"
                label="Subject (optional)"
                value={form.subject}
                onChange={update("subject")}
                placeholder="What's this about?"
              />

              <Field
                id="message"
                label="Message"
                value={form.message}
                onChange={update("message")}
                error={errors.message}
                placeholder="Tell me about your project or idea..."
                textarea
              />

              {/* Submit */}
              <div className="flex items-center gap-6 mt-2">
                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className="flex items-center gap-3 uppercase transition-all duration-200"
                  style={{
                    padding: "0.9rem 2.25rem",
                    backgroundColor: sending ? "#292524" : "#ea580c",
                    color: "#fafaf9",
                    border: "none",
                    borderRadius: "2px",
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    fontWeight: 600,
                    cursor: sending ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending)
                      e.currentTarget.style.backgroundColor = "#c2410c";
                  }}
                  onMouseLeave={(e) => {
                    if (!sending)
                      e.currentTarget.style.backgroundColor = "#ea580c";
                  }}
                >
                  {sending ? (
                    <>
                      <span
                        style={{
                          display: "inline-block",
                          width: "10px",
                          height: "10px",
                          border: "1.5px solid rgba(250,250,249,0.3)",
                          borderTopColor: "#fafaf9",
                          borderRadius: "50%",
                          animation: "contactSpin 0.7s linear infinite",
                        }}
                      />
                      <span>Sending</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight />
                    </>
                  )}
                </button>

                <p
                  className="text-stone-700"
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Usually replies within 24h
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom edge ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #292524, transparent)",
        }}
      />

      <style>{`
        @keyframes contactPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactSpin {
          to { transform: rotate(360deg); }
        }
        input::placeholder, textarea::placeholder {
          color: #292524;
          font-family: "Georgia", serif;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};