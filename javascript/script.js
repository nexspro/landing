document.addEventListener("DOMContentLoaded", () => {
  const particleContainer = document.createElement("div");
  particleContainer.classList.add("particles-container");
  document.body.appendChild(particleContainer);

  function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}vw`;

    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${Math.random() * 3 + 3}s`;

    particleContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 6000);
  }

  setInterval(createParticle, 200);
});

window.onload = () => {
  const audio = new Audio("/landing/music/Star Wars Duel of The Fates  EPIC VERSION (Remastered V2).mp3");
  audio.loop = true;
  audio.muted = true;

  const button = document.getElementById("music-toggle");

  if (button) {
    button.addEventListener("click", () => {
      if (audio.paused) {
        audio.muted = false;
        audio.play()
          .then(() => {
            button.innerText = "🔇";
            console.log("Musique jouée");
          })
          .catch(error => console.error("Erreur de lecture :", error));
      } else {
        audio.pause();
        button.innerText = "🔊";
        console.log("Musique en pause.");
      }
    });
  } else {
    console.error("Le bouton 'music-toggle' n'existe pas !");
  }
};
