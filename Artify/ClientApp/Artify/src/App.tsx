import ExampleFetch from './components/ExampleFetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/HelperPages/RootLayout';
import ErrorPage from './pages/HelperPages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/AuthorizationPages/LoginPage';
import LogoutPage from './pages/AuthorizationPages/LogoutPage';
import store from './store/index';
import { Provider } from 'react-redux';
import ResultPage from "./pages/AuthorizationPages/ResultPage";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'fetchdata', element: <ExampleFetch /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'logout', element: <LogoutPage /> },
        { path: 'actionresult', element: <ResultPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
