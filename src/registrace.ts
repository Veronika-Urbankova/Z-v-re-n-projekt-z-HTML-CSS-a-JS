// Načtení formuláře
const form = document.querySelector("form") as HTMLFormElement;
const firstName = document.querySelector(".firstname") as HTMLInputElement;
const lastName = document.querySelector(".lastname") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const confirmPassword = document.querySelector(
  ".confirm-password"
) as HTMLInputElement;

// Pomocná funkce pro resetování stylů
function resetValidationStyles() {
  password.classList.remove("error", "success");
  confirmPassword.classList.remove("error", "success");
}

// Kontrola hesla
confirmPassword.addEventListener("input", () => {
  const pass = password.value;
  const confirm = confirmPassword.value;

  resetValidationStyles();

  if (pass === "" || confirm === "") {
    if (pass === "") password.classList.add("error");
    if (confirm === "") confirmPassword.classList.add("error");
    return;
    // password.style.border = pass === "" ? "1px solid red" : "";
    // confirmPassword.style.border = confirm === "" ? "1px solid red" : "";
    // return;
  }

  if (pass === confirm) {
    password.classList.add("success");
    confirmPassword.classList.add("success");
    // password.style.border = "1px solid green";
    // confirmPassword.style.border = "1px solid green";
  } else {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    // password.style.border = "1px solid red";
    // confirmPassword.style.border = "1px solid red";
  }
});

// Zachycení formuláře
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(password.value);
  console.log(confirmPassword.value);

  resetValidationStyles();

  // resetování rámečku
  // password.style.border = "";
  // confirmPassword.style.border = "";

  // Refresh formuláře
  form.reset();
});
