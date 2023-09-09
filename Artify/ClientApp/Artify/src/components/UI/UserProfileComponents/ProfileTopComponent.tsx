/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import LocationOn from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router';


const ProfileTopComponent: FunctionComponent = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return <>
    <div style={{ margin: '0 auto', width: '500px' }}>
      <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg"
        sx={{ marginTop: '90px', display: 'inline-block', width: '147px', height: '147px' }} />
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'block', marginBottom: '45px' }}>
          <Typography component='div' sx={{ display: 'block', marginLeft: '40px', fontSize: '30px' }}>
            {t('jocelyn calzoni')}
          </Typography>
          <LocationOn sx={{ fintSize: 'small', display: 'inline-block', marginLeft: '38px' }} />
          <Typography component='div' sx={{ display: 'inline-block' }}>
            {t('Ukraine')}
          </Typography>
        </div>
        <Button className='button button-border-dark button-m'
          style={{ display: 'block', marginBottom: '70px', marginLeft: '40px', width: '130px', height: '42px', left: '100px', border: '1px solid #271846', borderRadius: '30px', gap: '10px', padding: '10px, 22px, 10px, 22px' }}
          onClick={()=>{navigate('/settings-basicinfo')}}>
          <Typography component='div' sx={{ float: 'center', padding: '1px 6px' }}>
            {t('accountPage2.editAccount')}
          </Typography>
        </Button>
      </div>
    </div>
  </>
};

export default ProfileTopComponent;

