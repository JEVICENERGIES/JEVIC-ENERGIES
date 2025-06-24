// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".about h2, .about p", {
  opacity:0, y:50, duration:1, scrollTrigger:{ trigger:".about", start:"top 80%" }
});
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card,{ opacity:0, y:50, duration:0.8, scrollTrigger:{ trigger:card, start:"top 85%" } });
});

// Lightbox
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');
const triggers = document.querySelectorAll('.lightbox-trigger');
const closeBtn = document.querySelector('.close');
triggers.forEach(img => img.onclick = () => {
  modal.classList.remove('hidden'); modalImg.src = img.src;
});
closeBtn.onclick = () => modal.classList.add('hidden');
window.onclick = e => { if (e.target === modal) modal.classList.add('hidden'); };

// Contact Form
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault(); alert("Thank you! We'll be in touch shortly."); e.target.reset();
});

// Theme Toggle
const toggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  document.body.classList.add("light");
  toggle.checked = true;
}
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});
