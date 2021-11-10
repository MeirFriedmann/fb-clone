import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Contacts from './Contacts';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <div className="Header"><Header /></div>
      <div className="Container">
        <div className="Sidebar"><Sidebar /></div>
        <div className="Feed"><Feed /></div>
        <div className="Contacts"><Contacts /></div>
      </div>
    </div>
  );
}






export default App;
