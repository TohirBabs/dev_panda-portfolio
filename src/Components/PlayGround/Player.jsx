import React from "react";
import { styled, keyframes } from "styled-components";

const Player = styled.div`
  background-color: rgb(118, 120, 122);
  border-radius: 5rem;
  width: 20rem;
  height: 20rem;
`;

const spinToCircle = keyframes`0%{border-radius: 5rem;}0%{border-radius: 5rem;}0%{border-radius: 5rem;}`;

export default Player;
