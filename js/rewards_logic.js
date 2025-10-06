//section for both rewards page and rewards system. 
//this includes the following: navbar progress bar, rewards page display on card, rewards page setting goals section, booking events to get points

//pratise logic - will update later
const progress = document.querySelector(".progress-done");
const input = document.getElementById("inputValue");
const maxInput = document.getElementById("inputMax");

let finalValue = 0;
let max = 100; // default max

function changeWidth() {
    if (!max || max <= 0) return;
    if (!finalValue || finalValue < 0) finalValue = 0;

    const percentage = Math.min((finalValue / max) * 100, 100);
    progress.style.width = `${percentage}%`;
    progress.innerText = `${Math.ceil(percentage)}%`;
}

input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10);
    changeWidth();
});

maxInput.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10);
    changeWidth();
});
