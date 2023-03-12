import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', throttle(handleInput, 500));

populateData();
let formData = {};

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields!');
  } else {
    console.log({ email: email.value, message: message.value });
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    alert('The form has been submitted successfully!');
  }
}

function handleInput(evt) {
  const key = evt.target.name;
  formData[key] = evt.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
  }
}
