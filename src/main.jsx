import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
// import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
// import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },{
        path: 'portfolio',
        element: <PortfolioPage />,
      // },{
      //   path: 'resume',
      //   element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
