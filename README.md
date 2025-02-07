# User Management Table

## Опис

Цей проект реалізує таблицю управління користувачами, яка дозволяє вам переглядати та фільтрувати список користувачів, отриманих з API. Таблиця відображає такі поля: ім'я, ім'я користувача, електронна пошта та телефон. Ви можете використовувати поля фільтрації для швидкого пошуку користувачів за цими атрибутами.

## Функціональні можливості

- **Відображення користувачів**: Всі користувачі відображаються у таблиці з їх іменем, ім'ям користувача, електронною поштою та телефоном.
- **Фільтрація**: Ви можете фільтрувати користувачів за кожним з чотирьох полів (ім'я, ім'я користувача, email, телефон). Введення тексту в будь-яке з полів автоматично оновлює список відображених користувачів у реальному часі.
- **Адаптивний дизайн**: Таблиця має зручний та привабливий дизайн, який легко використовувати на будь-якому пристрої.

## Як користуватись

1. **Встановлення та запуск**:
   - Клонувати цей репозиторій:
     ```bash
     git clone <URL>
     ```
   - Перейти в директорію проекту:
     ```bash
     cd user-management-app
     ```
   - Встановити залежності:
     ```bash
     npm install
     ```
   - Запустити проект:
     ```bash
     npm start
     ```
   - Перейти в браузері за адресою: `http://localhost:3000`

2. **Використання таблиці**:
   - Після завантаження сторінки ви побачите таблицю користувачів.
   - У верхній частині кожного стовпця є поле введення, яке дозволяє фільтрувати користувачів за відповідним атрибутом.
   - Введіть текст у будь-яке з полів (ім'я, ім'я користувача, email, телефон) для фільтрації списку користувачів. Таблиця автоматично оновлюється у режимі реального часу.

## Технічні деталі

Проект створений з використанням наступних технологій:

- **React**: Бібліотека для створення користувацького інтерфейсу.
- **Redux Toolkit**: Інструментарій для управління станом додатку.
- **TypeScript**: Мова програмування, що надає можливість додавання статичної типізації до JavaScript.
- **Axios**: Бібліотека для виконання HTTP-запитів до API.

## Структура проекту

- **src/components/UserTable.tsx**: Компонент таблиці, який відповідає за відображення та фільтрацію користувачів.
- **src/store/userSlice.ts**: Redux slice для управління станом користувачів та фільтрів.
- **src/App.tsx**: Головний компонент додатку.
- **src/index.tsx**: Точка входу в додаток.

## Поширені питання

### Що робити, якщо користувачі не завантажуються?

Якщо користувачі не завантажуються, перевірте наступні моменти:
- Переконайтеся, що ви підключені до Інтернету.
- Перевірте консоль розробника на наявність помилок.
- Спробуйте оновити сторінку.

### Як додати нові поля до таблиці?

Щоб додати нові поля до таблиці:
- Оновіть інтерфейс `User` у файлі `userSlice.ts`.
- Додайте нові поля у компонент `UserTable.tsx`.
- Створіть нові поля фільтрації в компоненті та оновіть логіку фільтрації.

## Контакти

Якщо у вас є питання або пропозиції, будь ласка, зв'яжіться зі мною за адресою.
sashavjun22@gmail.com
