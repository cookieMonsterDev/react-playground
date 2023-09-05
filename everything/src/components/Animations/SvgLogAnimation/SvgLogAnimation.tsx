import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Anim = keyframes`
  0%{
    stroke-dasharray: 570;
    stroke-dashoffset: 564;
  }
  99% {
    stroke-dasharray: 570;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
  }
`;

const Discoloration = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: none;
    stroke: black;

    > polygon {
      stroke-linecap: round;
      stroke-dasharray: 570;
      animation: ${Anim} 1000ms ease-in-out forwards;
      transition: all 2000ms;
    }

    > path {
      fill: red;
      opacity: 0;
      animation: ${Discoloration} 1200ms ease-in-out 1000ms forwards;
    }

    &:hover {
      > polygon {
        fill: #c5c5e4;
      }
    }
  }
`;

const Hexagon = () => {
  return (
    <Cont>
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-5 -5 210 210"
        version="1.1"
        width="100"
        height="100"
      >
        <polygon
          className="hex"
          points="52,16.8615612366939 148,16.8615612366939 196,100 148,183.138438763306 52,183.138438763306 4,100"
          strokeWidth={15}
        ></polygon>
        <path
          id="text"
          transform="translate(58, 55)"
          d="M 11.7 91 L 0 91 L 0 0 L 17.29 0 L 42.51 57.59 L 67.34 0 L 85.02 0 L 85.02 91 L 72.67 91 L 72.67 15.73 L 48.36 70.46 L 36.14 70.46 L 11.7 15.73 L 11.7 91 Z"
        ></path>
      </svg>
    </Cont>
  );
};

export default Hexagon;