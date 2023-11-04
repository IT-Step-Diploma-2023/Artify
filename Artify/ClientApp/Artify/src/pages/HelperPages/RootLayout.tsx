import { Outlet } from 'react-router-dom';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent, useState } from 'react';
import Footer from '../../components/Layouts/FooterComponent/Footer';
import { Box } from '@mui/material';
import UserContext from '../../utils/UserContext';

const RootLayout: FunctionComponent = () => {

  const [isUserLogged, setUserIsLogged] = useState<boolean>(false);
  // const navigation = useNavigation();
  return (
    <>
    <UserContext.Provider value = {{
      isUserLogged, setUserIsLogged
    }}>
      <MainNavigation />
      <main>
        <Box sx={{
          margin: 'auto',
          marginTop: '124px',
          width: {
            xs: 'calc(100vw - 40px)',
            md: 'calc(100vw - 100px)',
            lg: 'calc(100vw - 200px)'
          },
          boxSizing: 'border-box',
          marginBottom: {
            sm: 'calc(41px * 3 + 3rem)',
            lg: 'calc(41px + 3rem)',
          }
        }}>
          {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
          <Outlet />
        </Box>
      </main>
      <Footer pos='docked' />
    </UserContext.Provider>

    </>
  );
};
export default RootLayout;
