// Навигация в мобильной версии

const navMain = document.querySelector(".main-navigation");
const navToggle = navMain.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});

//Модальные окна

if (document.querySelector(".modal")) {
  const formFeedback = document.querySelector(".form");
  const fieldName = formFeedback.querySelector(".form__input-text--name");
  const fieldSurname = formFeedback.querySelector(".form__input-text--surname");
  const fieldEmail = formFeedback.querySelector(".form__input-text--email");
  const fieldTel = formFeedback.querySelector(".form__input-text--tel");
  const popupFailure = document.querySelector(".modal--failure");
  const popupSuccess = document.querySelector(".modal--success");
  const buttonFailure = popupFailure.querySelector(".button--failure");
  const buttonSuccess = popupSuccess.querySelector(".button--success");

  formFeedback.addEventListener("submit", function (evt) {
    if (!fieldName.value || !fieldSurname.value || !fieldEmail.value || !fieldTel.value) {
      evt.preventDefault();
      popupFailure.classList.add("modal-show");
      if (!fieldName.value) {
        fieldName.classList.add("form__input-text-error");
      }
      if (!fieldSurname.value) {
        fieldSurname.classList.add("form__input-text-error");
      }
      if (!fieldEmail.value) {
        fieldEmail.classList.add("form__input-text-error");
      }
      if (!fieldTel.value) {
        fieldTel.classList.add("form__input-text-error");
      }
    }
    else {
      popupSuccess.classList.add("modal-show");
    }
  })

  buttonFailure.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFailure.classList.remove("modal-show");
    if (fieldName.classList.contains("form__input-text-error")) {
      fieldName.classList.remove("form__input-text-error");
    }
    if (fieldSurname.classList.contains("form__input-text-error")) {
      fieldSurname.classList.remove("form__input-text-error");
    }
    if (fieldEmail.classList.contains("form__input-text-error")) {
      fieldEmail.classList.remove("form__input-text-error");
    }
    if (fieldTel.classList.contains("form__input-text-error")) {
      fieldTel.classList.remove("form__input-text-error");
    }
  })

  buttonSuccess.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSuccess.classList.remove("modal-show");
  })

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupFailure.classList.contains("modal-show")) {
        evt.preventDefault();
        popupFailure.classList.remove("modal-show");
        if (fieldName.classList.contains("form__input-text-error")) {
          fieldName.classList.remove("form__input-text-error");
        }
        if (fieldSurname.classList.contains("form__input-text-error")) {
          fieldSurname.classList.remove("form__input-text-error");
        }
        if (fieldEmail.classList.contains("form__input-text-error")) {
          fieldEmail.classList.remove("form__input-text-error");
        }
        if (fieldTel.classList.contains("form__input-text-error")) {
          fieldTel.classList.remove("form__input-text-error");
        }
      }
      if (popupSuccess.classList.contains("modal-show")) {
        evt.preventDefault();
        popupSuccess.classList.remove("modal-show");
      }
    }
  });
}
