var menu = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");
var upbtn = document.querySelector(".upbtn");

menu.addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

upbtn.addEventListener("click", () => {
  scrollToTop();
});
