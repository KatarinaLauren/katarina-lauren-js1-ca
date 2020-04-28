const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");
let answerHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmail = document.querySelector("#invalidEmailError");
let emailHasError = false;
let emailIsInvalid = false;

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
let addressHasError = false;

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  // Name Required

  const nameValue = name.value;

  if (validateLength(nameValue, 1) === true) {
    nameError.style.display = "none";
    nameHasError = false;
  } else {
    nameError.style.display = "block";
    nameHasError = true;
  }

  // Answer min lenght 10

  const answerValue = answer.value;

  if (validateLength(answerValue, 10) === true) {
    answerError.style.display = "none";
    answerHasError = false;
  } else {
    answerError.style.display = "block";
    answerHasError = true;
  }

  // Email Required

  const emailValue = email.value;
  if (validateLength(emailValue, 1) === true) {
    emailError.style.display = "none";
    emailHasError = false;
  } else {
    emailError.style.display = "block";
    emailHasError = true;
  }

  // Email correct format

  if (validateEmail(emailValue)) {
    invalidEmail.style.display = "none";
    emailIsInvalid = false;
  } else {
    invalidEmail.style.display = "block";
    emailIsInvalid = true;
  }

  // Address min lenght 15

  const addressValue = address.value;

  if (validateLength(addressValue, 15) === true) {
    addressError.style.display = "none";
    addressHasError = false;
  } else {
    addressError.style.display = "block";
    addressHasError = true;
  }

  if (
    nameHasError === true ||
    answerHasError === true ||
    emailHasError === true ||
    emailIsInvalid === true ||
    addressHasError === true
  ) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
    const container = document.querySelector(".container");
    container.innerHTML = `<h1>The form was submitted</h1>
    <div>
    <p> Name: ${name.value} </p>
    <p>Answer: ${answer.value}</p>
    <p>Email: ${email.value}</p>
    <p>Address: ${address.value}</p>
    </div>`;
  }

  function validateLength(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
      return true;
    } else {
      return false;
    }
  }
}
