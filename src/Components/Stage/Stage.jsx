import styled from "styled-components";
import Header from "./Header";
import { Hero } from "./Hero";

const Stage = styled.div`
  background-color: transparent;
  backdrop-filter: blur(3px);
  z-index: 10;
  width: 100vw;
  max-width: 1000px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  margin: auto;
  position: absolute;
`;

const Staged = ({ setmoveIndex, moveIndex }) => {
  function movePlayer() {
    setmoveIndex((moveIndex + 1) % 4);
  }

  return (
    <Stage>
      <Header />
      <Hero movePlayer={movePlayer} />
    </Stage>
  );
};

export default Staged;
