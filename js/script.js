const personData = {
  "Joseph Dary": {
    info: "Information about Joseph Dary.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "RYXN": {
    info: "Information about RYXN.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Hlompho": {
    info: "Information about Hlompho.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Caroline": {
    info: "Information about Caroline.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Cindy": {
    info: "Information about Cindy.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "John Doe": {
    info: "Information about John Doe.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Lesego": {
    info: "Information about Lesego.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Rick": {
    info: "Information about Rick.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Previous Leon": {
    info: "Information about Previous Leon.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Jah Lady": {
    info: "Information about Jah Lady.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  },
  "Sfiso": {
    info: "Information about Sfiso.",
    socialLinks: "<a href='#'>Twitter</a> | <a href='#'>LinkedIn</a>"
  }
};

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
  let names = ["John Doe", "Lesego", "Caroline", "RYXN", "Rick", "Joseph Dary", "Previous Leon", "Jah Lady", "Cindy", "Hlompho", "Sfiso"];

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
    });

    // Append suggestion item to the list
    list.appendChild(listItem);
  }
}
});

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

// Keydown event listener for the input field
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    filterCards();
    list.innerHTML = ""; // Clear suggestions
  }
});
