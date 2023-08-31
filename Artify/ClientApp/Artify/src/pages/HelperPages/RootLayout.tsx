import { Outlet } from 'react-router-dom';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
import Footer from '../../components/Layouts/FooterComponent/Footer';
import { Container } from '@mui/material';


const RootLayout: FunctionComponent = () => {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        <Container sx={{
          margin: '0 auto',
          paddingLeft: { sx: '1rem', sm: '50px', md: '100px' },
          paddingRight: { sx: '1rem', sm: '50px', md: '100px' }
        }}>
          {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
