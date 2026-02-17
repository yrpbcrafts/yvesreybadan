import { useState, useEffect, useRef, useCallback } from "react";

interface Testimonial {
  index: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
}

const testimonials: Testimonial[] = [
  {
    index: "01",
    quote:
      "Yves consistently delivered clean, well-structured code that the whole team could build on. His instinct for API design and his attention to edge cases made our shared libraries significantly more robust.",
    author: "Maria Santos",
    role: "Senior Software Engineer",
    company: "Nityo InfoTech Services",
    relationship: "Direct Colleague",
  },
  {
    index: "02",
    quote:
      "What stood out most was how Yves bridged the gap between hardware and software. Getting APIs to reliably talk to IoT devices isn't trivial — he made it look easy and documented everything thoroughly.",
    author: "Ramon Cruz",
    role: "Lead Engineer",
    company: "NTEK Systems",
    relationship: "Team Lead",
  },
  {
    index: "03",
    quote:
      "Yves built our stock monitoring system from scratch in a matter of weeks. It was exactly what we needed — fast, accurate, and easy for the warehouse team to use without any training.",
    author: "Claire Reyes",
    role: "Operations Manager",
    company: "BeWell Nutraceuticals",
    relationship: "Client",
  },
  {
    index: "04",
    quote:
      "He's one of those developers who asks the right questions before writing a single line of code. The AI chatbot he built for our library system handled real queries better than we expected at that scope.",
    author: "Joel Fernandez",
    role: "IT Director",
    company: "NTEK Systems",
    relationship: "Project Sponsor",
  },
];

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number, dir: "left" | "right" = "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setAnimating(false);
      }, 320);
    },
    [animating]
  );

  const prev = () => {
    const idx = (active - 1 + testimonials.length) % testimonials.length;
    goTo(idx, "left");
    resetInterval();
  };

  const next = useCallback(() => {
    const idx = (active + 1) % testimonials.length;
    goTo(idx, "right");
  }, [active, goTo]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const t = testimonials[active];

  return (
    <div
      id="testimonials"
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

      {/* ── Diagonal glow — bottom left ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 0% 100%, rgba(234,88,12,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Ghost quote mark — decorative bg ── */}
      <div
        className="absolute select-none pointer-events-none font-black"
        style={{
          fontFamily: '"Georgia", serif',
          fontSize: "clamp(18rem, 45vw, 42rem)",
          lineHeight: 0.75,
          color: "transparent",
          WebkitTextStroke: "1px rgba(41,37,36,0.35)",
          opacity: 0.3,
          top: "-4rem",
          right: "-2rem",
          userSelect: "none",
        }}
      >
        "
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
            Kind Words
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
            Testimonials<span className="text-orange-600">.</span>
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
            What colleagues, leads, and clients have said about working
            with me.
          </p>
        </div>
      </div>

      {/* ── Top rule ── */}
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <div className="h-px bg-stone-900" />
      </div>

      {/* ── Main carousel ── */}
      <div className="relative max-w-6xl mx-auto px-8">

        {/* Progress bar */}
        <div className="w-full h-px bg-stone-900 mb-12 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-orange-600"
            style={{
              width: `${((active + 1) / testimonials.length) * 100}%`,
              transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </div>

        {/* Quote area */}
        <div
          className="relative"
          style={{
            minHeight: "22rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Index label */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-orange-600"
              style={{
                fontFamily: '"Courier New", monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                opacity: 0.7,
              }}
            >
              {t.index}
            </span>
            <div className="h-px w-12 bg-stone-800" />
            <span
              className="text-stone-700 uppercase"
              style={{
                fontFamily: '"Courier New", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
              }}
            >
              {t.relationship}
            </span>
          </div>

          {/* Opening quote mark */}
          <div
            className="absolute font-black text-orange-600"
            style={{
              fontFamily: '"Georgia", serif',
              fontSize: "5rem",
              lineHeight: 1,
              top: "3.5rem",
              left: "-1rem",
              opacity: 0.25,
              userSelect: "none",
            }}
          >
            "
          </div>

          {/* Quote text */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "right" ? "-24px" : "24px"})`
                : "translateX(0)",
              transition:
                "opacity 0.32s ease, transform 0.32s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <blockquote
              className="m-0 mb-10"
              style={{
                fontFamily: '"Georgia", "Times New Roman", serif',
                fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
                lineHeight: 1.55,
                color: "#e7e5e4",
                letterSpacing: "-0.01em",
                fontStyle: "italic",
                paddingLeft: "1.5rem",
                maxWidth: "52rem",
              }}
            >
              {t.quote}
            </blockquote>

            {/* Author block */}
            <div className="flex items-center gap-5 pl-6">
              {/* Avatar initials */}
              <div
                className="flex-shrink-0 flex items-center justify-center font-black"
                style={{
                  width: "3rem",
                  height: "3rem",
                  border: "1px solid rgba(234,88,12,0.35)",
                  borderRadius: "2px",
                  backgroundColor: "rgba(234,88,12,0.06)",
                  fontFamily: '"Georgia", serif',
                  fontSize: "0.9rem",
                  color: "#ea580c",
                  letterSpacing: "-0.02em",
                }}
              >
                {t.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <p
                  className="m-0 font-black text-stone-100"
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.author}
                </p>
                <p
                  className="m-0 text-stone-600"
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    marginTop: "0.2rem",
                  }}
                >
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-between mt-16">

          {/* Dot navigation */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i, i > active ? "right" : "left");
                  resetInterval();
                }}
                className="transition-all duration-300"
                style={{
                  width: i === active ? "2rem" : "0.4rem",
                  height: "2px",
                  backgroundColor: i === active ? "#ea580c" : "#292524",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  borderRadius: "1px",
                }}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: "2.75rem",
                height: "2.75rem",
                border: "1px solid #292524",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "#57534e",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ea580c";
                e.currentTarget.style.color = "#ea580c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#292524";
                e.currentTarget.style.color = "#57534e";
              }}
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => { next(); resetInterval(); }}
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: "2.75rem",
                height: "2.75rem",
                border: "1px solid #292524",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "#57534e",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ea580c";
                e.currentTarget.style.color = "#ea580c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#292524";
                e.currentTarget.style.color = "#57534e";
              }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* ── Thumbnail strip ── */}
      <div className="max-w-6xl mx-auto px-8 mt-16">
        <div className="h-px bg-stone-900 mb-8" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${testimonials.length}, 1fr)`,
            gap: "1px",
            backgroundColor: "#1c1917",
          }}
        >
          {testimonials.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.index}
                onClick={() => {
                  goTo(i, i > active ? "right" : "left");
                  resetInterval();
                }}
                className="text-left transition-all duration-300"
                style={{
                  padding: "1.25rem 1.5rem",
                  backgroundColor: isActive ? "rgba(234,88,12,0.05)" : "#0c0a09",
                  border: "none",
                  cursor: "pointer",
                  borderTop: `2px solid ${isActive ? "#ea580c" : "transparent"}`,
                }}
              >
                <p
                  className="m-0 mb-1 font-black transition-colors duration-300"
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: "0.85rem",
                    color: isActive ? "#e7e5e4" : "#57534e",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.author}
                </p>
                <p
                  className="m-0 uppercase"
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    color: isActive ? "#ea580c" : "#2c2927",
                    transition: "color 0.3s",
                  }}
                >
                  {item.company}
                </p>
              </button>
            );
          })}
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
    </div>
  );
};