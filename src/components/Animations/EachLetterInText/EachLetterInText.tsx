import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const RubberBand = keyframes`
    0%{
        transform: scaleX(1);
    }
    40%{
        transform: scaleX(1.12) scaleY(0.75);
    }
    55%{
        transform: scaleX(0.85) scaleY(1);
    }
    65%{
        transform: scaleX(1.09) scaleY(0.85);
    }
    75%{
        transform: scaleX(0.9)  scaleY(1);
    }
    90%{
        transform: scaleX(1.05) scaleY(0.95);
    }
    100%{
        transform: scaleX(1) scaleY(1);
    }
`;

const Drop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Letter = styled.span<{
  isActive?: boolean;
  delay?: number;
  dureation: number;
}>`
  font-size: 5rem;
  opacity: 0;

  ${({ isActive }) =>
    !isActive &&
    css`
      opacity: 1;
      transition: all 300ms;

      &:hover {
        color: #6bcf6b;
        animation: ${RubberBand} 700ms alternate;
      }
    `}

  ${({ isActive, delay, dureation }) =>
    isActive &&
    css`
      animation: ${Drop} ${dureation}ms forwards;
      animation-delay: ${delay}ms;
    `}
`;

const TheLetter = ({
  dureation,
  delay = 0,
  children,
}: {
  dureation: number;
  delay?: number;
  children?: React.ReactNode;
}) => {
  const [state, setState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(false);
    }, dureation + delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Letter isActive={state} dureation={dureation} delay={delay}>
      {children}
    </Letter>
  );
};

const EachLetterInText = () => {
  const arr = ['T', 'E', 'S', 'T'];

  return (
    <Cont>
      {arr.map((e, i) => (
        <TheLetter key={i} dureation={1000} delay={250 * i}>
          {e}
        </TheLetter>
      ))}
    </Cont>
  );
};

export default EachLetterInText;
