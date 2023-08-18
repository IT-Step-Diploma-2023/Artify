import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FunctionComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('homePage.text')}</h1>;
};
export default HomePage;
