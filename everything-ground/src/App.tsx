
import styled from 'styled-components';
import ProgressCircle from './components/PatternComponents/ProgressCircle';


const App = () => {
  return (
    <Window>
      <ProgressCircle min={10} max={66} current={20}/>
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