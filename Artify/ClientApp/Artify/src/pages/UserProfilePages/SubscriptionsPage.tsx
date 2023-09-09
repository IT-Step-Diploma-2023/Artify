/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, Paper } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from '../../components/UI/UserProfileComponents/ProfileMenu';
import ProfileTopComponent from '../../components/UI/UserProfileComponents/ProfileTopComponent';


const SubscriptionsPage: FunctionComponent = () => {

  const { t } = useTranslation();

  const subscriptions = t('accountPage2.subscriptions');

  return <>
    <ProfileTopComponent />
    <ProfileMenu translation={t}></ProfileMenu>
    <Grid container spacing={{ xs: 2, md: 3 }} style={{ margin: 'auto 50px' }}>
      <Grid xs={12} sm={6} md={3}>
        <Paper elevation={0} style={{ width: 280, height: 259, marginTop: '60px', backgroundColor: '#ECEAEF', border: '1px solid #9E9AA2', borderRadius: '10px 10px 10px 10px' }}>
          <img
            style={{ width: 280, height: 80, borderRadius: '10px 10px 0px 0px', marginBottom: '-36px' }}
            src={'images/background_subscriptions.png'}
            srcSet={'images/background_subscriptions.png'}
            alt={'background'}
            loading="lazy"
          />
          <div style={{}}>
            <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg" sx={{ width: '72px', height: '72px', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0px 2px 4px 0px #2718464D' }} />
            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} style={{ fontFamily: 'Nunito', fontSize: '16px', fontWeight: 700, lineHeight: '19.1px', color: '#271846', marginTop: '10px' }}>
              luna everhart
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} style={{ fontFamily: 'Nunito', fontSize: '14px', fontWeight: 700, lineHeight: '19.1px', color: '#271846' }}>
              3d artist
            </Typography>
            <Button className='button button-dark' style={{ marginTop: '20px', marginRight: 'auto', marginLeft: 'auto', display: 'block', width: '141px', height: '39px', borderRadius: '30px', padding: 'auto auto', fontSize: '14px' }}>
              {subscriptions}
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </>
};
export default SubscriptionsPage;






