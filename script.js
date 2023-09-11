document.querySelectorAll('.navbar-nav a.nav-link').forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      // Close the navbar by toggling the collapse class
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    });
  });
