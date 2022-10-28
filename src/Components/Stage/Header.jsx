import React from "react";
import styled, { keyframes } from "styled-components";

const Logo = styled.h1`
  position: absolute;
  color: rgb(238, 239, 240);

  top: 80px;
  left: 20px;
  font-size: 2.5rem;
  font-weight: bold;
  -webkit-animation: animateStrongText 1s both;
  animation: animateStrongText 1s both;
`;

const Themes = styled.div`
  z-index: 10;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 20px;
  top: 20px;

  .themes .dark {
    background-color: #030407;
  }

  .themes .light {
    background-color: whitesmoke;
  }
`;

const ThemeButton = styled.button`
  border-radius: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  border: none;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <header>
      <Logo>🐼dev_panda</Logo>
      <Themes>
        <ThemeButton onclick="switchToDark()">🌙</ThemeButton>
        <ThemeButton onclick="switchToLight()">🌞</ThemeButton>
      </Themes>
    </header>
  );
};

export default Header;
