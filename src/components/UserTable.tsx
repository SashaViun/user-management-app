import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { RootState, AppDispatch } from '../store'; 
import { fetchUsers, setFilter } from '../store/userSlice'; 
import './UserTable.css';

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  // Використовуємо useDispatch для доступу до dispatch функції Redux.

  const users = useSelector((state: RootState) => state.users.users); 
  // Використовуємо useSelector для вибору масиву користувачів із стану Redux.

  const filters = useSelector((state: RootState) => state.users.filters); 
  // Використовуємо useSelector для вибору поточних значень фільтрів з Redux.

  const status = useSelector((state: RootState) => state.users.status); 
  // Використовуємо useSelector для вибору статусу завантаження даних (idle, loading, failed).

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers()); 
      // Якщо статус "idle", то запускаємо дію fetchUsers для завантаження даних користувачів із API.
    }
  }, [status, dispatch]); 
  // Використовуємо useEffect для виконання дії fetchUsers тільки при першому завантаженні або при зміні статусу.

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
    user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
    user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  );
  // Фільтруємо масив користувачів на основі поточних значень фільтрів.
  // Для кожного користувача перевіряємо, чи містить його ім'я, ім'я користувача, email або телефон введене значення.

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    dispatch(setFilter({ key, value })); 
    // Використовуємо setFilter для встановлення нового значення фільтра у Redux, коли користувач вводить дані.
  };

  return (
    <div>
      {status === 'failed' && <p>Error loading users.</p>}
      {/* Відображаємо повідомлення про помилку, якщо завантаження користувачів не вдалося. */}

      <table>
        <thead>
          <tr>
            <th>
              Name
              <input
                type="text"
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
                placeholder="Search Name"
              />
              {/* Поле вводу для фільтрації за іменем користувача. */}
            </th>
            <th>
              Username
              <input
                type="text"
                value={filters.username}
                onChange={(e) => handleFilterChange('username', e.target.value)}
                placeholder="Search Username"
              />
              {/* Поле вводу для фільтрації за ім'ям користувача. */}
            </th>
            <th>
              Email
              <input
                type="text"
                value={filters.email}
                onChange={(e) => handleFilterChange('email', e.target.value)}
                placeholder="Search Email"
              />
              {/* Поле вводу для фільтрації за електронною поштою користувача. */}
            </th>
            <th>
              Phone
              <input
                type="text"
                value={filters.phone}
                onChange={(e) => handleFilterChange('phone', e.target.value)}
                placeholder="Search Phone"
              />
              {/* Поле вводу для фільтрації за телефоном користувача. */}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
          {/* Відображаємо відфільтрованих користувачів у таблиці. */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

