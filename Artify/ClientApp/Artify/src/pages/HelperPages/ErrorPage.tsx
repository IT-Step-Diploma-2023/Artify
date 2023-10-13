/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouteError } from 'react-router-dom';
import PageContent from '../../components/Layouts/PageContent';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
import Footer from '../../components/Layouts/FooterComponent/Footer';
import { Container } from '@mui/material';
const ErrorPage: FunctionComponent = () => {
  const error: any = useRouteError();
  let title = 'An error occured';
  let message = 'Something went wrong';
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not found resource or page';
  }

  return (
    <>
      <MainNavigation />
      <Container sx={{
        paddingLeft: { sx: '1rem', sm: '50px', md: '100px' },
        paddingRight: { sx: '1rem', sm: '50px', md: '100px' },
        height: 'calc(100vh - 24rem)'
      }}>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </Container>
      <Footer />
    </>
  );
};
export default ErrorPage;
