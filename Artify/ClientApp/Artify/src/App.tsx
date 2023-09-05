import ExampleFetch from './components/ExampleFetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import theme from './assets/defaults/theme';
// pages
import RootLayout from './pages/HelperPages/RootLayout';
import ErrorPage from './pages/HelperPages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/AuthorizationPages/LoginPage';
import LogoutPage from './pages/AuthorizationPages/LogoutPage';
import EmailRegisterPage from './pages/RegistrationPages/EmailRegistrationPage';
import SelectRegisterPage from './pages/RegistrationPages/SelectRegistrationPage';
import GoogleRegisterPage from './pages/RegistrationPages/GoogleRegistrationPage';
import PortfolioPage from './pages/UserProfilePages/PortfolioPage';
import EditProfilePage from './pages/UserProfilePages/EditProfilePage';
import ShowBorders from './pages/ShowBordersPage';
import ProfInfoPage from './pages/UserProfilePages/ProfInfoPage';
import NetworksPage from './pages/UserProfilePages/NetworksPage';
import DelAccountPage from './pages/UserProfilePages/DelAccountPage';

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
        { path: 'portfolio', element: <PortfolioPage /> },
        { path: 'profile-basicinfo', element: <EditProfilePage /> },
        { path: 'profile-profinfo', element: <ProfInfoPage /> },
        { path: 'profile-networks', element: <NetworksPage /> },
        { path: 'delete-account', element: <DelAccountPage /> },
        { path: 'show-borders', element: <ShowBorders /> } // temporary 
      ],
    },
    { path: 'login', element: <LoginPage /> },
    { path: 'select-register', element: <SelectRegisterPage /> },
    { path: 'google-register', element: <GoogleRegisterPage /> },
    { path: 'email-register', element: <EmailRegisterPage /> }
  ]);

  return (
    <ThemeProvider theme={theme}>
       <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
    </ThemeProvider>
  );
}

export default App;
