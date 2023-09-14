// Function to handle smooth scrolling to a section
function scrollToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
      behavior: "smooth",
    });
  }
}

document.querySelectorAll(".navbar-nav a.nav-link").forEach(function (navLink) {
  navLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetId = navLink.getAttribute("href");
    scrollToSection(targetId);

    // Close the navbar by toggling the collapse class
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  });
});

// Adjust scroll position for initial load
window.addEventListener("load", function () {
  const initialTarget = window.location.hash;
  if (initialTarget) {
    scrollToSection(initialTarget);
  }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle section visibility
function handleSectionVisibility(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(handleSectionVisibility, {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.5, // Trigger when 50% of the section is visible
});



// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

