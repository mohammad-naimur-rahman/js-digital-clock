const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');

const dayDate = document.querySelector('.date');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const weekDay = document.querySelector('.day');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurseday', 'Friday', 'Satureday'];

const showTime = () => {
    const date = new Date();
    if (date.getHours() == 0) {
        ampm.textContent = 'am';
        hr.textContent = 12 + date.getHours();
    } else if (date.getHours() > 0 || date.getHours < 12) {
        ampm.textContent = 'am';
        hr.textContent = date.getHours();
    } else if (date.getHours >= 12) {
        ampm.textContent = 'pm';
        hr.textContent = date.getHours() - 12;
    }

    hr.textContent = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    min.textContent = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    sec.textContent = date.getSeconds() < 10 ? '0' + date.getSeconds() : sec.textContent = date.getSeconds();

    dayDate.textContent = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    month.textContent = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    year.textContent = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
    weekDay.textContent = days[date.getDay()];

}

showTime();

setInterval(() => {
    showTime();
}, 1000);