import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { NotFound } from './pages/NotFound';
import { Welcome } from './pages/Welcome';
import { LanguageProvider } from './contexts/LanguageContext';
import { MediaList } from './pages/MediaList';
import { FormDataProvider } from './contexts/FormContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/welcome" replace />,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'media',
        element: <MediaList />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <FormDataProvider>
        <RouterProvider router={router} />
      </FormDataProvider>
    </LanguageProvider>
  </React.StrictMode>
);
