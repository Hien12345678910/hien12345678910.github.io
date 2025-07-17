const submitBtn = document.getElementById("submit-btn");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const formContainer = document.getElementById("form-container");
const infoContainer = document.getElementById("info-container");
const displayEmail = document.getElementById("display-email");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isValidEmail(email) {
  return regex.test(email);
}
submitBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();
  if (!email || !isValidEmail(email)) {
    emailError.textContent =
      "Email không hợp lệ. Vui lòng nhập đúng định dạng.";
  } else {
    emailError.textContent = "";
    displayEmail.textContent = email;

    formContainer.classList.add("hide");
    infoContainer.classList.remove("hide");
  }
});

document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const infoBox = this.closest(".card");
    const extraInfo = infoBox.querySelector(".extra-info");
    const isVisible = extraInfo.style.display === "block";

    extraInfo.style.display = isVisible ? "none" : "block";
    this.textContent = isVisible ? "▼ View More" : "▲ View Less";
  });
});
