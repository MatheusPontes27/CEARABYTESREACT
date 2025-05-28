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
        fullScreen: { enable: false },
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
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        top: 0,
        left: 0,
      }}
    />
  );
}

export default ParticleBackground;


