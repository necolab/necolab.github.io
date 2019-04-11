import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from './components/Cards';
import { NavigationBar } from './components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import logo from './assets/necolab.png';


const MegaHeading = styled.h1`
    font-size: 7rem;
    line-height: 11rem;
    word-break : normal;
    font-weight: bold;
    letter-spacing: 5px;
    font-family: 'Noto Sans JP', sans-serif;
    margin-top: 50px;

    @media screen and (max-width: 800px) {
        font-size: 4rem;
        line-height: 6rem;
    }
`;

const Line = styled.span`
    padding-left: ${props => props.padding};
`;

const Highlight = styled.span`
    color: white;
    background: #3b3c3f;
    transition: all .3s;

    &:hover {
        background: #206be5;
        font-size: 7.5rem;
    }

    @media screen and (max-width: 800px) {
        &:hover {
            font-size: 4.5rem;
        }
    }
`;


const Heading = styled.h1`
    font-size: 5rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    margin-top: 2rem;

    @media screen and (max-width: 800px) {
        font-size: 2.5rem;
    }
`;

const LogoImg = styled.img`
    width: 80%;
    margin: 0 auto;
    margin: 8rem;
    margin-top: 5rem;
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
            <LogoImg src={logo}/>
        
                <Container>
                    <Row>
                        <Col>
                            <MegaHeading>
                                <Line padding="20px"><Highlight>情報技術</Highlight>を用いて<br/></Line>
                                <Line padding="150px">社会の<br/></Line>
                                <Line padding="20px"><Highlight>問題</Highlight>の<Highlight>解決策</Highlight>を<br/></Line>
                                <Line padding="320px">実践していく</Line>
                            </MegaHeading>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Heading>PROJECTS</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card up><h1>AAA</h1></Card>
                        </Col>
                        <Col>
                            <Card down><h1>AAA</h1></Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Heading>MEMBERS</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card><h1>AAA</h1></Card>
                        </Col>
                        <Col>
                            <Card><h1>AAA</h1></Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Heading>CONTACT</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default App;
