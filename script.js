
// Animate skill bars
window.addEventListener('scroll', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    const sectionTop = bar.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      bar.style.width = bar.dataset.value;
    }
  });
});

// Project filter
function filterProjects(category) {
  document.querySelectorAll('.project-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    document.getElementById('form-message').textContent = "Please fill in all fields.";
    return;
  }

  document.getElementById('form-message').textContent = "Thank you! Your message has been sent.";
  this.reset();
});

// Highlight nav on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
