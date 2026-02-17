import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: "#000000",
    },
    particles: {
      number: {
        value: 10,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circles",
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: 4,
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
        },
      },
      links: {
        enable: true,
        distance: 600,
        color: "#8585854f",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};
