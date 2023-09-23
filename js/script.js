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
$(document).ready(function () {

  // Array of names
  let names = ["Stans", "Sandile", "Sammy", "Ryxn", "Ryan", "Steve", "Rick Ross", "Sjava", "Ray Mystereo"];

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
