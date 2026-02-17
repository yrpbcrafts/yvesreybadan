export const About = ()=> {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden" style={{ backgroundColor: '#0c0a09' }}>

            {/* Grain overlay */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px',
                }}
            />

            {/* Orange radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(234,88,12,0.07) 0%, transparent 70%)' }}
            />

            {/* Ghost letterform */}
            <div
                className="absolute right-0 top-1/2 select-none pointer-events-none font-black leading-none"
                style={{
                    fontSize: 'clamp(10rem, 28vw, 26rem)',
                    color: '#292524',
                    opacity: 0.5,
                    fontFamily: '"Georgia", serif',
                    letterSpacing: '-0.05em',
                    transform: 'translateY(-50%) translateX(22%)',
                }}
            >
                ME
            </div>

            {/* Content */}
            <div id="about" className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 w-full">

                {/* Label */}
                <div className="flex items-center gap-4 mb-6">
                    <div style={{ width: '2rem', height: '1px', backgroundColor: '#ea580c' }} />
                    <span style={{
                        color: '#ea580c',
                        fontFamily: '"Courier New", monospace',
                        textTransform: 'uppercase',
                        letterSpacing: '0.25em',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                    }}>
                        About Me
                    </span>
                </div>

                {/* Heading */}
                <h2 style={{
                    color: '#fafaf9',
                    fontFamily: '"Georgia", "Times New Roman", serif',
                    fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    marginBottom: '3rem',
                }}>
                    Crafting digital<br />
                    <span style={{
                        fontStyle: 'italic',
                        color: 'transparent',
                        WebkitTextStroke: '1.5px rgba(231,229,228,0.4)',
                    }}>
                        experiences
                    </span>
                    <span style={{ color: '#ea580c' }}>.</span>
                </h2>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                    {/* Bio */}
                    <div>
                        <p style={{
                            color: '#d6d3d1',
                            fontFamily: '"Georgia", serif',
                            fontSize: '1.1rem',
                            lineHeight: 1.75,
                            marginBottom: '1.5rem',
                        }}>
                            I'm a designer and developer obsessed with the intersection of aesthetics
                            and function. I build interfaces that feel as good as they look — precise,
                            purposeful, and alive.
                        </p>
                        <p style={{
                            color: '#78716c',
                            fontFamily: '"Georgia", serif',
                            fontSize: '1rem',
                            lineHeight: 1.75,
                        }}>
                            With a background in both visual design and engineering, I bring a
                            full-stack perspective to every project — from the first sketch to
                            the final pixel.
                        </p>
                    </div>

                    {/* Stats */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { label: 'Years of Experience', value: '5+' },
                            { label: 'Projects Shipped', value: '40+' },
                            { label: 'Core Focus', value: 'Frontend & UX' },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid #292524',
                                    paddingBottom: '1rem',
                                }}
                            >
                                <span style={{
                                    color: '#78716c',
                                    fontFamily: '"Courier New", monospace',
                                    fontSize: '0.65rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                }}>
                                    {label}
                                </span>
                                <span style={{
                                    color: '#fafaf9',
                                    fontFamily: '"Georgia", serif',
                                    fontSize: '1.5rem',
                                    fontWeight: 900,
                                    letterSpacing: '-0.02em',
                                }}>
                                    {value}
                                </span>
                            </div>
                        ))}

                        {/* CTA */}
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                color: '#ea580c',
                                fontFamily: '"Courier New", monospace',
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                fontWeight: 600,
                                textDecoration: 'none',
                                marginTop: '0.5rem',
                                transition: 'gap 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.gap = '1.25rem'}
                            onMouseLeave={e => e.currentTarget.style.gap = '0.75rem'}
                        >
                            <span>Let's work together</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom edge */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(to right, transparent, #44403c, transparent)',
            }} />
        </div>
    );
}