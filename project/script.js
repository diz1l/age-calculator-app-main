// Получаем ссылки на элементы DOM по их ID
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// Получаем ссылки на сообщения об обязательных полях
const dayIsRequired = document.getElementById("day_is_required");
const monthIsRequired = document.getElementById("month_is_required");
const yearIsRequired = document.getElementById("year_is_required");

// Обработчик события при изменении значения в поле "Day"
dayInput.addEventListener("input", checkDay);

// Обработчик события при изменении значения в поле "Month"
monthInput.addEventListener("input", checkMonth);

// Обработчик события при изменении значения в поле "Year"
yearInput.addEventListener("input", checkYear);

// Функция для проверки заполнения поля 
function checkDay() {
  if (dayInput.value.trim() === "") {
    dayIsRequired.style.display = "block";
  } else {
    dayIsRequired.style.display = "none";
  }
}

function checkMonth() {
  if (monthInput.value.trim() === "") {
    monthIsRequired.style.display = "block";
  } else {
    monthIsRequired.style.display = "none";
  }
}

function checkYear() {
  if (yearInput.value.trim() === "") {
    yearIsRequired.style.display = "block";
  } else {
    yearIsRequired.style.display = "none";
  }
}

// Функция для расчета возраста и количества дней потрачено

// Получаем ссылки на элементы с результатами
const yearSpendLabel = document.getElementById("year_spend");
const monthSpendLabel = document.getElementById("month_spend");
const daySpendLabel = document.getElementById("day_spend");

// Обработчик события при изменении значения в полях "Day", "Month" и "Year"
dayInput.addEventListener("input", calculateAgeAndSpend);
monthInput.addEventListener("input", calculateAgeAndSpend);
yearInput.addEventListener("input", calculateAgeAndSpend);

// Функция для расчета возраста и количества дней потрачено
function calculateAgeAndSpend() {
    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);
  
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      // Создаем объекты даты для даты рождения и текущей даты
      const birthDate = new Date(year, month - 1, day); // Месяцы в JavaScript начинаются с 0 (январь)
      const currentDate = new Date();
  
      // Разница между текущей датой и датой рождения в миллисекундах
      const difference = currentDate - birthDate;
  
      // Количество миллисекунд в годе, месяце и дне
      const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
      const millisecondsPerMonth = millisecondsPerYear / 12;
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
  
      // Подсчет количества лет, месяцев и дней
      const years = Math.floor(difference / millisecondsPerYear);
      const months = Math.floor((difference % millisecondsPerYear) / millisecondsPerMonth);
      const days = Math.floor((difference % millisecondsPerMonth) / millisecondsPerDay);
  
      // Вывод результата в элементы с ID "year_spend", "month_spend" и "day_spend"
      yearSpendLabel.textContent = years.toString();
      monthSpendLabel.textContent = months.toString();
      daySpendLabel.textContent = days.toString();
    } else {
      // Если введенные данные некорректны, обнуляем результат
      yearSpendLabel.textContent = "0";
      monthSpendLabel.textContent = "0";
      daySpendLabel.textContent = "0";
    }
  }

  
dayInput.addEventListener("input", function () {
    toggleLabelHighlight(dayInput, dayLabel);
  });
  
  monthInput.addEventListener("input", function () {
    toggleLabelHighlight(monthInput, monthLabel);
  });
  
  yearInput.addEventListener("input", function () {
    toggleLabelHighlight(yearInput, yearLabel);
  });
  
  function toggleLabelHighlight(inputField, labelElement) {
    if (inputField.value.trim() === "") {
      labelElement.classList.add("required");
    } else {
      labelElement.classList.remove("required");
    }
  }
  