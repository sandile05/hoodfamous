document.querySelectorAll(".navbar-nav a.nav-link").forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Close the navbar by toggling the collapse class
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  });
});

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Add a click event listener to scroll back to the "home" section
  backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Show or hide the button based on the scroll position
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          backToTopButton.classList.add("visible");
      } else {
          backToTopButton.classList.remove("visible");
      }
  });
});
