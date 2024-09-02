import React from 'react';
import UserTable from './components/UserTable';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>User Management Table</h1>
      <UserTable />
    </div>
  );
};

export default App;
