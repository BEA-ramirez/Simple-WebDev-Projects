const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");

const pages = [page1, page2, page3, page4, page5];

const noPages = 5;
let currentPg = 0;

const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");

const inputs = page1.getElementsByTagName("input");
const labels = page1.getElementsByTagName("label");

const sidebar = document.querySelector(".sidebar");
const sidebarNums = sidebar.getElementsByTagName("button");

function checkCompleteInput() {
  let complete = true;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      labels[i].classList.add("error");
      inputs[i].style.borderColor = "hsl(354, 84%, 57%)";
      complete = false;
    } else {
      labels[i].classList.remove("error");
      inputs[i].style.borderColor = "hsl(231, 11%, 63%)";
    }
  }
  return complete;
}

const data = {
  name: "",
  email: "",
  number: "",
  plan: "",
  addOns: [],

  prices: [],
  TotalPrice: 0,
};

function setSidebar() {
  if (currentPg === 0) {
    sidebarNums[currentPg].style.background = "hsl(231, 100%, 99%)";
    sidebarNums[currentPg].style.color = "hsl(213, 96%, 18%)";
    sidebarNums[currentPg + 1].style.background = "transparent";
    sidebarNums[currentPg + 1].style.color = "white";
  } else if (currentPg === 3 || currentPg === 4) {
    sidebarNums[3].style.background = "hsl(231, 100%, 99%)";
    sidebarNums[3].style.color = "hsl(213, 96%, 18%)";
    sidebarNums[2].style.background = "transparent";
    sidebarNums[2].style.color = "white";
  } else {
    sidebarNums[currentPg].style.background = "hsl(231, 100%, 99%)";
    sidebarNums[currentPg].style.color = "hsl(213, 96%, 18%)";
    sidebarNums[currentPg + 1].style.background = "transparent";
    sidebarNums[currentPg + 1].style.color = "white";
    sidebarNums[currentPg - 1].style.background = "transparent";
    sidebarNums[currentPg - 1].style.color = "white";
  }
}

let plans = page2.querySelectorAll(".plan");

for (let i = 0; i < plans.length; i++) {
  plans[i].addEventListener("click", () => {
    plans[i].classList.toggle("clicked");
    console.log(data);
  });
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keydown", () => {
    labels[i].classList.remove("error");
    inputs[i].style.borderColor = "hsl(231, 11%, 63%)";
  });
}

let mmYY = page2.querySelector("#toggle");
let mmYYdiv = mmYY.querySelector("div");

mmYYdiv.addEventListener("click", () => {
  mmYYdiv.classList.toggle("move");
});

let addOn = document.querySelector(".add-ons");
let addOns = addOn.querySelectorAll("div");
console.log(addOns);

for (let i = 0; i < addOns.length; i++) {
  addOns[i].addEventListener("click", () => {
    addOns[i].classList.toggle("check");
  });
}

function updateData() {
  data.name = inputs[0].value;
  data.email = inputs[1].value;
  data.number = inputs[2].value;
  data.plan = querySelector(".clicked").querySelector("h6").innerHTML;
}

nextBtn.addEventListener("click", () => {
  if (currentPg < 4) {
    if (currentPg === 0 && checkCompleteInput()) {
      pages[currentPg].style.display = "none";
      currentPg++;
      backBtn.style.display = "block";
    } else if (currentPg != 0) {
      pages[currentPg].style.display = "none";
      currentPg++;
      backBtn.style.display = "block";
    } else {
      return;
    }
    if (currentPg === 4) {
      pages[currentPg].style.display = "flex";
      pages[currentPg].style.justifyContent = "center";
      pages[currentPg].style.alignItems = "center";
      backBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      pages[currentPg].style.display = "block";
    }

    if (currentPg === 3) {
      nextBtn.innerHTML = "Confirm";
      nextBtn.style.background = "hsl(243, 100%, 62%)";
    } else {
      nextBtn.innerHTML = "Next Step";
    }

    setSidebar();
  }
});

backBtn.addEventListener("click", () => {
  if (currentPg > 0) {
    pages[currentPg--].style.display = "none";
    if (currentPg === 3) {
      pages[currentPg].style.display = "flex";
      pages[currentPg].style.justifyContent = "center";
      pages[currentPg].style.alignItems = "center";
    } else {
      pages[currentPg].style.display = "block";
    }
    setSidebar();
    if (currentPg === 0) {
      backBtn.style.display = "none";
    }
  }
});

function initialize() {
  currentPg = 0;
  setSidebar();
  backBtn.style.display = "none";
}

initialize();
