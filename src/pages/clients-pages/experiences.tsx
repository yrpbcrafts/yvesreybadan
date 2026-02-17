import { useState } from "react";

interface Experience {
  index: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: "current" | "past";
  highlights: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    index: "01",
    role: "JavaScript AWS Developer",
    company: "Nityo InfoTech Services",
    location: "Philippines",
    period: "November 2024 – Present",
    status: "current",
    highlights: [
      "Developed and maintained multiple applications across web platforms",
      "Integrated and enhanced RESTful APIs, including maintenance of shared API libraries",
      "Built frontend microsites and pages utilizing existing API libraries",
      "Assisted in application deployment using established CI/CD frameworks",
      "Ensured high-quality builds and enforced remediation of identified security vulnerabilities",
      "Created and maintained comprehensive documentation for applications and APIs",
      "Followed established coding standards and frameworks to ensure code quality consistency",
      "Collaborated with cross-functional teams to deliver applications aligned with user specifications",
      "Escalated infrastructure and development concerns to relevant technical leads when required",
      "Designed applications with a focus on scalability and reusability",
    ],
    tags: ["JavaScript", "AWS", "CI/CD", "RESTful APIs"],
  },
  {
    index: "02",
    role: "Web Developer",
    company: "NTEK Systems",
    location: "Philippines",
    period: "September 2023 – November 2024",
    status: "past",
    highlights: [
      "Built and maintained web servers supporting IoT and POS system integrations",
      "Developed RESTful APIs for IoT projects and third-party system communication",
      "Integrated APIs with IoT devices and POS systems/terminals",
      "Configured networks to support secure web server and IoT connections",
      "Deployed and managed cloud infrastructure using Amazon EC2",
      "Developed payment solutions for mobile and traditional POS terminals",
      "Optimized applications for performance across mobile and traditional POS systems",
      "Conducted web server training sessions and system demos for clients",
      "Developed an AI chatbot for a Library Management System to handle book inquiries",
      "Built an HR AI system using Machine Learning, LangChain, Ollama, and LLaMA models",
    ],
    tags: ["Node.js", "IoT", "Amazon EC2", "LangChain", "AI/ML"],
  },
  {
    index: "03",
    role: "Programmer – Trainee",
    company: "BeWell Nutraceuticals Corporation",
    location: "Philippines",
    period: "April 2023 – July 2023",
    status: "past",
    highlights: [
      "Developed an in-house stock monitoring system using Angular, Sails.js, and MS SQL",
      "Collaborated with other development teams on a mobile receipt extraction application using Java and OCR technologies",
      "Wrote and maintained SQL scripts for database operations and reporting",
      "Trained in front-end and back-end development, contributing to full-stack application delivery",
    ],
    tags: ["Angular", "Sails.js", "MS SQL", "Java", "OCR"],
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.35s ease" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Experience = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div id="experience" className="relative bg-stone-950 min-h-screen overflow-hidden pb-32">

      {/* ── Grain ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── Radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 50% at 100% 50%, rgba(234,88,12,0.06) 0%, transparent 70%)" }}
      />

      {/* ── Ghost watermark ── */}
      <div
        className="absolute right-[-1%] top-1/2 uppercase font-black select-none pointer-events-none"
        style={{
          fontFamily: '"Georgia", serif',
          fontSize: "clamp(7rem, 20vw, 20rem)",
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(41,37,36,0.45)",
          opacity: 0.4,
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          lineHeight: 1,
          transform: "translateY(-50%)",
        }}
      >
        Career
      </div>

      {/* ── Header ── */}
      <div className="relative max-w-6xl mx-auto px-8 pt-28 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-orange-600" />
          <span
            className="text-orange-600 uppercase font-semibold"
            style={{ fontFamily: '"Courier New", monospace', fontSize: "0.7rem", letterSpacing: "0.28em" }}
          >
            Work History
          </span>
        </div>
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <h2
            className="font-black text-stone-50 m-0"
            style={{
              fontFamily: '"Georgia", "Times New Roman", serif',
              fontSize: "clamp(3rem, 7vw, 6rem)",
              letterSpacing: "-0.03em", lineHeight: 1,
            }}
          >
            Experience<span className="text-orange-600">.</span>
          </h2>
          <p
            className="text-stone-600 mb-1"
            style={{ fontFamily: '"Georgia", serif', fontSize: "1rem", maxWidth: "22rem", lineHeight: 1.7 }}
          >
            Over 2 years building production systems — from IoT integrations
            to cloud-deployed web platforms.
          </p>
        </div>
      </div>

      {/* ── Top rule ── */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-stone-900" />
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="relative" style={{ paddingLeft: "3.5rem" }}>

          {/* Vertical spine */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: "0.65rem",
              background: "linear-gradient(to bottom, #1c1917 0%, #ea580c 20%, #1c1917 100%)",
            }}
          />

          {experiences.map((exp, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={exp.index} className="relative" style={{ paddingTop: i === 0 ? "3rem" : "0" }}>

                {/* Timeline dot */}
                <div
                  className="absolute rounded-full z-10 transition-all duration-300"
                  style={{
                    left: "-3.07rem",
                    top: i === 0 ? "3.85rem" : "1.65rem",
                    width: "1rem", height: "1rem",
                    backgroundColor: isOpen ? "#ea580c" : "#0c0a09",
                    border: `1.5px solid ${isOpen ? "#ea580c" : exp.status === "current" ? "#ea580c" : "#44403c"}`,
                    boxShadow: isOpen
                      ? "0 0 12px rgba(234,88,12,0.5)"
                      : exp.status === "current"
                      ? "0 0 8px rgba(234,88,12,0.25)"
                      : "none",
                  }}
                />

                {/* Pulsing dot for current role */}
                {exp.status === "current" && (
                  <div
                    className="absolute rounded-full"
                    style={{
                      left: "-2.72rem",
                      top: i === 0 ? "4.2rem" : "2rem",
                      width: "5px", height: "5px",
                      backgroundColor: "#ea580c",
                      boxShadow: "0 0 6px #ea580c",
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                )}

                {/* Card */}
                <div
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="border-b border-stone-900 cursor-pointer"
                  style={{ padding: i === 0 ? "3rem 0 2.5rem" : "2.5rem 0" }}
                >
                  {/* Top row */}
                  <div className="flex items-start gap-6 mb-5">
                    <div className="flex-1">
                      {/* Period */}
                      <p
                        className="mb-2.5 uppercase"
                        style={{
                          fontFamily: '"Courier New", monospace',
                          fontSize: "0.62rem", letterSpacing: "0.15em",
                          color: exp.status === "current" ? "#ea580c" : "#44403c",
                        }}
                      >
                        {exp.period}
                        {exp.status === "current" && (
                          <span
                            className="ml-3 text-orange-600"
                            style={{
                              padding: "0.15rem 0.5rem",
                              border: "1px solid rgba(234,88,12,0.4)",
                              borderRadius: "2px",
                              fontSize: "0.55rem", letterSpacing: "0.15em",
                            }}
                          >
                            NOW
                          </span>
                        )}
                      </p>

                      {/* Role */}
                      <h3
                        className="font-black m-0 mb-1 transition-colors duration-300"
                        style={{
                          fontFamily: '"Georgia", serif',
                          fontSize: "clamp(1.3rem, 3vw, 2rem)",
                          letterSpacing: "-0.02em",
                          color: isOpen ? "#fafaf9" : "#d6d3d1",
                        }}
                      >
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <p
                        className="m-0 italic text-stone-500"
                        style={{ fontFamily: '"Georgia", serif', fontSize: "0.95rem" }}
                      >
                        {exp.company} · {exp.location}
                      </p>
                    </div>

                    {/* Toggle */}
                    <div
                      className="flex items-center gap-2 flex-shrink-0 pt-1 transition-colors duration-300"
                      style={{ color: isOpen ? "#ea580c" : "#44403c" }}
                    >
                      <span style={{
                        fontFamily: '"Courier New", monospace',
                        fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase",
                      }}>
                        {exp.index}
                      </span>
                      <ChevronIcon open={isOpen} />
                    </div>
                  </div>

                  {/* Expanded body */}
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: isOpen ? "1000px" : "0px",
                      transition: "max-height 0.55s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-7">
                      {exp.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-orange-600 uppercase"
                          style={{
                            fontFamily: '"Courier New", monospace',
                            fontSize: "0.6rem", letterSpacing: "0.1em",
                            border: "1px solid rgba(234,88,12,0.3)",
                            padding: "0.25rem 0.65rem", borderRadius: "2px",
                            backgroundColor: "rgba(234,88,12,0.05)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-col gap-3">
                      {exp.highlights.map((point, pi) => (
                        <div key={pi} className="flex gap-4 items-start">
                          <div
                            className="flex-shrink-0 rounded-full bg-orange-600"
                            style={{ width: "4px", height: "4px", marginTop: "0.55rem" }}
                          />
                          <p
                            className="m-0 text-stone-400"
                            style={{ fontFamily: '"Georgia", serif', fontSize: "0.93rem", lineHeight: 1.75 }}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Collapsed preview */}
                  <p
                    className="m-0 italic text-stone-700 overflow-hidden"
                    style={{
                      fontFamily: '"Georgia", serif', fontSize: "0.88rem",
                      maxHeight: isOpen ? "0" : "2rem",
                      opacity: isOpen ? 0 : 1,
                      transition: "opacity 0.2s ease, max-height 0.3s ease",
                    }}
                  >
                    {exp.highlights[0]}…
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="max-w-6xl mx-auto px-8 mt-20">
        <div className="h-px bg-stone-900 mb-10" />
        <div className="flex items-center justify-between flex-wrap gap-8">
          {[
            { value: "2+",  label: "Years Experience" },
            { value: "3",   label: "Companies"        },
            { value: "24+", label: "Highlights"       },
            { value: "1",   label: "Current Role"     },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-black text-stone-50"
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: "2.5rem", letterSpacing: "-0.03em", lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                className="text-stone-700 mt-1.5 uppercase"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: "0.6rem", letterSpacing: "0.2em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom edge ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #292524, transparent)" }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }
      `}</style>
    </div>
  );
};