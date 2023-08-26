import ExampleFetch from './components/ExampleFetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/HelperPages/RootLayout';
import ErrorPage from './pages/HelperPages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/AuthorizationPages/LoginPage';
import LogoutPage from './pages/AuthorizationPages/LogoutPage';
import store from './store/index';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import { colors } from './assets/defaults/colors';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'fetchdata', element: <ExampleFetch /> },
        { path: 'logout', element: <LogoutPage /> },
      ],
    },
    { path: 'login', element: <LoginPage /> }
  ]);

  const theme = createTheme({
    typography: {
      fontFamily: 'Nunito'
    },
    palette: {
      background: {
        default: colors.lightGrey
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
       <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
    </ThemeProvider>
  );
}

export default App;
