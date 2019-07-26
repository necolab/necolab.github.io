import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from './components/Cards';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from "react-lottie";
import './App.scss';
import logoBg from './assets/NECO_BG.svg';
import line from './assets/neco_line.svg';
import animationData from "./data/anim.json";



const MegaHeading = styled.h1`
    font-size: 9rem;
    line-height: 11rem;
    word-break : normal;
    font-weight: bold;
    letter-spacing: 5px;
    margin-top: 50px;
    color: #262626;

    @media screen and (max-width: 800px) {
        font-size: 4rem;
        line-height: 6rem;
    }
`;

const MegaHeadingHighlight = styled.span`

    &:hover {
        color: white;
    background: #0449C6;
    padding: 10px;
    border-radius: 10px;
    }
`;


const DescHeading = styled.h2`
    font-weight: bold;
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

const LogoImg = styled.object`
    width: 50%;
    margin: 0 auto;
    margin: 8rem;
    margin-top: 5rem;
`;


const LineImg = styled.object`
    width: 100%;
    overflow: hidden;
`;



const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};


class App extends Component {

    componentDidMount() {
        var hostName = document.location.hostname;
        if  ( hostName === "localhost" || hostName === "127.0.0.1" ) {
            console.log("THIS IS DEBUG!");
        } else {
            alert("ただいま、このページは更新中です。お手数おかけして申し訳ございません。");
        }
    }

    render() {
        return (
            <>

            <LogoImg type="image/svg+xml" data={logoBg}></LogoImg>
            <LineImg type="image/svg+xml" data={line}></LineImg>


                <Container>
                    <Row>
                        <Col>
                            <MegaHeading>
                                <MegaHeadingHighlight>Ne</MegaHeadingHighlight>tworking
                            </MegaHeading>
                            <MegaHeading>
                                <MegaHeadingHighlight>Co</MegaHeadingHighlight>llaboration
                            </MegaHeading>
                            <Lottie options={defaultOptions} height={500} width={500} />

                            <DescHeading>
                            NECO Lab.は「技術」と「社会」の両方の側面を繋いで(networking)、SFCだからこそ出来る研究を共創する(collaboration)のための研究グループです。
                            </DescHeading>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Heading>PROJECTS</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card up><h1>ここに乗る人募集中！</h1></Card>
                        </Col>
                        <Col>
                            <Card down><h1>ここに乗る人募集中！</h1></Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Heading>MEMBERS</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card down><h1>あとで、プロフィール提出させます。</h1></Card>
                        </Col>
                        <Col>
                            <Card up><h1>考えておいてください！！！！！</h1></Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Heading>CONTACT</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col up>
                            <h1>
                                Q&Aとかいるかなあ？
                            </h1>
                        </Col>
                        <Col down>
                            <h1>
                                過去のNECOサイトには男女比の質問があったらしい
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default App;
