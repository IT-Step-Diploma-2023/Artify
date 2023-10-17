/* eslint-disable @typescript-eslint/no-misused-promises */
import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from '../../components/UI/UserProfileComponents/ProfileMenu';
import ProfileTopComponent from '../../components/UI/UserProfileComponents/ProfileTopComponent';
import LikedProfileCard from '../../components/UI/UserProfileComponents/LikedProfileCard';


const SubscriptionsPage: FunctionComponent = () => {

  const { t } = useTranslation();

  const subscriptions = t('accountPage2.subscriptions');

  return <>
    <ProfileTopComponent />
    <ProfileMenu translation={t} />
    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ margin: 'auto 50px' }}>
      {getCards(subscriptions)}
    </Grid>
  </>

};
export default SubscriptionsPage;


const getCards = (subscriptions: string) => {

  const cards = [];

  for (let i = 0; i < 12; i++) {
    cards.push(
      <Grid item xs={12} sm={6} md={3} key={i}>
        <LikedProfileCard
          name='Remy Sharp'
          image='/images/sample_christian_kouly_profile.jpg'
          specialization='3d artist'
          buttonText={subscriptions} />
      </Grid>
    )
  }

  return <>
    {cards}
  </>
}

