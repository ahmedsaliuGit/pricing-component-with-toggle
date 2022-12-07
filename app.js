const toggle = document.getElementById("subscription-toggle");
const pricing = document.querySelector(".row");

toggle.addEventListener("change", () => {
  pricing.classList.toggle("show-monthly");
});
