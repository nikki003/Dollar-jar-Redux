import React from 'react';
import AddPerson  from './Components/AddPerson';
import PersonList from './Components/PersonList';
// import logo from './logo.svg';
import './App.css';

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

export default function App() {
  return(
    <div className="App">
      <h2>Hello</h2>
      <AddPerson />
      <PersonList />
    </div>
  );
}
