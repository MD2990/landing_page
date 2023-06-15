// Toggles the navbar when the menu toggler is clicked
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  var menuToggler = document.getElementById("menu-toggler");

  // Do nothing if the navbar or menu toggler are not found
  if (!navbar || !menuToggler) {
    return;
  }

  // If window width is less than 768px
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
  // get all menu items
  var menuItems = document.querySelectorAll("#navbar ul li");

  // if there are no menu items, return
  if (!menuItems) {
    return;
  }

  // if the column layout is enabled, display menu items as a column
  if (isColumnLayout) {
    menuItems.forEach(function (item) {
      item.style.display = "block";
      item.style.marginBottom = "10px";
    });
  } else {
    // otherwise, display menu items as a row
    menuItems.forEach(function (item) {
      item.style.display = "inline-block";
      item.style.marginBottom = "0";
    });
  }
}

function menuToggleClick() {
  var navbar = document.getElementById("navbar");
  var menuToggler = document.getElementById("menu-toggler");

  // If navbar doesn't exist or if menuToggler doesn't exist, don't do anything.
  if (!navbar || !menuToggler) {
    return;
  }

  // If navbar is hidden, show it and add the close class to menuToggler.
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
    menuToggler.classList.add("close");
  }
  // If navbar is visible, hide it and remove the close class from menuToggler.
  else {
    navbar.style.display = "none";
    menuToggler.classList.remove("close");
  }
}

// Wait for DOM to initialize
document.addEventListener("DOMContentLoaded", function () {
  addSections();

  // Show/hide navbar on page load
  toggleNavbar();

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
});

// Show/hide navbar when window is resized
window.addEventListener("resize", toggleNavbar);

// Show/hide navbar when menu button is clicked
document
  .getElementById("menu-toggler")
  .addEventListener("click", menuToggleClick);
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
      image: "/static/images/img5.jpg",
      id: "section5",
    },
  ];

  // create a nav menu and add ul  , li and href
  const nav = document.createElement("nav")
  const ul = document.createElement("ul");
  nav.id = "navbar";
  nav.appendChild(ul);
  document.body.appendChild(nav);

  // loop through the data array and create a section for each object
  data.forEach(function (item) {
    const nav = document.querySelector("nav ul");
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#${item.id}">${item.title}</a>`;
    nav.appendChild(navItem);
    const section = document.createElement("section");
    section.id = item.id;
    section.innerHTML = `
    <div class="cards">
    <div class="card red">
    <img src=${item.image} alt="image" />
    <p class="tip">Hover Me  and my color will change 
    
    </p>
    <p class="second-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    m ipsum dolor sit amet consectetur adipisicing elit. Quisquamm ipsum dolor sit amet consectetur adipisicing 
    elit. Quisquamm ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    
    </p>
    
    
    
  
          
           

    </div>

  

</div>
    
      `;
    // add class to section

    document.body.appendChild(section);
    // add it to nav  menu

    //
  });
}