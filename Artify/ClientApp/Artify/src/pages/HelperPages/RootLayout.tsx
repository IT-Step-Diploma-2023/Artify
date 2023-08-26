import { Outlet } from 'react-router-dom';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
import { Paper } from '@mui/material';
const RootLayout: FunctionComponent = () => {
  // const navigation = useNavigation();
  return (
    <>
        <MainNavigation />
        <main>
          {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
          <Outlet />
        </main>
    </>
  );
};
export default RootLayout;
