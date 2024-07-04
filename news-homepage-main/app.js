const side = document.getElementById("side");
const sideBar = document.querySelector(".sideBar");
const body = document.body;
const close = document.getElementById("close");

function openSidebar() {
  body.style.background = "hsl(233, 8%, 79%)";
  body.style.transition = "background 0.6s ease";
  sideBar.style.transform = "translateX(0%)";
}

function closeSidebar() {
  sideBar.style.transform = "translateX(100%)";
  body.style.background = "white";
}

side.addEventListener("click", openSidebar);
close.addEventListener("click", closeSidebar);

const readMorebtn = document.getElementById("read");

readMorebtn.addEventListener("hover", () => {
  readMorebtn.style.background = "hsl(240, 100%, 5%)";
  readMorebtn.style.color = "white";
});
