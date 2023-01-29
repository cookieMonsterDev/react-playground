// import Loader from './components/Loader/Loader';
// import HookUseCallback from './components/ReactHooksEx/HookUseCallback';
// import HookUseContext from './components/ReactHooksEx/HookUseContext';
// import HookUseReducer from "./components/ReactHooksEx/HookUseReducer";
// import HookUseOutside from "./components/ReactCustomHooksEx/HookUseOutside";
// import DropDowns from "./components/Animations/DropDownMenu";
// import SearchList from "./components/PatternComponents/SearchList/SearchList";
// import TestPage from "./pages/testPage";
// import TestPage2 from "./pages/testPage2";
// import HookUseEffect from "./components/ReactHooksEx/HookUseEffect";
// import DropDowns from './components/Animations/DropDownMenu'
// import ImageInput from './components/PatternComponents/ImageInput'
// import Logo from "./components/Animations/logoAnimation";
import Notification from "./components/Animations/Notification/Notification";
import { useState } from 'react'

const App = () => {
  const [state, setState] = useState({message: 'Somesthing went wrong'})

  return (
    <div>
      <Notification text={state}/>
      <button onClick={() => setState({message: 'Somesthing went wrong'})}>Update text</button>
    </div>
  );
}

export default App;
