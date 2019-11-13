document.getElementById("menu").style.transform = "translate(100%, 0px)";

document
  .getElementById("toggle-menubar_checkbox")
  .addEventListener("click", e => {
    if (document.body.clientWidth < 500.1) {
      document.querySelector(".toggler-switch").classList.toggle("close");
      document.querySelector("#navbar").classList.toggle("close");
      document.querySelector(".navbar-head h4").classList.toggle("close");

      if (e.target.checked == false) {
        document.getElementById("menu").style.transform =
          "translate(100%, -1px)";
      } else {
        document.getElementById("menu").style.transform =
          "translate(0px, -1px)";
      }
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
