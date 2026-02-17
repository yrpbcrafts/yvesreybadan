import { useState, useEffect } from "react";

const CopyIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const email = "yrpbadan.eg@gmail.com";

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const fadeUp = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <div
     id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0c0a09',
      }}
    >
      {/* ── Grain texture ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.25,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '180px 180px',
      }} />

      {/* ── Diagonal orange gradient sweep ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(135deg, rgba(234,88,12,0.09) 0%, transparent 45%)',
      }} />

      {/* ── Soft bottom radial glow ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(234,88,12,0.08) 0%, transparent 70%)',
      }} />

      {/* ── Large ghost name watermark ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '-4%',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontFamily: '"Georgia", serif',
          fontWeight: 900,
          fontSize: 'clamp(4rem, 14vw, 13rem)',
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(41,37,36,0.8)',
          userSelect: 'none',
          pointerEvents: 'none',
          textTransform: 'uppercase',
          opacity: 0.6,
        }}
      >
        Yves Rey Badan
      </div>

      {/* ── Decorative vertical line ── */}
      <div
        style={{
          position: 'absolute',
          left: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1px',
          height: mounted ? '35%' : '0%',
          background: 'linear-gradient(to bottom, transparent, rgba(234,88,12,0.5), transparent)',
          transition: 'height 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1px',
          height: mounted ? '35%' : '0%',
          background: 'linear-gradient(to bottom, transparent, rgba(41,37,36,0.7), transparent)',
          transition: 'height 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s',
        }}
      />

      {/* ── Main content ── */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem', maxWidth: '56rem' }}>

        {/* Greeting line */}
        <div style={{ ...fadeUp(0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ height: '1px', width: '2.5rem', backgroundColor: '#ea580c' }} />
          <span style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#ea580c',
            fontWeight: 600,
          }}>
            Full-Stack Developer
          </span>
          <div style={{ height: '1px', width: '2.5rem', backgroundColor: '#ea580c' }} />
        </div>

        {/* "Hi, I'm" */}
        <p style={{
          ...fadeUp(0.2),
          fontFamily: '"Georgia", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: '#78716c',
          marginBottom: '0.5rem',
          letterSpacing: '0.02em',
        }}>
          Hi, I'm
        </p>

        {/* Name — split treatment */}
        <div style={{ ...fadeUp(0.3), lineHeight: 1, marginBottom: '2rem' }}>
          <h1 style={{
            fontFamily: '"Georgia", "Times New Roman", serif',
            fontWeight: 900,
            fontSize: 'clamp(3.5rem, 11vw, 9rem)',
            letterSpacing: '-0.04em',
            color: '#fafaf9',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            margin: 0,
          }}>
            <span style={{ display: 'block' }}>Yves Rey</span>
            <span style={{
              display: 'block',
              color: 'transparent',
              WebkitTextStroke: '2px rgba(250,250,249,0.18)',
              fontStyle: 'italic',
            }}>
              Badan
            </span>
          </h1>
        </div>

        {/* Description */}
        <p style={{
          ...fadeUp(0.5),
          fontFamily: '"Georgia", serif',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#a8a29e',
          lineHeight: 1.75,
          maxWidth: '38rem',
          margin: '0 auto 2.5rem',
        }}>
          I craft exceptional digital experiences that connect brands with their
          audiences through thoughtful design and strategic innovation.
        </p>

        {/* CTA row */}
        <div style={{ ...fadeUp(0.65), display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>

          {/* Primary button */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.85rem 2rem',
              backgroundColor: '#ea580c',
              color: '#fafaf9',
              border: 'none',
              borderRadius: '2px',
              fontFamily: '"Courier New", monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c2410c'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ea580c'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <span>Let's connect</span>
            <ArrowRight size={15} />
          </button>

          {/* Divider */}
          <div style={{ width: '1px', height: '2rem', backgroundColor: '#292524' }} />

          {/* Email copy */}
          <div
            onClick={handleCopy}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              color: copied ? '#ea580c' : '#57534e',
              fontFamily: '"Courier New", monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
              userSelect: 'none',
            }}
            onMouseEnter={e => { if (!copied) e.currentTarget.style.color = '#a8a29e'; }}
            onMouseLeave={e => { if (!copied) e.currentTarget.style.color = '#57534e'; }}
          >
            <span>{copied ? 'Copied!' : email}</span>
            {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ ...fadeUp(0.9), marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#44403c',
          }}>
            Scroll
          </span>
          <div style={{
            width: '1px',
            height: mounted ? '2.5rem' : '0',
            backgroundColor: '#44403c',
            transition: 'height 1s ease 1.2s',
          }} />
        </div>
      </div>

      {/* ── Bottom edge ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, #292524, transparent)',
      }} />
    </div>
  );
}