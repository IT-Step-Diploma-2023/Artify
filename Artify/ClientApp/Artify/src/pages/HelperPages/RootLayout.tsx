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
          maxWidth: '1240px',
          boxSizing: 'border-box',
          paddingLeft: { xs: '1rem', sm: '50px', lg: '0' },
          paddingRight: { xs: '1rem', sm: '50px', lg: '0' },
          paddingBottom: { xs: '1rem', sm: '2rem', md: '90px' }
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
