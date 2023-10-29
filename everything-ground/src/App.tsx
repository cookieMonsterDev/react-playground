
import styled from 'styled-components';

import Skeleton from './components/Animations/Skeleton/Skeleton';


const App = () => {
  return (
    <Window>
      <Skeleton style={{width: "100px", height: "100px"}}/>
    </Window>
  );
};

export default App;

const Window = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;