const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
  }
});

passwordInput.addEventListener("input", () => {
  if (!passwordInput.checkValidity()) {
    passwordInput.classList.add("invalid");
  } else {
    passwordInput.classList.remove("invalid");
  }
});
