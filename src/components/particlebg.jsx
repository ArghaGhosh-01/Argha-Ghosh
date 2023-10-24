import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function particlebg () {
    async function loadParticles(main)
    {
        await loadFull(main)
    }
  return (
    <Particles 
        id="tsparticles"
        init={loadParticles}
        options={{particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.08,
          },
          size: {
            value: 2.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 3,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
        }}
    />
  )
}

export default particlebg
