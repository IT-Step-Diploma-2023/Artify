import { useRouteError } from 'react-router-dom';
import PageContent from '../../components/Layouts/PageContent';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
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

      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};
export default ErrorPage;
