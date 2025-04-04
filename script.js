document.querySelector("button").addEventListener("click", function () {
  alert("Thanks for choosing SOCIAL CAMEO! We'll get back to you soon.");
});
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fadeEl => {
    appearOnScroll.observe(fadeEl);
  });
});
// Typewriter effect for hero section
const text = "Welcome to Social Cameo";
let index = 0;

function typeWriter() {
  const element = document.getElementById("hero-text");
  if (element && index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();

  // Section scroll fade-in
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fadeEl => {
    appearOnScroll.observe(fadeEl);
  });
});
