# JavaScript Homework 10 — Timer & Snackbar

Навчальний проєкт із JavaScript, присвячений роботі з датами, таймерами, Promise
та асинхронними операціями.

Проєкт містить дві практичні роботи: таймер зворотного відліку та систему
сповіщень із використанням Promise.

## 🚀 Live Demo

[**Переглянути проєкт на GitHub Pages**](https://andrii-mitko.github.io/goit-js-hw-10/)

## 📌 Project Overview

### 1. Countdown Timer

Таймер зворотного відліку з можливістю вибору майбутньої дати та часу.

**Функціональність:**

- Вибір дати та часу за допомогою Flatpickr.
- Перевірка коректності вибраної дати.
- Запуск зворотного відліку.
- Відображення днів, годин, хвилин і секунд.
- Автоматичне завершення таймера після досягнення цільової дати.
- Блокування елементів керування під час роботи таймера.

### 2. Promise-based Snackbar

Форма створення сповіщень із використанням JavaScript Promise.

**Функціональність:**

- Введення затримки виконання в мілісекундах.
- Вибір результату Promise: `Fulfilled` або `Rejected`.
- Створення Promise з використанням `setTimeout()`.
- Обробка успішного виконання через `.then()`.
- Обробка помилки через `.catch()`.
- Відображення результату за допомогою iziToast.

## 🛠 Technologies

- **HTML5** — структура сторінок.
- **CSS3** — стилізація та адаптивна верстка.
- **JavaScript (ES6+)** — логіка та інтерактивність.
- **Vite** — інструмент розробки та збірки.
- **Flatpickr** — вибір дати та часу.
- **iziToast** — інформаційні сповіщення.
- **Promises** — асинхронна обробка результатів.
- **Git & GitHub** — контроль версій.
- **GitHub Actions** — автоматизація деплою.

## 📂 Project Structure

```text
goit-js-hw-10/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
├── src/
│   ├── css/
│   ├── img/
│   ├── js/
│   │   ├── 1-timer.js
│   │   └── 2-snackbar.js
│   ├── 1-timer.html
│   ├── 2-snackbar.html
│   └── index.html
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

Для локального запуску проєкту необхідно встановити
[Node.js](https://nodejs.org/).

1. Клонувати репозиторій:

   ```bash
   git clone https://github.com/Andrii-Mitko/goit-js-hw-10.git
   ```

2. Перейти до папки проєкту:

   ```bash
   cd goit-js-hw-10
   ```

3. Встановити залежності:

   ```bash
   npm install
   ```

4. Запустити локальний сервер:

   ```bash
   npm run dev
   ```

5. Відкрити адресу, яку Vite виведе в терміналі (за замовчуванням
   `http://localhost:5173`).

### Build

Створення production-збірки:

```bash
npm run build
```

Перегляд production-збірки локально:

```bash
npm run preview
```

## 🚢 Deployment

Проєкт розгорнутий на GitHub Pages.

Автоматизація збірки та деплою налаштована через GitHub Actions. Workflow
розташований у `.github/workflows/deploy.yml`.

## 🎯 Learning Objectives

Під час виконання роботи відпрацьовано:

- Роботу з датами та об'єктом `Date`.
- Створення таймерів за допомогою `setInterval()` і `setTimeout()`.
- Обробку подій DOM.
- Роботу з бібліотекою Flatpickr.
- Створення та обробку Promise.
- Використання методів `.then()` і `.catch()`.
- Обробку асинхронних операцій.
- Інтеграцію сторонніх JavaScript-бібліотек.
- Налаштування Vite та автоматичного деплою.

## 👨‍💻 Author

**Andrii Mitko**

Junior Full-Stack Developer

- [GitHub](https://github.com/Andrii-Mitko)
- [LinkedIn](https://www.linkedin.com/in/andrii-mitko/)
- [Portfolio](https://andrii-mitko-brand.vercel.app/)

---

_Educational project completed as part of the GoIT Full-Stack Developer course._
