import React from 'react';
import { Navbar, NavBrand } from './components/Navbar';
import { Header } from './components/Header';
import { Footer, FooterCopyright } from './components/Footer';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Navbar>
        <NavBrand>NECO Lab</NavBrand>
      </Navbar>
      <Header>
        <h1>NECO Lab</h1>
        <p>
          NECO Lab is one of the RG at Keio University.
        </p>
      </Header>
      <p>Hello, world</p>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default App;
