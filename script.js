// Update the active section based on scroll position
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("nav ul li a");

  let currentSectionIndex = 0;
  let minDistance = Infinity;

  sections.forEach(function (section, index) {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top);

    if (distance < minDistance) {
      minDistance = distance;
      currentSectionIndex = index;
    }
  });

  navItems.forEach(function (navItem, index) {
    if (index === currentSectionIndex) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  });
});

// Smooth scroll to section on navigation menu item click
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (event) {
    event.preventDefault();

    const targetSectionId = this.getAttribute("href");
    const targetSection = document.querySelector(targetSectionId);
    const targetSectionOffset = targetSection.offsetTop;

    window.scrollTo({
      top: targetSectionOffset,
      behavior: "smooth",
    });
  });
});
