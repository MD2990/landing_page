function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  var menuToggler = document.getElementById("menu-toggler");

  if (window.innerWidth < 768) {
    menuToggler.classList.add("show"); // Show the menu toggler
    navbar.style.display = "none"; // Hide the navbar
    menuToggler.classList.remove("close"); // Remove the "close" class to display the burger style icon
    updateMenuItemsLayout(true); // Set menu items to display as columns
  } else {
    menuToggler.classList.remove("show"); // Hide the menu toggler
    navbar.style.display = "block"; // Show the navbar
    updateMenuItemsLayout(false); // Reset menu items layout
  }
}

function updateMenuItemsLayout(isColumnLayout) {
  var menuItems = document.querySelectorAll("#navbar ul li");

  if (isColumnLayout) {
    menuItems.forEach(function (item) {
      item.style.display = "block";
      item.style.marginBottom = "10px";
    });
  } else {
    menuItems.forEach(function (item) {
      item.style.display = "inline-block";
      item.style.marginBottom = "0";
    });
  }
}

function menuToggleClick() {
  var navbar = document.getElementById("navbar");
  var menuToggler = document.getElementById("menu-toggler");

  if (navbar.style.display === "none") {
    navbar.style.display = "block";
    menuToggler.classList.add("close");
  } else {
    navbar.style.display = "none";
    menuToggler.classList.remove("close");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  toggleNavbar(); // Show/hide navbar on page load
});

window.addEventListener("resize", toggleNavbar);

document
  .getElementById("menu-toggler")
  .addEventListener("click", menuToggleClick);
