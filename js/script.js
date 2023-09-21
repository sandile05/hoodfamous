$(document).ready(function() {
  // Reference to the menu button, sidebar, content, and dim overlay
  const $menuBtn = $('.menu-btn');
  const $sidebar = $('.sidebar');
  const $content = $('.content');
  const $dimOverlay = $('.dim-overlay');

  // Toggle the sidebar open/close
  $menuBtn.on('click', function() {
      $sidebar.toggleClass('open');
      $content.toggleClass('open');
      $dimOverlay.toggleClass('active');
  });
});


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


