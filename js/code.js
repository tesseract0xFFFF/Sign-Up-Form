const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorDiv = document.getElementById("password-match-error");

confirmPasswordInput.addEventListener("keyup", (event) => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
  }
})