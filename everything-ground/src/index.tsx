import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux/es/exports';
// import store from './store';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

// root.render(
//   <StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </StrictMode>
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dashboard" element={<div>test</div>} />
    </Route>
  )
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// root.render(<App />);
