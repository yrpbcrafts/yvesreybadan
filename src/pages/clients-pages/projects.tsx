import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Luminary Dashboard",
    category: "Web App · SaaS",
    year: "2025",
    description:
      "A real-time analytics platform for e-commerce brands. Built with Next.js and D3.js, featuring live data streams, customizable widgets, and exportable reports.",
    tags: ["Next.js", "TypeScript", "D3.js", "Supabase"],
    live: "#",
    github: "#",
  },
  {
    number: "02",
    title: "Arcane Commerce",
    category: "E-Commerce · Fullstack",
    year: "2024",
    description:
      "A headless storefront built for a luxury fashion brand. Focused on performance and micro-animation, achieving sub-1s load times and 98 Lighthouse scores.",
    tags: ["React", "Node.js", "Stripe", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    number: "03",
    title: "Vox CMS",
    category: "Tool · Open Source",
    year: "2024",
    description:
      "A lightweight, opinionated content management system for developers who want full control without the overhead. Ships with a visual editor and REST + GraphQL APIs.",
    tags: ["Go", "React", "PostgreSQL", "GraphQL"],
    live: "#",
    github: "#",
  },
  {
    number: "04",
    title: "Meridian Maps",
    category: "Mobile · Geospatial",
    year: "2023",
    description:
      "An offline-first hiking app with custom tile rendering and route elevation profiles. Used by 4,000+ users across 12 countries.",
    tags: ["React Native", "MapLibre", "SQLite", "Expo"],
    live: "#",
    github: "#",
  },
];

export const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div id="projects" className="relative bg-stone-950 min-h-screen overflow-hidden pb-32">

      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── Top-right glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(234,88,12,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Ghost watermark ── */}
      <div
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 uppercase font-black select-none pointer-events-none"
        style={{
          fontFamily: '"Georgia", serif',
          fontSize: "clamp(8rem, 22vw, 22rem)",
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(41,37,36,0.5)",
          opacity: 0.4,
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          lineHeight: 1,
        }}
      >
        Work
      </div>

      {/* ── Header ── */}
      <div className="relative max-w-6xl mx-auto px-8 pt-28 pb-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-orange-600" />
          <span
            className="text-orange-600 uppercase font-semibold"
            style={{ fontFamily: '"Courier New", monospace', fontSize: "0.7rem", letterSpacing: "0.28em" }}
          >
            Selected Work
          </span>
        </div>

        {/* Heading + sub */}
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
            Projects<span className="text-orange-600">.</span>
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
            A curated selection of things I've built — shipped products,
            experiments, and open-source tools.
          </p>
        </div>
      </div>

      {/* ── Top rule ── */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-stone-900" />
      </div>

      {/* ── Project rows ── */}
      <div className="max-w-6xl mx-auto px-8">
        {projects.map((project, i) => {
          const isHovered = hovered === i;
          return (
            <div
              key={project.number}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative border-b border-stone-900 py-11 cursor-pointer"
            >
              {/* Left orange bar */}
              <div
                className="absolute left-[-2rem] top-0 bottom-0 w-[3px] bg-orange-600 origin-top"
                style={{
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
              />

              {/* Top row */}
              <div className="flex items-baseline gap-8 mb-5 flex-wrap">
                <span
                  className="min-w-[2rem]"
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: isHovered ? "#ea580c" : "#44403c",
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.number}
                </span>

                <h3
                  className="flex-1 m-0 font-black"
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                    letterSpacing: "-0.02em",
                    color: isHovered ? "#fafaf9" : "#d6d3d1",
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.title}
                </h3>

                <span
                  className="ml-auto"
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "#44403c",
                  }}
                >
                  {project.year}
                </span>
              </div>

              {/* Expandable body */}
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: isHovered ? "200px" : "0px",
                  transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <div className="pl-16 pb-2">
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#57534e",
                    }}
                  >
                    {project.category}
                  </p>

                  <p
                    className="mb-5 max-w-[44rem]"
                    style={{
                      fontFamily: '"Georgia", serif',
                      fontSize: "0.95rem",
                      color: "#a8a29e",
                      lineHeight: 1.75,
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 flex-wrap">
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-stone-800 text-stone-500"
                          style={{
                            fontFamily: '"Courier New", monospace',
                            fontSize: "0.6rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "2px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex-1" />

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-stone-600 no-underline transition-colors hover:text-stone-400"
                        style={{
                          fontFamily: '"Courier New", monospace',
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        <Github size={13} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-1.5 text-orange-600 no-underline transition-colors hover:text-orange-400"
                        style={{
                          fontFamily: '"Courier New", monospace',
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        <ExternalLink size={13} />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapsed state: category + arrow */}
              <div
                className="pl-16 flex items-center gap-4 overflow-hidden"
                style={{
                  opacity: isHovered ? 0 : 1,
                  maxHeight: isHovered ? "0" : "2rem",
                  transition: "opacity 0.2s ease, max-height 0.3s ease",
                }}
              >
                <span
                  className="text-stone-700"
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </span>
                <div className="flex-1" />
                <ArrowRight size={15} className="text-stone-700" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Footer CTA ── */}
      <div className="max-w-6xl mx-auto px-8 mt-20 flex items-center gap-6">
        <div className="flex-1 h-px bg-stone-900" />
        <a
          href="#"
          className="flex items-center gap-2 text-stone-600 no-underline transition-colors hover:text-orange-600 whitespace-nowrap"
          style={{
            fontFamily: '"Courier New", monospace',
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <span>View all on GitHub</span>
          <Github size={13} />
        </a>
        <div className="flex-1 h-px bg-stone-900" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #292524, transparent)" }}
      />
    </div>
  );
};