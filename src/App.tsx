import React from 'react';
import { Navbar, NavBrand } from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Navbar>
        <NavBrand>NECO Lab</NavBrand>
      </Navbar>
      <p>Hello, world</p>
    </React.Fragment>
  );
}

export default App;
