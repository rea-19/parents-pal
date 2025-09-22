// Loads header and footer
fetch("include/header.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("include/footer.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("footer").innerHTML = data;
});