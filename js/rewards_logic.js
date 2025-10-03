//section for both rewards page and rewards system. 
//this includes the following: navbar progress bar, rewards page display on card, rewards page setting goals section, booking events to get points

//pratise logic - will update later
const progress = document.querySelector(".progress-done")
const input = document.querySelector(".input")
const maxInput = document.querySelector(".maxInput")
let finalValue = 0
let max = 0

input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10);
});

maxInput.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10);
});