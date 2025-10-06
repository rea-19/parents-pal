// Loads header and footer
fetch("include/header.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("header").innerHTML = data;
});

//BEGINNING OF HEADER PROGRESS BAR EDITING
// Select the elements
//const progressBar = document.querySelector(".progress-bar");
//const fill = progressBar.querySelector(".progress-fill");
//const text = progressBar.querySelector(".progress-text");

// Set up variables like Python
//let currentValue = 0;
//let maxValue = 100;

// Function to update progress visually
//function updateProgressBar() {
//  const percent = Math.min((currentValue / maxValue) * 100, 100);
//  fill.style.width = `${percent}%`;
//  text.textContent = `${Math.ceil(percent)}%`;
//}

// Example increments (like x = x + 1)
//function addPoints(points) {
//  currentValue = Math.min(currentValue + points, maxValue);
//  updateProgressBar();
//}

//function subtractPoints(points) {
//  currentValue = Math.max(currentValue - points, 0);
//  updateProgressBar();
//}

// Example usage:
//addPoints(25);  // Increases progress to 25%
//addPoints(10);  // Adds another 10% (total 35%)
//subtractPoints(5); // Reduces by 5%

//END OF HEADER PROGRESS BAR EDITING

fetch("include/footer.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("footer").innerHTML = data;
});