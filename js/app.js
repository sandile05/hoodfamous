// Function to handle smooth scrolling to a section
function scrollToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  if (!targetSection) return;

  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  window.scrollTo({
    top: targetSection.offsetTop - navbarHeight,
    behavior: "smooth",
  });
}

// Function to navigate to a new page (Explore link)
function navigateToURL(url) {
  window.location.href = url;
}

// Function to handle section visibility
function handleSectionVisibility(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
    }
  });
}

// Close the navbar when clicking outside of it
document.addEventListener("click", (e) => {
    const navbar = document.querySelector(".navbar-collapse");
    if (
      e.target.closest(".navbar") === null &&
      navbar.classList.contains("show")
    ) {
      navbar.classList.remove("show");
    }
  });

// Select all navigation links and add click event listeners
document.querySelectorAll(".navbar-nav a.nav-link").forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetId = navLink.getAttribute("href");

    if (navLink.classList.contains("explore-link")) {
      // If it's the "Explore" link, navigate to the URL
      navigateToURL(navLink.getAttribute("href"));
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
window.addEventListener("load", () => {
  const initialTarget = window.location.hash;
  if (initialTarget) {
    scrollToSection(initialTarget);
  }
});

