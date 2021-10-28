import styled from 'styled-components';

export const Navbar = styled.nav`
  z-index: 100;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background: white;
  filter: drop-shadow(0px 0px 1px rgb(184, 184, 184));
  width: 100%;
  min-height: 60px;
  margin: 0;
  top: 0;
  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;

export const NavBrand = styled.h1`
  font-family: "Lora", serif;
  font-size: 1.5rem;
  margin: 0;
  padding-left: 25px;
  @media screen and (max-width: 480px) {
    height: 60px;
    line-height: 60px;
    padding-left: 15px;
  }
`;
