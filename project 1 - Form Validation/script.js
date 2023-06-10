const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const inputs = document.querySelectorAll("input");
const formControls = document.querySelectorAll(".form-control");
const submit = document.getElementById("btn-submit");
const form = document.getElementById("form");

const emailIsValid = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return String(email).toLowerCase().match(re);
};

const checkPassword = (password) => {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  return re.test(password);
};

// My script

// submit.addEventListener("click", () => {
//   formControls.forEach((form) => (form.className = "form-control"));
//   for (const input of inputs) {
//     if (input.value.trim() !== "") {
//       input.parentElement.classList.add("succes");
//     } else {
//       input.parentElement.classList.add("error");
//     }
//   }

//   if (password.value !== password2.value) {
//     [password, password2].forEach((pass) =>
//       pass.parentElement.classList.add("error")
//     );
//     [password, password2].forEach(
//       (pass) =>
//         (pass.parentElement.querySelector("small").innerText =
//           "password not equal")
//     );
//   }

//   if (
//     password.value === password2.value &&
//     !checkPassword(password.value) &&
//     !checkPassword(password2.value)
//   ) {
//     [password, password2].forEach((pass) =>
//       pass.parentElement.classList.add("error")
//     );
//     [password, password2].forEach(
//       (pass) =>
//         (pass.parentElement.querySelector("small").innerText =
//           "the password must contain at least 1 lowercase and must contain at least 1 uppercase and must contain at least 1 numeric character and must contain at least one special character and must be at least 6 characters or longer")
//     );
//   }

//   if (!emailIsValid(email.value) && email.value !== "") {
//     email.parentElement.classList.add("error");
//     email.parentElement.querySelector("small").innerText =
//       "email invalid Please enter a valid email";
//   }
// });

// const showError = (input, msgError) => {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = msgError;
// };

// const ShowSucces = (input) => {
//   const formControl = input.parentElement;
//   formControl.className = "form-control succes";
// };

// first Solution

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (username.value === "") {
//     showError(username, "input is empty please enter Your username");
//   } else {
//     ShowSucces(username);
//   }
//   if (email.value === "") {
//     showError(email, "enter your email");
//   } else if (!emailIsValid(email.value)) {
//     showError(email, "input is empty please enter a valid email");
//   } else {
//     ShowSucces(email);
//   }
//   if(password.value === "" || password2.value === "") {
//     showError(password, "input is empty pleaseenter your password");
//     showError(password2, "input is empty pleaseenter your password");
//   }
//   else if (password.value !== password2.value) {
//     showError(password, "password not equal");
//     showError(password2, "password not equal");
//   } else if (!checkPassword(password) && !checkPassword(password2)) {
//     showError(
//       password,
//       "the password must contain at least 1 lowercase and must contain at least 1 uppercase and must contain at least 1 numeric character and must contain at least one special character and must be at least 6 characters or longer"
//     );
//     showError(
//       password2,
//       "the password must contain at least 1 lowercase and must contain at least 1 uppercase and must contain at least 1 numeric character and must contain at least one special character and must be at least 6 characters or longer"
//     );
//   } else {
//     ShowSucces(password)
//     ShowSucces(password2)
//   }
// });

// Second Solution

const showError = (input, msgError) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = msgError;
};

const ShowSucces = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control succes";
};

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    // console.log(input.value)
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`);
    } else {
      showSucces(input);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
});
