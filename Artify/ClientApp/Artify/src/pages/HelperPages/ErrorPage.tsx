/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouteError } from 'react-router-dom';
import PageContent from '../../components/Layouts/PageContent';
import MainNavigation from '../../components/Layouts/Navigation/MainNavigation';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const ErrorPage: FunctionComponent = () => {
  
  const { t } = useTranslation();
  const error: any = useRouteError();
  let title = t('errorPage.undefinedError.title');
  let message = t('errorPage.undefinedError.message');

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = t('errorPage.notFoundError.title');
    message = t('errorPage.notFoundError.message');
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
