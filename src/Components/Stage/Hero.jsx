import React from "react";
import styled, { keyframes } from "styled-components";

const HeroSection = styled.div`
  width: 95%;
  height: 39rem;
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 1.2rem;
  transform: translateX(-50%);
  line-height: 2rem;
  margin-top: 2rem;
  color: rgb(238, 239, 240);

  @media (min-width: 700px) {
    font-size: 1.7rem;
  }
`;

const P1 = styled.p`
  position: absolute;
  text-align: left;
`;
const P2 = styled.p`
  position: absolute;
  text-align: right;
  margin-left: 5%;
  margin-top: 4rem;
  top: 5rem;
  @media (min-width: 700px) {
    margin-left: 20%;
  }
`;

const P3 = styled.p`
  position: absolute;
  text-align: left;
  margin-right: 5%;
  top: 25rem;
`;

const animateEmText = keyframes`0% {
    font-size: 1rem;
    font-weight: normal;
  }
  100% {
    font-size: 1.7rem;
    font-weight: bold;
  }
   @media (min-width: 700px) {
    0% {
    font-size: 1.7rem;
    font-weight: normal;
  }
  100% {
    font-size: 3rem;
    font-weight: bold;
  }
  }`;

const Em = styled.em`
  color: #032250;
  font-style: normal;
  animation: ${animateEmText} 1s both ease-in;
`;

const BotinWrapper = styled.div`
  height: 60px;
  max-width: 240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  bottom: 0;
  right: 30%;
  transform: translateX(50%);
`;

const animateBotin = keyframes`
 0% {
    padding: 1rem 3rem;
    font-size: 1.2rem;
  }
  50% {
    padding: 0.4rem 4.5rem;
    font-size: 1rem;
  }
  100% {
    padding: 1rem 3rem;
    font-size: 1.2rem;
  }`;

const Botin = styled.button`
  margin: auto;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  color: #030407;
  border: 2px solid #030407;

  font-family: monospace;
  cursor: pointer;
  background-color: rgb(238, 239, 240);

  &:active {
    animation: ${animateBotin} 0.2s both;
  }
`;

export const Hero = ({ movePlayer }) => {
  return (
    <HeroSection>
      <P1>hello there!👋, i'm</P1>
      <P2>
        a <Em>frontend developer.</Em> which means i'm responsible for the
        <Em> look</Em> and <Em> feel</Em> of your everyday
        <Em> applications</Em>, whether <Em> web</Em>, <Em>mobile</Em> or
        <Em> softwares</Em>.
      </P2>

      <P3>
        here's my <Em>portfolio</Em> of projects i think you'll find
        <Em> really cool!🙃</Em>
      </P3>
      <BotinWrapper>
        <Botin onClick={() => movePlayer()}>explore</Botin>
      </BotinWrapper>
    </HeroSection>
  );
};
