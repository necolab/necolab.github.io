import React, { Component } from 'react';
import { BigHeader } from './components/BigHeader';
import { NavigationBar } from './components/NavBar';
import { Button } from 'react-bootstrap';
import './App.scss';

class App extends Component {
    render() {
        return (
            <>
            <NavigationBar/>
            <BigHeader/>
            <h1>This web site is now under construction.</h1>
            </>
        );
    }
}

export default App;
