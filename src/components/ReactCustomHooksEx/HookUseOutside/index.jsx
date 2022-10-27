import useOutside from './Hook';
import styled from 'styled-components';
import { useRef, useState } from 'react';

// The exeption ref (exRef), solve the problem in case if we do not link the ref to whole container 

const HookUseOutside = () => {
  const ref = useRef(null);
  const exRef = useRef(null);
  const [isOn, setOn] = useState(false);
  useOutside(ref, exRef, () => setOn(false));

  return (
    <Container>
      <Button onClick={() => setOn((prev) => !prev)} ref={exRef}>
        Change state
      </Button>
      <Box2 state={isOn} ref={ref} />
    </Container>
  );
};

export default HookUseOutside;

const Container = styled.div`
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
`;

const Box2 = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: yellow;
  position: absolute;

  display: none;

  ${(props) => props.state && 'display: block'}
`;
