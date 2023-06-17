let navBar;
let navLinks;
const root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", function () {
  navBar = root.querySelector("nav");
  addSections();
  scroll();
  navLinks = root.querySelectorAll("nav ul li a");
  attachClickEvent(); // Attach the click event listener here
});

function scroll() {
  window.addEventListener("scroll", function () {
    const sections = root.querySelectorAll("section");
    const navItems = root.querySelectorAll("nav ul li a");

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
        navItem.classList.add("inactive");
      }
    });
  });
}
function scrollToSection(event) {
  event.preventDefault();

  const sectionId = this.getAttribute("href");
  const section = root.querySelector(sectionId);

  if (section) {
    const sectionOffset = section.offsetTop;

    window.scrollTo({
      top: sectionOffset,
      behavior: "smooth",
    });
  }
}

function attachClickEvent() {
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", scrollToSection);
  });
}

function addSections() {
  const data = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/static/images/img1.jpg",
      id: "section1",
    },
    {
      title: "Section 2",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/static/images/img2.jpg",
      id: "section2",
    },
    {
      title: "Section 3",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/static/images/img3.jpg",
      id: "section3",
    },
    {
      title: "Section 4",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/static/images/img4.jpg",
      id: "section4",
    },
    {
      title: "Section 5",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/static/images/img1.jpg",
      id: "section5",
    },
  ];

  // create a nav menu and add ul  , li and href
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.appendChild(ul);
  const div = document.createElement("div");
  root.appendChild(nav);

  // loop through the data array and create a section for each object
  data.forEach(function (item) {
    //create the navigation bar
    const nav = document.querySelector("nav ul");
    const navItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${item.id}`;
    link.textContent = item.title;
    navItem.appendChild(link);
    nav.appendChild(navItem);

    //create the section
    const section = document.createElement("section");
    section.id = item.id;

    //create the card
    const divCards = document.createElement("div");
    divCards.className = "cards";
    const divCard = document.createElement("div");
    divCard.className = "card red";

    //add the image
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "image";

    //add the text
    const mainText = document.createElement("h1");
    mainText.className = "tip";
    mainText.textContent = "Hover Me and my color will change";
    const secondText = document.createElement("p");
    secondText.className = "second-text";
    secondText.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
       Quisquam m ipsum dolor sit amet consectetur adipisicing elit.\
        Quisquamm ipsum dolor sit amet consectetur adipisicing elit.\
         Quisquamm ipsum dolor sit amet consectetur adipisicing elit. Quisquam";

    //put it all together
    divCard.appendChild(image);
    divCard.appendChild(mainText);
    divCard.appendChild(secondText);
    divCards.appendChild(divCard);
    section.appendChild(divCards);
    root.appendChild(section);
  });
}
