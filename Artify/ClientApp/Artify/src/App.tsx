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
// auth and reg pages
import LoginPage from './pages/AuthorizationPages/LoginPage';
import LogoutPage from './pages/AuthorizationPages/LogoutPage';
import EmailRegisterPage from './pages/RegistrationPages/EmailRegistrationPage';
import SelectRegisterPage from './pages/RegistrationPages/SelectRegistrationPage';
import GoogleRegisterPage from './pages/RegistrationPages/GoogleRegistrationPage';
// user settings pages
import ProfInfoPage from './pages/UserSettingsPages/ProfInfoPage';
import NetworksPage from './pages/UserSettingsPages/NetworksPage';
import DelAccountPage from './pages/UserSettingsPages/DelAccountPage';
// user profile pages
import PortfolioPage from './pages/UserProfilePages/PortfolioPage';
import BasicInfoPage from './pages/UserSettingsPages/BasicInfoPage';
import ShowBorders from './pages/ShowBordersPage';
import AboutMePage from './pages/UserProfilePages/AboutMePage';
import LikedPage from './pages/UserProfilePages/LikedPage';
import SharePage from './pages/UserProfilePages/SharePage';
import CollectionItemPage from './pages/UserProfilePages/CollectionItemPage';
import SavedPage from './pages/UserProfilePages/SavedPage';
import SubscriptionsPage from './pages/UserProfilePages/SubscriptionsPage';

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
        // SETTINGS
        { path: 'settings-basicinfo', element: <BasicInfoPage /> },
        { path: 'settings-profinfo', element: <ProfInfoPage /> },
        { path: 'settings-networks', element: <NetworksPage /> },
        // PROFILE
        { path: 'portfolio', element: <PortfolioPage /> },
        { path: 'about', element: <AboutMePage /> },
        { path: 'liked', element: <LikedPage /> },
        { path: 'share', element: <SharePage /> },
        { path: 'delete-account', element: <DelAccountPage /> },
        { path: 'saved', element: <SavedPage /> },
        { path: 'collectionItems', element: <CollectionItemPage /> },
        { path: 'subscriptions', element: <SubscriptionsPage /> },
        // TEMPORARY HELPER PAGE
        { path: 'show-borders', element: <ShowBorders /> } 
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
