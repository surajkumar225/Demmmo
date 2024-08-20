// Check if there's already a visitor count in localStorage
let visitorCount = localStorage.getItem("visitorCount");

// If there's no count, initialize it to 0
if (visitorCount === null) {
  visitorCount = 0;
} else {
  visitorCount = parseInt(visitorCount);
}

// Increment the count by 1
visitorCount += 1;

// Update the displayed count on the webpage
document.getElementById("visitor-count").textContent = visitorCount;

// Store the updated count back in localStorage
localStorage.setItem("visitorCount", visitorCount);
