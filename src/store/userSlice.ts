import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios'; 

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
// Оголошуємо інтерфейс `User`, що описує структуру даних користувача.
// Це забезпечує безпеку типів під час роботи з даними користувачів.

interface FilterState {
  name: string;
  username: string;
  email: string;
  phone: string;
}
// Оголошуємо інтерфейс `FilterState`, що описує структуру стану фільтрів.
// Кожне поле відповідає за фільтрацію по відповідному атрибуту користувача.

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'failed';
  filters: FilterState;
}
// Оголошуємо інтерфейс `UserState`, що описує загальний стан для роботи з користувачами у Redux:
// - `users`: масив користувачів,
// - `status`: стан завантаження даних ('idle', 'loading', 'failed'),
// - `filters`: стан фільтрів.

const initialState: UserState = {
  users: [],
  status: 'idle', // Початковий стан: дані ще не завантажені (idle).
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};
// Визначаємо початковий стан для `userSlice`, що містить порожній масив користувачів,
// статус `idle`, та початкові значення фільтрів (порожні рядки).

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  // Виконуємо асинхронний запит до API для отримання списку користувачів.
  return response.data; 
  // Повертаємо отримані дані у вигляді масиву користувачів.
});
// Створюємо асинхронну дію `fetchUsers` для завантаження даних користувачів із зовнішнього API.
// `createAsyncThunk` дозволяє автоматично обробляти стани (pending, fulfilled, rejected).

const userSlice = createSlice({
  name: 'users',
  initialState,
  // Визначаємо ім'я slice ('users') та встановлюємо початковий стан (initialState).

  reducers: {
    setFilter: (state, action: PayloadAction<{ key: keyof FilterState; value: string }>) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
      // Визначаємо редюсер `setFilter` для оновлення значення фільтрів у стані.
      // Він отримує ключ (key) та значення (value) і оновлює відповідне поле у стані фільтрів.
    },
  },
  // Дефініція стандартних (synchronous) редюсерів для роботи з фільтрами.

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        // Визначаємо поведінку при виконанні запиту (pending):
        // змінюємо статус на 'loading', що означає, що дані зараз завантажуються.
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'idle';
        state.users = action.payload;
        // Визначаємо поведінку при успішному завершенні запиту (fulfilled):
        // змінюємо статус на 'idle' і зберігаємо завантажені дані користувачів у стані.
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
        // Визначаємо поведінку при помилці запиту (rejected):
        // змінюємо статус на 'failed', що означає, що завантаження не вдалося.
      });
  },
  // Дефініція додаткових редюсерів для обробки асинхронних операцій.
});

export const { setFilter } = userSlice.actions;
// Експортуємо дію `setFilter`, щоб її можна було використовувати в інших частинах додатку.

export default userSlice.reducer;
// Експортуємо редюсер, щоб він міг бути інтегрований у Redux Store.
