import { useRouteError } from 'react-router-dom';
import PageContent from '../../components/Layouts/PageContent';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
const ErrorPage: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const error: any = useRouteError();
  let title = 'An error occured';
  let message = 'Something went wrong';
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (error.status === 500) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    const newLocal = message = JSON.parse(error.data).message;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
