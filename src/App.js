
import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
// import { Mainpage } from './components/MainPage';
import { Mainpagemap } from './components/MainPageMap';

function App() {
  return (
    <div className="App">

      <Navbar/>
      {/* <Mainpage/> */}
      <Mainpagemap/>
      
    </div>
  );
}

export default App;
