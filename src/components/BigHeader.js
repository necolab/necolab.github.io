import React from 'react';
import styled from 'styled-components';


const HeaderBackground = styled.div`
  background: white;
`;

const Header = styled.h1`
  font-size: 15rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: #206be5;
  margin: 20px;
  text-shadow: 1px 1px 1px #206be5, 1px -1px 1px #206be5, -1px 1px 1px #206be5, -1px -1px 1px #206be5,0 0 22px #206be5;

  @media screen and (max-width: 480px) {
    font-size: 5rem;
  }
`;


export class BigHeader extends React.Component {

  render() {
    return (
        <HeaderBackground>
            <Header>NECO Lab</Header>
        </HeaderBackground>
    );
  }
}
