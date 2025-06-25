import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const config = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: "bounce" },
      },
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 1 },
      shape: { type: ["circle", "square"] },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
    background: {
      color: {
        value: "#000000", // this only works if fullScreen is true
      },
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Particles id="tsparticles" init={particlesInit} options={config} />
    </div>
  );
}

