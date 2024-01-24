let button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    location.href = "html/portfolio.html";
  });
} else {
  console.error("Le bouton n'a pas été trouvé.");
}
