import { Outlet } from 'react-router-dom';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
import Footer from '../../components/Layouts/Navigation/Footer';


const RootLayout: FunctionComponent = () => {
  // const navigation = useNavigation();
  return (
    <>
        <MainNavigation />
        <main>
          {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
          <Outlet />
        </main>
        <Footer/>
    </>
  );
};
export default RootLayout;
