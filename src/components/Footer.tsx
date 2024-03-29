// This component is ported from github.com/shotastage/shotach.com
// Copyright (c) 2021 Shota Shimazu

import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const Footer = (props: Props) => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

const CopyrightText = styled.p`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 1em;
  margin-bottom: 1em;
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const FooterCopyright = () => {
  const currentDate = new Date().getFullYear();

  return (
    <CopyrightText>
      Copyright © {currentDate} NECO Lab, All rights reserved.
    </CopyrightText>
  );
}
