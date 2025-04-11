// Toggle Dropdown Menus
document.getElementById("dropdownButton").addEventListener("click", function () {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
});

document.getElementById("dropdownB").addEventListener("click", function () {
  document.getElementById("dropdownM").classList.toggle("hidden");
});

// Swiper Slider Initialization
var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Hover Animation for Box
const box = document.getElementById("animatedBox");

box.addEventListener("mouseover", () => {
  box.style.transform = "scale(1.2)";
  box.classList.add("hover-image"); // Use class instead of overriding style
});

box.addEventListener("mouseout", () => {
  box.style.transform = "scale(1)";
  box.classList.remove("hover-image");
});

// Button Alert Events
document.getElementById("btn").addEventListener("click", function () {
  alert("Are you sure you want to go back to the previous page?");
});

document.getElementById("bbn").addEventListener("click", function () {
  alert("Your feedback has been received!");
});

// Add the background-coloue
document.getElementById("para").addEventListener("mouseover", function() {
  document.getElementById("para").style.Color= "black";
});
document.getElementById("para").addEventListener("mouseout", function() {
  document.getElementById("para").style.Color= "white";
});

// Toggle Password Visibility
function togglePassword(fieldId ){
  let field = document.getElementById(fieldId);
  field.type = (field.type === 'password') ? 'text' : 'password';

}
