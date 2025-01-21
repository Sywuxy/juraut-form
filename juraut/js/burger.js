let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.aside');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

const yearSelect = document.getElementById('year');

for (let year = 1900; year <= 2025; year++) {
  const option = document.createElement('option'); // Создаем элемент <option>
  option.value = year; // Устанавливаем значение для атрибута value
  option.textContent = year; // Устанавливаем текст, который будет виден пользователю
  yearSelect.appendChild(option); // Добавляем <option> в <select>
}