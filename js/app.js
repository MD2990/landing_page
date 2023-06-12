const navBar = document.querySelector("nav");

addSections();

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

  // Hide the navbar if the user is not scrolling
  if (window.scrollY === 0) {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
});

// selects all the links in the nav bar and stores them in an array called navLinks
const navLinks = document.querySelectorAll("nav ul li a");



// Iterate through the links and add an event listener
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", scrollToSection);
});

function addSections() {
  const data = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/images/img1.jpg",
      id: "section1",
    },
    {
      title: "Section 2",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/images/img2.jpg",
      id: "section2",
    },
    {
      title: "Section 3",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/images/img3.jpg",
      id: "section3",
    },
    {
      title: "Section 4",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/images/img4.jpg",
      id: "section4",
    },
    {
      title: "Section 5",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`,
      image: "/images/img5.jpg",
      id: "section5",
    },
  ];

  // create a nav menu and add ul  , li and href
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.appendChild(ul);
  document.body.appendChild(nav);

  // loop through the data array and create a section for each object
  data.forEach(function (item) {
    const section4 = document.createElement("section");
    section4.id = item.id;
    section4.innerHTML = `
        <h2>
        
        ${item.title}
        </h2>
        <p>
        ${item.content}
        </p>
        <div class="center_Image">
          <img src=
          ${item.image}
          
           />
        </div>
      `;
    document.body.appendChild(section4);
    // add it to nav  menu
    const nav = document.querySelector("nav ul");
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#${item.id}">${item.title}</a>`;
    nav.appendChild(navItem);

    //
  });
}
