import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Window>
      <Container>
        <Circle />
        <Circle />
        <Circle />
      </Container>
    </Window>
  );
};

export default Loader;

const Window = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;

  > div:nth-child(1) {
    animation-delay: -500ms;
  }

  > div:nth-child(2) {
    animation-delay: -350ms;
  }

  > div:nth-child(3) {
    animation-delay: -200ms;
  }
`;

const Circle = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  border: 1.3rem solid black;
  border-radius: 50%;
  border-color: black transparent transparent transparent;
  animation: ${Rotation} 1500ms infinite;
`;
