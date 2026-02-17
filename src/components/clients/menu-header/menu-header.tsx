import { useState, useEffect, useRef } from "react";

const menuItems = [
  { label: "Home",         id: "home"         },
  { label: "About",        id: "about"        },
  { label: "Projects",     id: "projects"     },
  { label: "Skills",       id: "skills"       },
  { label: "Experience",   id: "experience"   },
  { label: "Blog",         id: "blog"         },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact",      id: "contact"      },
];

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6"  x2="6"  y2="18" />
    <line x1="6"  y1="6"  x2="18" y2="18" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const MenuHeader = () => {
  const [active, setActive]         = useState("home");
  const [scrolled, setScrolled]     = useState(false);
  const [progress, setProgress]     = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered]       = useState<string | null>(null);
  const drawerRef                   = useRef<HTMLDivElement>(null);

  // ── Scroll progress + condensed state ──────────────────────
  useEffect(() => {
    const onScroll = () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section via IntersectionObserver ─────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Close drawer on outside click ──────────────────────────
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [mobileOpen]);

  // ── Lock body scroll when drawer open ──────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          DESKTOP HEADER
      ═══════════════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(12,10,9,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #1c1917" : "1px solid transparent",
        }}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-orange-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />

        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

          {/* Logo — scrolls to #hero */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-baseline gap-0 cursor-pointer bg-transparent border-none p-0"
          >
            <span
              className="font-black text-stone-50 tracking-tight"
              style={{
                fontFamily: '"Georgia", "Times New Roman", serif',
                fontSize: "1.35rem",
                letterSpacing: "-0.03em",
              }}
            >
              Yves
            </span>
            <span
              className="font-black text-orange-600"
              style={{
                fontFamily: '"Georgia", serif',
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              .
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive  = active  === item.id;
              const isHovered = hovered === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex flex-col items-center bg-transparent border-none cursor-pointer"
                  style={{ padding: "0.4rem 0.75rem" }}
                >
                  <span
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isActive ? "#ea580c" : isHovered ? "#d6d3d1" : "#57534e",
                      fontWeight: isActive ? 700 : 400,
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Active underline dot */}
                  <div
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width:           isActive ? "1rem" : "3px",
                      height:          "2px",
                      backgroundColor: isActive ? "#ea580c" : isHovered ? "#44403c" : "transparent",
                      marginTop:       "3px",
                    }}
                  />
                </button>
              );
            })}
          </nav>

          {/* Resume CTA + hamburger */}
          <div className="flex items-center gap-4">
            {/* Resume button — desktop */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 no-underline transition-all duration-200 hover:-translate-y-px"
              style={{
                padding: "0.45rem 1.1rem",
                border: "1px solid #292524",
                borderRadius: "2px",
                fontFamily: '"Courier New", monospace',
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#78716c",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ea580c";
                e.currentTarget.style.color = "#ea580c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#292524";
                e.currentTarget.style.color = "#78716c";
              }}
            >
              <span>Resume</span>
              <ArrowUpRight />
            </a>

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer text-stone-500 transition-colors hover:text-stone-200"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════
          MOBILE DRAWER OVERLAY
      ═══════════════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-all duration-300 lg:hidden"
        style={{
          backgroundColor: "rgba(12,10,9,0.7)",
          backdropFilter: "blur(4px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full z-50 lg:hidden flex flex-col"
        style={{
          width: "min(20rem, 85vw)",
          backgroundColor: "#0c0a09",
          borderLeft: "1px solid #1c1917",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 h-16"
          style={{ borderBottom: "1px solid #1c1917" }}
        >
          <span
            className="font-black text-stone-50"
            style={{
              fontFamily: '"Georgia", serif',
              fontSize: "1.2rem",
              letterSpacing: "-0.03em",
            }}
          >
            Yves<span className="text-orange-600">.</span>
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="bg-transparent border-none cursor-pointer text-stone-500 hover:text-stone-200 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex flex-col flex-1 px-6 py-8">
          <p
            className="text-stone-700 mb-6 uppercase"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.25em",
            }}
          >
            Navigation
          </p>

          {menuItems.map((item, i) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center justify-between bg-transparent border-none cursor-pointer text-left transition-all duration-200"
                style={{
                  padding: "1rem 0",
                  borderBottom: "1px solid #1c1917",
                  animation: mobileOpen ? "drawerFadeUp 0.35s ease both" : "none",
                  animationDelay: `${i * 0.04}s`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex-shrink-0 transition-all duration-200"
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: isActive ? "#ea580c" : "transparent",
                      border: `1px solid ${isActive ? "#ea580c" : "#44403c"}`,
                    }}
                  />
                  <span
                    className="font-black transition-colors duration-200"
                    style={{
                      fontFamily: '"Georgia", serif',
                      fontSize: "1.1rem",
                      letterSpacing: "-0.01em",
                      color: isActive ? "#ea580c" : "#a8a29e",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: "0.58rem",
                    letterSpacing: "0.12em",
                    color: isActive ? "#ea580c" : "#2c2927",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}

          {/* Mobile resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 no-underline mt-8"
            style={{
              padding: "0.85rem 1.25rem",
              backgroundColor: "rgba(234,88,12,0.08)",
              border: "1px solid rgba(234,88,12,0.25)",
              borderRadius: "2px",
              fontFamily: '"Courier New", monospace',
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ea580c",
            }}
          >
            <span>Download Resume</span>
            <ArrowUpRight />
          </a>
        </nav>

        {/* Drawer footer */}
        <div
          className="px-6 py-5"
          style={{ borderTop: "1px solid #1c1917" }}
        >
          <p
            className="text-stone-700 m-0"
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            yrpbadan.eg@gmail.com
          </p>
        </div>
      </div>

      <style>{`
        @keyframes drawerFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </>
  );
};