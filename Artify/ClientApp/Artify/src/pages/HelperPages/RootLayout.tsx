import { Outlet } from 'react-router-dom';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
import Footer from '../../components/Layouts/FooterComponent/Footer';
import { Box } from '@mui/material';

const RootLayout: FunctionComponent = () => {

  // const navigation = useNavigation();
  return (
    <>
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
    </>
  );
};
export default RootLayout;
