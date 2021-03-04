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
    const getHr = date.getHours();
    const getMin = date.getMinutes();
    const getSec = date.getSeconds();
    const getDt = date.getDate();
    const getMn = date.getMonth();
    const getYr = date.getFullYear();

    if (getHr == 0) {
        ampm.textContent = 'am';
        hr.textContent = 12 + getHr;
    } else if (getHr > 0 && getHr < 12) {
        ampm.textContent = 'am';
        if (getHr < 10) {
            hr.textContent = '0' + 12;
        } else {
            hr.textContent = getHr;
        }

    } else if (getHr >= 12) {
        ampm.textContent = 'pm';
        if (getHr < 20) {
            hr.textContent = '0' + (getHr - 12);
        } else {
            hr.textContent = getHr - 12;
        }
    }

    setTime = (query, timeQuery) => {
        query.textContent = timeQuery < 10 ? '0' + timeQuery : timeQuery;
    }

    setTime(min, getMin);
    setTime(sec, getSec);
    setTime(dayDate, getDt);
    setTime(month, getMn);
    setTime(year, getYr);


    weekDay.textContent = days[date.getDay()];

}

showTime();

setInterval(() => {
    showTime();
}, 1000);