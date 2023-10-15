const personData = {
  "Joseph Dary": {
      info: "Information about Joseph Dary.",
      socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Jane": {
      info: "Information about Jane.",
      socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "John": {
      info: "Information about John.",
      socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  }
};

$('.more-info-btn').on('click', function() {
  const firstName = $(this).data('name');
  const fullName = Object.keys(personData).find(name => name.startsWith(firstName));
  const modalLabel = document.getElementById('modalLabel');
  const modalInfo = document.getElementById('modal-info');
  const socialLinks = document.getElementById('social-links');

  // Set the modal title to the full name
  modalLabel.textContent = fullName;

  // Set modalInfo and socialLinks based on the person's data
  modalInfo.textContent = personData[fullName].info;
  socialLinks.innerHTML = personData[fullName].socialLinks;

  $('#myModal').modal('show');
});

// Function to show profile cards based on category
function showProfileCards(category) {
  const profileCards = document.querySelectorAll('.card');

  profileCards.forEach((card) => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Function to filter cards based on input value
function filterCards() {
  const input = document.getElementById("input");
  const searchValue = input.value.toLowerCase();
  const profileCards = document.querySelectorAll('.card');

  profileCards.forEach((card) => {
    const artistName = card.querySelector('.artist-name').textContent.toLowerCase();
    if (artistName.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Function to clear previous search results
function clearSearchResults() {
  const profileCards = document.querySelectorAll('.card');
  profileCards.forEach((card) => {
    card.style.display = 'block';
  });
}

// Add click event listener to the search icon button
const searchButton = document.querySelector('.bi-search');
searchButton.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the form from submitting
  filterCards();
  list.innerHTML = ""; // Clear suggestions
});

// Define displayNames function in the global scope
function displayNames(value) {
  input.value = value;
}

// Reference to the input field
let input = document.getElementById("input");
let list = document.querySelector(".list"); // Define list in the global scope

// Click event listener to close suggestions when clicking away
document.addEventListener("click", function (event) {
  if (event.target !== input && event.target !== list) {
    list.innerHTML = ""; // Clear suggestions
  }
});

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Array of names
  let names = ["Stans", "Sandile", "Sammy", "Ryxn", "Ryan", "Joseph Dary", "Steve", "Rick Ross", "Sjava", "Ray Mystereo"];

  // Input event listener for filtering names
  input.addEventListener("input", function () {
    let inputValue = input.value.toLowerCase();
    let suggestions = [];

    // Filter names based on input value
    for (let name of names) {
      if (name.toLowerCase().startsWith(inputValue) && inputValue !== "") {
        suggestions.push(name);
      }
    }

    // Sort the suggestions
    suggestions.sort();

    // Display suggestions
    displaySuggestions(suggestions);
  });

  // Function to display suggestions
  function displaySuggestions(suggestions) {
    list.innerHTML = ""; // Clear previous suggestions
    for (let suggestion of suggestions) {
      // Create a suggestion item
      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item", "list-items");
      listItem.style.cursor = "pointer";
      listItem.textContent = suggestion;

      // Add click event listener to populate input and close suggestions
      listItem.addEventListener("click", function () {
        input.value = suggestion;
        list.innerHTML = ""; // Clear suggestions
        clearSearchResults(); // Clear previous search results
        filterCards(); // Apply new filter
      });

      // Append suggestion item to the list
      list.appendChild(listItem);
    }
  }
});
