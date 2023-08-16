import ExampleFetch from './components/ExampleFetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/HelperPages/RootLayout';
import ErrorPage from './pages/HelperPages/ErrorPage';
import HomePage from './pages/HomePage';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'fetchdata', element: <ExampleFetch /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
