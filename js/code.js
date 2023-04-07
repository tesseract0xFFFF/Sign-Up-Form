const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorDiv = document.getElementById("password-match-error");

confirmPasswordInput.addEventListener("keyup", (event) => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    errorDiv.style.display = "block";
    confirmPasswordInput.style.outlineColor = 'red';
  } else {
    errorDiv.style.display = "none";
    confirmPasswordInput.style.outlineColor = 'blue';
  }
})