import { React, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Scene } from "three";

const Field = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;
const spinToCircle = keyframes`
0%{border-radius: 15vh;
  top: 20vh;
  left: 30%;
  height: 60vh;transform: rotate(0deg) }
100%{border-radius: 30vh;
  top: 60vh;
  left: 30%;
  transform: rotate(360deg) ;
  height: 60vh;}`;

const collapseToPill = keyframes`
0%{border-radius: 30vh;
  top: 60vh;
  left: 30%;
  height: 60vh;}
100%{border-radius: 15vh;
  top: 20vh;
  left: -30%;
  height: 30vh;}`;

const rotatePill = keyframes`
0%{border-radius: 15vh;
  top: 20vh;
  left: -30%;
  height: 30vh;}
100%{border-radius: 15vh;
  top: -10vh;
  left: 40%;
  height: 30vh;
transform: rotate(90deg)}`;

const expandToRoundedSquare = keyframes`
0%{border-radius: 15vh;
  top: -10vh;
  left: 40%;
  height: 30vh;
transform: rotate(90deg)}
100%{border-radius: 15vh;
  top: 20vh;
  left: 30%;
  height: 60vh}`;

const playerMoves = [
  spinToCircle,
  collapseToPill,
  rotatePill,
  expandToRoundedSquare,
];

const PlayGround = ({ moveIndex }) => {
  const Player = styled.div`
    position: absolute;

    background-color: rgb(118, 120, 122);
    width: 60vh;
    animation: ${playerMoves[moveIndex]} 0.7s both ease-in;
  `;

  return (
    <Field>
      <Player />
    </Field>
  );
};

export default PlayGround;
