import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
  timeout: 3000,
  position: "topRight",
});

const form = document.querySelector(".form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const delay = Number(form.delay.value);
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === "fulfilled" ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(delay => {
      console.log(`Fulfilled promise in ${delay}ms`);

      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`
      });
    })
    .catch(delay => {
      console.log(`Rejected promise in ${delay}ms`);

      iziToast.error({
        message: `Rejected promise in ${delay}ms`
      });
    });

  form.reset();
});