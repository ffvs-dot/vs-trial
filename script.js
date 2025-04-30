particlesJS("particles-js", {
  particles: {
    number: { value: 80 }, // Number of particles
    size: { value: 3 },    // Size of particles
    color: { value: "#ffffff" }, // Particle color
    line_linked: {
      enable: true,         // Enable lines between particles
      distance: 150,        // Max distance between particles to connect
      color: "#ffffff",     // Line color
      opacity: 0.4,         // Line opacity
      width: 1              // Line width
    },
    move: {
      enable: true,
      speed: 2              // Speed of particles
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }, // Repulse effect on hover
      onclick: { enable: true, mode: "push" }     // Push effect on click
    }
  }
});
