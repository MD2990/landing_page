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
      index === currentSectionIndex
        ? navItem.classList.add("active")
        : navItem.classList.remove("active");
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
  // create a nav menu and add ul  , li and href
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.appendChild(ul);
  root.appendChild(nav);

  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";
  //create the section

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

    const section = document.createElement("section");
    section.id = item.id;
    const main_card = document.createElement("div");
    //create the card
    main_card.className = "main-card";

    const sub_card = document.createElement("div");
    sub_card.className = "sub-card red";

    //add the image
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "image";

    //add the text
    const mainText = document.createElement("h1");
    mainText.className = "text";
    mainText.textContent = item.subtitle;
    const secondText = document.createElement("p");
    secondText.className = "second-text";
    secondText.textContent = item.content;

    //put it all together
    sub_card.appendChild(image);
    sub_card.appendChild(mainText);
    sub_card.appendChild(secondText);
    main_card.appendChild(sub_card);
    section.appendChild(main_card);

    mainContainer.appendChild(section);
  });

  root.appendChild(mainContainer);

}
const data = [
  {
    title: "Component-Based Architecture",
    subtitle: "React is a JavaScript library for building user interfaces.",
    content: `At the heart of React.js lies its component-based architecture. React allows you to build reusable UI components,\
     which are self-contained and can be composed to form more complex interfaces. Components encapsulate their own logic and state,\
      making it easier to manage and maintain large-scale applications. By breaking the UI into smaller, reusable components\
     React promotes modularity and reusability, enhancing development efficiency.`,
    image: "/static/images/img1.jpg",
    id: "section1",
  },
  {
    title: "Virtual DOM",
    subtitle: "React utilizes a virtual Document Object Model (DOM)",
    content: `React utilizes a virtual Document Object Model (DOM) to optimize rendering performance.\
     The virtual DOM is a lightweight copy of the actual DOM, which React uses to track changes and efficiently update only the necessary parts of the UI.\
    When the state of a component changes, React calculates the difference between the current and new virtual DOM representations, and then applies the minimum required updates to the actual DOM.\
     This approach minimizes costly direct manipulations of the DOM and contributes to React's impressive performance.`,
    image: "/static/images/img2.jpg",
    id: "section2",
  },
  {
    title: "JSX (JavaScript XML)",
    subtitle: "React introduces JSX, an extension to JavaScript",
    content: `React introduces JSX, an extension to JavaScript that allows you to write HTML-like code within your JavaScript files.\
    JSX combines the power of JavaScript with the expressiveness of HTML,\
     enabling you to define the structure and appearance of React components in a declarative and intuitive manner.\
     With JSX, you can seamlessly integrate JavaScript expressions, iterate over arrays,\
     and conditionally render elements. Babel, a JavaScript compiler, is commonly used to transform JSX into plain JavaScript that browsers can understand.`,
    image: "/static/images/img3.jpg",
    id: "section3",
  },
  {
    title: "State and Props",
    subtitle: "React components can manage their internal state",
    content: `In React, components can manage their internal state and receive data from their parent components through props.\
    State represents the mutable data specific to a component, while props are immutable data passed from parent components.\
    By using state and props, React facilitates the flow of data and enables the creation of interactive and dynamic UIs.\
    When the state or props of a component change,\
    React efficiently re-renders the component and its children, ensuring that the UI stays in sync with the underlying data.`,
    image: "/static/images/img4.jpg",
    id: "section4",
  },
  {
    title: "React Ecosystem and Tooling",
    subtitle:
      "React has a thriving ecosystem with numerous libraries and tools",
    content: `React has a thriving ecosystem with numerous libraries and tools that enhance its capabilities and productivity.\
    React Router simplifies the implementation of client-side routing in React applications,\
    while Redux provides a predictable state management solution. React Native, an extension of React,\
    enables the development of native mobile applications for iOS and Android platforms. Additionally,\
    tools like Create React App, Next.js, and TypeScript enhance the development experience by providing scaffolding, server-side rendering,\
    and type safety, respectively.`,
    image: "/static/images/img1.jpg",
    id: "section5",
  },
];

