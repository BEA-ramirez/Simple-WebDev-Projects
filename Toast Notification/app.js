let toastBox = document.getElementById("toastBox");
let succesMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again!';

const success = document.getElementById("success");
const error = document.getElementById("error");
const invalid = document.getElementById("invalid");

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}

success.addEventListener("click", () => showToast(succesMsg));
error.addEventListener("click", () => showToast(errorMsg));
invalid.addEventListener("click", () => showToast(invalidMsg));
