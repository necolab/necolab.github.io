import React, { Component } from 'react';
import styled from 'styled-components';
import { BigHeader } from './components/BigHeader';
import { NavigationBar } from './components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';


const Heading = styled.h1`
    font-size: 7rem;
    line-height: 11rem;
    word-break : normal;
    font-weight: bold;
    letter-spacing: 5px;
    font-family: 'Noto Sans JP', sans-serif;
    margin-top: 50px;
`;

const Line = styled.span`
    padding-left: ${props => props.padding};
`;

const Highlight = styled.span`
    color: white;
    background: #3b3c3f;
`;

class App extends Component {

    componentDidMount() {
        var hostName = document.location.hostname;
        if  ( hostName === "localhost" || hostName === "127.0.0.1" ) {
            console.log("THIS IS DEBUG!");
        } else {
            alert("ただいま、このページは更新中です。お手数おかけして申し訳ございません。");
            alert("NECOの履修に関しては4/11のRG合同説明会へ起こしください。");
        }
    }

    render() {
        return (
            <>
            <NavigationBar/>
            <BigHeader/>

            <>
                <Container>
                    <Row>
                        <Col>
                            <Heading>
                                <Line padding="20px"><Highlight>情報技術</Highlight>を用いて<br/></Line>
                                <Line padding="150px">社会の<br/></Line>
                                <Line padding="20px"><Highlight>問題</Highlight>の<Highlight>解決策</Highlight>を<br/></Line>
                                <Line padding="320px">実践していく</Line>
                            </Heading>
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
