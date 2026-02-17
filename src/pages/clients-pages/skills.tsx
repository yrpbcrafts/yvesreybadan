import { useState } from "react";

interface SkillGroup {
  category: string;
  label: string;
  skills: string[];
  index: string;
}

const categories = [
  { id: "all",       label: "All"       },
  { id: "languages", label: "Languages" },
  { id: "frontend",  label: "Frontend"  },
  { id: "backend",   label: "Backend"   },
  { id: "data",      label: "Data & DB" },
  { id: "tools",     label: "Tools"     },
  { id: "other",     label: "Other"     },
];

const skillGroups: SkillGroup[] = [
  {
    category: "languages",
    label: "Programming Languages",
    skills: ["Java", "JavaScript", "PHP"],
    index: "01",
  },
  {
    category: "frontend",
    label: "Frontend Frameworks",
    skills: ["React", "Angular", "Vue.js"],
    index: "02",
  },
  {
    category: "frontend",
    label: "UI Libraries & Styling",
    skills: ["Bootstrap", "Mantine", "Material UI", "CSS", "HTML"],
    index: "03",
  },
  {
    category: "data",
    label: "Data Visualization",
    skills: ["D3.js", "Chart.js"],
    index: "04",
  },
  {
    category: "backend",
    label: "Backend Technologies",
    skills: ["Node.js", "Laravel"],
    index: "05",
  },
  {
    category: "backend",
    label: "Web Development",
    skills: ["RESTful APIs", "MVC Architecture"],
    index: "06",
  },
  {
    category: "data",
    label: "Databases",
    skills: ["MySQL", "Database Design", "Query Optimization"],
    index: "07",
  },
  {
    category: "tools",
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "XAMPP"],
    index: "08",
  },
  {
    category: "other",
    label: "Other Skills",
    skills: ["Debugging", "System Analysis", "Problem Solving"],
    index: "09",
  },
];

const summaryStats = [
  { value: "3",  label: "Languages"      },
  { value: "8",  label: "Frameworks"     },
  { value: "5",  label: "Tools"          },
  { value: "9",  label: "Skill Groups"   },
];

// ── Skill pill ────────────────────────────────────────────────
const SkillPill = ({ name, highlight }: { name: string; highlight: boolean }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center cursor-default transition-all duration-200"
      style={{
        padding: "0.4rem 0.9rem",
        borderRadius: "2px",
        fontFamily: '"Courier New", monospace',
        fontSize: "0.68rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        border: `1px solid ${hovered ? "#ea580c" : highlight ? "rgba(234,88,12,0.35)" : "#292524"}`,
        color: hovered ? "#ea580c" : highlight ? "#a8a29e" : "#57534e",
        backgroundColor: hovered ? "rgba(234,88,12,0.06)" : "transparent",
      }}
    >
      {name}
    </span>
  );
};

// ── Main component ────────────────────────────────────────────
export const Skills = () => {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === active);

  const countFor = (id: string) =>
    id === "all"
      ? skillGroups.reduce((a, g) => a + g.skills.length, 0)
      : skillGroups.filter((g) => g.category === id).reduce((a, g) => a + g.skills.length, 0);

  return (
    <div id="skills" className="relative bg-stone-950 min-h-screen overflow-hidden pb-32">

      {/* ── Grain ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── Left-side glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 45% 60% at 0% 60%, rgba(234,88,12,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Ghost watermark ── */}
      <div
        className="absolute left-[-1%] top-1/2 uppercase font-black select-none pointer-events-none"
        style={{
          fontFamily: '"Georgia", serif',
          fontSize: "clamp(7rem, 20vw, 20rem)",
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(41,37,36,0.45)",
          opacity: 0.45,
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          lineHeight: 1,
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        Skills
      </div>

      {/* ── Header ── */}
      <div className="relative max-w-6xl mx-auto px-8 pt-28 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-orange-600" />
          <span
            className="text-orange-600 uppercase font-semibold"
            style={{ fontFamily: '"Courier New", monospace', fontSize: "0.7rem", letterSpacing: "0.28em" }}
          >
            Expertise
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
            Skills<span className="text-orange-600">.</span>
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
            Technologies and tools I work with daily to ship fast, scalable,
            and maintainable products.
          </p>
        </div>
      </div>

      {/* ── Top rule ── */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-stone-900" />
      </div>

      {/* ── Two-column layout ── */}
      <div
        className="max-w-6xl mx-auto px-8 pt-12"
        style={{ display: "grid", gridTemplateColumns: "14rem 1fr", gap: "4rem", alignItems: "start" }}
      >
        {/* Left: Category filter */}
        <div style={{ position: "sticky", top: "6rem" }}>
          <p
            className="text-stone-700 mb-5"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Filter by
          </p>
          <div className="flex flex-col">
            {categories.map((cat) => {
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="flex items-center gap-3 py-3 bg-transparent border-0 border-b border-stone-900 cursor-pointer text-left transition-all"
                >
                  {/* Dot indicator */}
                  <div
                    className="flex-shrink-0 rounded-full transition-all duration-200"
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: isActive ? "#ea580c" : "transparent",
                      border: `1px solid ${isActive ? "#ea580c" : "#44403c"}`,
                    }}
                  />
                  <span
                    className="uppercase transition-colors duration-200"
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: isActive ? "#ea580c" : "#57534e",
                      fontWeight: isActive ? 700 : 400,
                    }}
                  >
                    {cat.label}
                  </span>
                  {/* Skill count */}
                  <span
                    className="ml-auto transition-colors duration-200"
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      color: isActive ? "#ea580c" : "#2c2927",
                    }}
                  >
                    {countFor(cat.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Skill groups */}
        <div className="flex flex-col">
          {visible.map((group, i) => (
            <div
              key={group.index}
              className="border-b border-stone-900 py-9"
              style={{
                animation: "skillFadeUp 0.35s ease both",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {/* Group header */}
              <div className="flex items-baseline gap-5 mb-5">
                <span
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "#ea580c",
                    opacity: 0.7,
                    minWidth: "1.5rem",
                  }}
                >
                  {group.index}
                </span>
                <h4
                  className="font-bold m-0"
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: "1.05rem",
                    letterSpacing: "-0.01em",
                    color: "#d6d3d1",
                  }}
                >
                  {group.label}
                </h4>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 pl-11">
                {group.skills.map((skill) => (
                  <SkillPill key={skill} name={skill} highlight={active !== "all"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Summary stats ── */}
      <div className="max-w-6xl mx-auto px-8 mt-16">
        <div className="h-px bg-stone-900 mb-8" />
        <div className="flex items-center justify-between flex-wrap gap-8">
          {summaryStats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-black text-stone-50"
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: "2.5rem",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                className="text-stone-700 mt-1.5 uppercase"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
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
        @keyframes skillFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};