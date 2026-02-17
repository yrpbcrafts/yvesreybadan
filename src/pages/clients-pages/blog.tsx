import { useState } from "react";

interface BlogPost {
  index: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
}

const posts: BlogPost[] = [
  {
    index: "01",
    slug: "building-restful-apis-at-scale",
    title: "Building RESTful APIs That Actually Scale",
    excerpt:
      "Most APIs are built to work — few are built to last. Here's what I've learned from maintaining shared API libraries across multiple production apps, and the patterns that make the difference.",
    category: "Backend",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    index: "02",
    slug: "iot-web-integration-lessons",
    title: "What IoT Taught Me About Web Development",
    excerpt:
      "Integrating APIs with physical devices forces you to think differently. Latency, reliability, and edge cases hit harder when hardware is on the other end.",
    category: "IoT",
    date: "Jan 22, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    index: "03",
    slug: "llm-hr-system-langchain",
    title: "Building an HR AI System with LangChain & LLaMA",
    excerpt:
      "A walkthrough of how I built a local LLM-powered HR assistant using LangChain, Ollama, and open-source models — without sending data to the cloud.",
    category: "AI / ML",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    index: "04",
    slug: "ci-cd-security-remediation",
    title: "Security Remediation Inside CI/CD Pipelines",
    excerpt:
      "Identifying and enforcing security fixes before they reach production is harder than it sounds. Here's the workflow that keeps our builds clean.",
    category: "DevOps",
    date: "Dec 18, 2024",
    readTime: "5 min read",
    featured: false,
  },
];

const ArrowUpRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Featured card ─────────────────────────────────────────────
const FeaturedCard = ({ post }: { post: BlogPost }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-stone-900 cursor-pointer transition-all duration-300 group"
      style={{
        borderColor: hovered ? "rgba(234,88,12,0.3)" : "#1c1917",
        backgroundColor: hovered ? "rgba(234,88,12,0.03)" : "transparent",
      }}
    >
      {/* Featured label — top-left corner tape */}
      <div
        className="absolute top-0 left-0 flex items-center gap-2 px-4 py-2"
        style={{ borderBottom: "1px solid #1c1917", borderRight: "1px solid #1c1917" }}
      >
        <div
          className="rounded-full"
          style={{ width: "5px", height: "5px", backgroundColor: "#ea580c" }}
        />
        <span
          className="text-orange-600 uppercase"
          style={{
            fontFamily: '"Courier New", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            fontWeight: 600,
          }}
        >
          Featured
        </span>
      </div>

      <div className="p-10 pt-16">
        {/* Meta row */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="text-stone-500 uppercase"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
            }}
          >
            {post.category}
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "#1c1917" }} />
          <span
            className="text-stone-700"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
            }}
          >
            {post.date} · {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-black mb-5 transition-colors duration-300"
          style={{
            fontFamily: '"Georgia", "Times New Roman", serif',
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: hovered ? "#fafaf9" : "#e7e5e4",
          }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className="mb-8"
          style={{
            fontFamily: '"Georgia", serif',
            fontSize: "1.05rem",
            color: "#78716c",
            lineHeight: 1.8,
            maxWidth: "48rem",
          }}
        >
          {post.excerpt}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`#${post.slug}`}
            className="flex items-center gap-2 no-underline transition-colors duration-200"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: hovered ? "#ea580c" : "#57534e",
            }}
          >
            <span>Read Article</span>
            <ArrowUpRight />
          </a>
        </div>
      </div>

      {/* Bottom orange bar on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-all duration-500"
        style={{ height: "2px", backgroundColor: "#ea580c", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }}
      />
    </div>
  );
};

// ── Small card ────────────────────────────────────────────────
const SmallCard = ({ post, delay }: { post: BlogPost; delay: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-stone-900 cursor-pointer transition-all duration-300 flex flex-col"
      style={{
        borderColor: hovered ? "rgba(234,88,12,0.3)" : "#1c1917",
        backgroundColor: hovered ? "rgba(234,88,12,0.02)" : "transparent",
        animation: "blogFadeUp 0.4s ease both",
        animationDelay: `${delay}s`,
      }}
    >
      {/* Index */}
      <div
        className="px-6 pt-6 pb-4"
        style={{ borderBottom: "1px solid #1c1917" }}
      >
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: hovered ? "#ea580c" : "#44403c",
              transition: "color 0.3s ease",
            }}
          >
            {post.index}
          </span>
          <span
            className="uppercase"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.15em",
              color: "#44403c",
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h4
          className="font-black mb-3 transition-colors duration-300"
          style={{
            fontFamily: '"Georgia", serif',
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: hovered ? "#fafaf9" : "#d6d3d1",
          }}
        >
          {post.title}
        </h4>

        <p
          className="mb-auto"
          style={{
            fontFamily: '"Georgia", serif',
            fontSize: "0.88rem",
            color: "#57534e",
            lineHeight: 1.75,
          }}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between mt-6 pt-4"
          style={{ borderTop: "1px solid #1c1917" }}
        >
          <span
            className="text-stone-700"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.1em",
            }}
          >
            {post.date} · {post.readTime}
          </span>

          <a
            href={`#${post.slug}`}
            className="flex items-center gap-1.5 no-underline transition-colors duration-200"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: hovered ? "#ea580c" : "#44403c",
            }}
          >
            <span>Read</span>
            <ArrowRight />
          </a>
        </div>
      </div>

      {/* Left orange accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 transition-all duration-300"
        style={{
          width: "2px",
          backgroundColor: "#ea580c",
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
        }}
      />
    </div>
  );
};

// ── Main component ────────────────────────────────────────────
export const Blog = () => {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <div
      id="blog"
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

      {/* ── Center-bottom radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 100%, rgba(234,88,12,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Ghost watermark ── */}
      <div
        className="absolute select-none pointer-events-none uppercase font-black"
        style={{
          fontFamily: '"Georgia", serif',
          fontSize: "clamp(8rem, 22vw, 22rem)",
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(41,37,36,0.4)",
          opacity: 0.35,
          bottom: "-3%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        Writing
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
            Thoughts & Writing
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
            Blog<span className="text-orange-600">.</span>
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
            Notes on engineering, AI systems, and the craft of building
            software that lasts.
          </p>
        </div>
      </div>

      {/* ── Top rule ── */}
      <div className="max-w-6xl mx-auto px-8 mb-10">
        <div className="h-px bg-stone-900" />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-8">
        {/* Featured post — full width */}
        <div className="mb-6">
          <FeaturedCard post={featured} />
        </div>

        {/* Small cards — 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {rest.map((post, i) => (
            <SmallCard key={post.slug} post={post} delay={i * 0.06} />
          ))}
        </div>
      </div>

      {/* ── Footer CTA ── */}
      <div className="max-w-6xl mx-auto px-8 mt-16">
        <div className="h-px bg-stone-900 mb-8" />
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-stone-900" />
          <a
            href="#all-posts"
            className="flex items-center gap-2 no-underline transition-colors duration-200 whitespace-nowrap"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#57534e",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ea580c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#57534e")}
          >
            <span>View all posts</span>
            <ArrowRight />
          </a>
          <div className="flex-1 h-px bg-stone-900" />
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
        @keyframes blogFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
};