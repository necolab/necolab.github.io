import React, { Component } from 'react';
import { BigHeader } from './components/BigHeader';
import { NavigationBar } from './components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';

class App extends Component {
    render() {
        return (
            <>
            <NavigationBar/>
            <BigHeader/>

            <>
                <Container>
                    <Row>
                        <Col>
                            <h1>About us</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>IoTでビッグデータをAIしてBlockchain</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </>
            </>
        );
    }
}

export default App;
