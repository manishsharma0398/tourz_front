const myFunction = x => {
  if (!x.matches) {
    menuBar.style.transform = showMenuBarStyle;
  } else {
    // for mob
    menuBar.style.transform = hideMenuBarStyle;
    toggleNavbar("hide");
  }
};

const hideMenuBarStyle = "translate(100%, -1px)";
const showMenuBarStyle = "translate(0px, -1px)";
const menuBar = document.getElementById("menu");

const x = window.matchMedia("(max-width: 500px)");
// myFunction(x); // Call listener function at run time
x.addListener(myFunction);

const toggleNavbar = state => {
  if (state == "hide") {
    document.querySelector(".toggler-switch").classList.remove("close");
    document.querySelector("#navbar").classList.remove("close");
    document.querySelector(".navbar-head h4").classList.remove("close");
  }
  if (state == "show") {
    document.querySelector(".toggler-switch").classList.add("close");
    document.querySelector("#navbar").classList.add("close");
    document.querySelector(".navbar-head h4").classList.add("close");
  }
};

document
  .getElementById("toggle-menubar_checkbox")
  .addEventListener("click", e => {
    if (e.target.checked == false) {
      menuBar.style.transition =
        // "background-color 2s cubic-bezier(.44,.46,.44,.46)";
        menuBar.style.transform = hideMenuBarStyle;
      toggleNavbar("hide");
    } else {
      menuBar.style.transform = showMenuBarStyle;
      toggleNavbar("show");
    }
  });

let menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(menu => {
  menu.addEventListener("click", e => {
    if (
      e.target.classList.contains("menu-link") ||
      e.target.parentElement.classList.contains("menu-link")
    ) {
      removeActiveClassFromNavbar();
      console.log(e.target);

      if (e.target.classList.contains("menu-link")) {
        e.target.parentElement.classList.add("active");
        if (e.target.classList.contains("dropdown-toggle")) {
          e.target.childNodes[0].classList.toggle("show");
          e.target.nextElementSibling.classList.toggle("hide");
          e.target.nextElementSibling.classList.toggle("show");
        }
      }
      if (e.target.parentElement.classList.contains("menu-link")) {
        e.target.parentElement.parentElement.classList.add("active");
        if (e.target.parentElement.classList.contains("dropdown-toggle")) {
          e.target.parentElement.nextElementSibling.classList.toggle("hide");
          e.target.parentElement.nextElementSibling.classList.toggle("show");
          e.target.classList.toggle("show");
        }
      }
    }
  });
});

const removeActiveClassFromNavbar = () => {
  document.querySelectorAll(".menu-item").forEach(menu => {
    menu.classList.remove("active");
  });
};
