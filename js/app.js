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

  // Select all navigation links and add click event listeners
  document.querySelectorAll(".navbar-nav a.nav-link").forEach(function (navLink) {
    navLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor link behavior
      const targetId = navLink.getAttribute("href");

      if (navLink.classList.contains('explore-link')) {
        // If it's the "Explore" link, navigate to the URL
        window.location.href = navLink.getAttribute("href");
      } else {
        // For other links, scroll to the section
        scrollToSection(targetId);
      }

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

  // Select all sections you want to observe
  const sections = document.querySelectorAll(".section");

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
