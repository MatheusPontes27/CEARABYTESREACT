import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: 'transparent' },
        },
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: '#007bff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 4 },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
        },
      }}
    />
  );
}

export default ParticleBackground;
