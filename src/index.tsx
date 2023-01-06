import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
// import store from './store';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
        <App />
    {/* </Provider> */}
  </StrictMode>
);
