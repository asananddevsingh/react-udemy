import React from 'react';
// import logo from './logo.svg';
import './App.css';

import SimpleCounter from "./simpleCounter/simpleCounter";
import ReduxCounter from "./reduxCounter/reduxCounter";
// import Fiddle from "./fiddle";

function App() {
  return (
    <div className="App">
      {/* <Fiddle /> */}
      <SimpleCounter />
      <hr />
      <ReduxCounter />
      <hr />
    </div>
  );
}

export default App;
