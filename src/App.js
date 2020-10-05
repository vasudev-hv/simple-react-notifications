import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BadgedButton, BadgeTheme } from "@react-md/badge";
import Notifications from './Badges/Notifications';
// import Simple from './Badges';
const notificationStyle = 'default';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notifications></Notifications>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
