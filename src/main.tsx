import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Repo from './routes/Repo/index.tsx';
import Error from './routes/ErrorPage/index.tsx';
import repoLoader from './routes/Repo/loader.ts';
import { tableLoader } from './components/RepoTable/loader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    loader: tableLoader,
  },
  {
    path: '/:repoId',
    element: <Repo />,
    errorElement: <Error />,
    loader: repoLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
