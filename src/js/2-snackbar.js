
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
  timeout: 3000,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const delay = Number(form.delay.value);
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then((delay) => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success({
        title: 'Success',
        message: `Проміс виконано через ${delay}мс`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        title: 'Error',
        message: `Проміс відхилено через ${delay}мс`,
        position: 'topRight',
      });
    });
      form.reset();
});