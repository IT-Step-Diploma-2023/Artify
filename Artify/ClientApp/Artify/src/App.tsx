import ExampleFetch from './components/ExampleFetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import theme from './assets/defaults/theme';
import { useEffect, useState } from 'react';


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
import BasicInfoPage from './pages/UserSettingsPages/BasicInfoPage';
import ProfInfoPage from './pages/UserSettingsPages/ProfInfoPage';
import NetworksPage from './pages/UserSettingsPages/NetworksPage';
import DelAccountPage from './pages/UserSettingsPages/DelAccountPage';
// user profile pages
import PortfolioPage from './pages/UserProfilePages/PortfolioPage';
import ShowBorders from './pages/ShowBordersPage';
import AboutMePage from './pages/UserProfilePages/AboutMePage';
import LikedPage from './pages/UserProfilePages/LikedPage';
import SharePage from './pages/UserProfilePages/SharePage';
import CollectionItemPage from './pages/UserProfilePages/CollectionItemPage';
import SavedPage from './pages/UserProfilePages/SavedPage';
import SubscriptionsPage from './pages/UserProfilePages/SubscriptionsPage';
// main menu / footer menu pages
import HirePage from './pages/HirePages/HirePage';
import HelpCenterPage from './pages/UserHelpPages/HelpCenterPage';
//
import MessagePage from './pages/MessagePage';
import ProfilePage2 from './pages/ProfilePage2';
import SharePage1 from './pages/UserProfilePages/SharePage1';
import SharePage2 from './pages/UserProfilePages/SharePage2';
import FilterPage from './pages/FilterPage';

import HowAddWorkPage from './pages/UserHelpPages/HowAddWorkPage';
import HowBuyWorkPage from './pages/UserHelpPages/HowBuyWorkPage';
import HowHireDesignerPage from './pages/UserHelpPages/HowHireDesignerPage';

import AboutUsBrandsPage from './pages/UserHelpPages/AboutUsBrandsPage';
import AboutUsIllustratorsPage from './pages/UserHelpPages/AboutUsIllustratorsPage';
import AboutUsPage from './pages/UserHelpPages/AboutUsPage';
import AboutUsProductDesignersPage from './pages/UserHelpPages/AboutUsProductDesignersPage';
import AboutUsUiUxPage from './pages/UserHelpPages/AboutUsUiUxPage';
import AboutUsWebDesignersPage from './pages/UserHelpPages/AboutUsWebDesignersPage';
import AboutUsPhotographsPage from './pages/UserHelpPages/AboutUsPhotographsPage';
import MediaKitPage from './pages/UserHelpPages/MediaKitPage';
import { isUserLogged } from './hooks/useAuthorization';
import AppContext from './utils/AppContext';
import TestingPage from './pages/TestingPage';
import { useTranslation } from 'react-i18next';
import { IBasicUserFormData } from './assets/interfaces/usersInterfaces';
import { retriveData } from './hooks/useCurrentUser';

function App() {

  const [signinState, setSigninState] = useState<boolean>(() => isUserLogged() !== "");
  const [user, setUser] = useState<IBasicUserFormData>();
  const { t } = useTranslation();
  const translation = t;
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'fetchdata', element: <ExampleFetch /> },
        // SETTINGS
        { path: 'settings-basicinfo', element: <BasicInfoPage /> },
        { path: 'settings-profinfo', element: <ProfInfoPage /> },
        { path: 'settings-networks', element: <NetworksPage /> },
        // PROFILE
        { path: 'portfolio', element: <PortfolioPage /> },
        { path: 'about', element: <AboutMePage /> },
        { path: 'liked', element: <LikedPage /> },
        { path: 'share', element: <SharePage /> },
        { path: 'share1', element: <SharePage1 /> },
        { path: 'share2', element: <SharePage2 /> },
        { path: 'delete-account', element: <DelAccountPage /> },
        { path: 'saved', element: <SavedPage /> },
        { path: 'collectionItems', element: <CollectionItemPage /> },
        { path: 'subscriptions', element: <SubscriptionsPage /> },
        // MAIN MENU / FOOTER MENU
        { path: 'hire', element: <HirePage /> },
        { path: 'help-center', element: <HelpCenterPage /> }, // renamed HelpPage
        { path: 'how-add-work', element: <HowAddWorkPage /> },
        { path: 'how-buy-work', element: <HowBuyWorkPage /> },
        { path: 'how-hire-designer', element: <HowHireDesignerPage /> },
        { path: 'about-us', element: <AboutUsPage /> },
        { path: 'about-us-brands', element: <AboutUsBrandsPage /> },
        { path: 'about-us-illustrators', element: <AboutUsIllustratorsPage /> },
        { path: 'about-us-photographs', element: <AboutUsPhotographsPage /> },
        { path: 'about-us-designers', element: <AboutUsProductDesignersPage /> },
        { path: 'about-us-uiux', element: <AboutUsUiUxPage /> },
        { path: 'about-us-web', element: <AboutUsWebDesignersPage /> },
        { path: 'media-kit', element: <MediaKitPage /> },

        { path: 'howAddWork', element: <HowAddWorkPage /> },
        { path: 'howBuyWork', element: <HowBuyWorkPage /> },
        { path: 'howHireDesigner', element: <HowHireDesignerPage /> },

        { path: 'aboutUs', element: <AboutUsPage /> },
        { path: 'photographs', element: <AboutUsPhotographsPage /> },
        { path: 'brands', element: <AboutUsBrandsPage /> },
        { path: 'uiUx', element: <AboutUsUiUxPage /> },
        { path: 'productDesigners', element: <AboutUsProductDesignersPage /> },
        { path: 'illustrators', element: <AboutUsIllustratorsPage /> },
        { path: 'webDesigners', element: <AboutUsWebDesignersPage /> },

        //////////////////////////////////////////////////////
        // !!! NOT IN USE
        { path: 'messagesPage', element: <MessagePage /> },
        { path: 'accountPage2', element: <ProfilePage2 /> },
        // TEMPORARY HELPER PAGE
        { path: 'show-borders', element: <ShowBorders /> },
        { path: 'filter', element: <FilterPage /> },
        { path: 'test', element: <TestingPage /> },
      ],
    },
    //////////////////////////////////////////////////////
    // !!! СЮДИ ІНШІ РОУТИ НЕ ДОДАВАТИ !!!

    { path: 'login', element: <LoginPage /> },
    { path: 'select-register', element: <SelectRegisterPage /> },
    { path: 'google-register', element: <GoogleRegisterPage /> },
    { path: 'email-register', element: <EmailRegisterPage /> },
    { path: 'logout', element: <LogoutPage /> },
  ]);

  useEffect(() => {
    let ignore = false;
    if (signinState)
      void retriveData(setUser, ignore);
    return () => { ignore = true };
  }, [signinState]);

  return (
    <AppContext.Provider value={{
      signinState, setSigninState,
      user, setUser,
      translation
    }}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;

