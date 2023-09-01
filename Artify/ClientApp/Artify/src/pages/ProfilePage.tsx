/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import { Avatar, Grid, IconButton, Tabs } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import LocationOn from '@mui/icons-material/LocationOn';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

interface Lngs {
  ua: string
  en: string
}

const ProfilePage: FunctionComponent = () => {

  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const pages = [
    t('accountPage2.portfolio'),
    t('accountPage2.about'),
    t('accountPage2.saved'),
    t('accountPage2.likedIt'),
    t('accountPage2.subscriptions')

  ];

  const editAccount = t('accountPage2.editAccount');
  const downloadWork = t('accountPage2.downloadWork');

  const pathes = [
    '/portfolio',
    '/about',
    '/saved',
    '/likedIt',
    '/subscriptions',
  ]


  return <>
    <Grid container spacing={2}>
      <Grid item xs={4} md={4}>

      </Grid>
      <Grid item xs={4} md={4}>
        <div>
          <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg" sx={{ marginTop: '100px', display: 'inline-block', width: '147px', height: '147px' }} />

          <div style={{ display: 'inline-block' }}>
            <div style={{ display: 'block' }}>
              <Typography component='div' sx={{ display: 'block', marginLeft: '40px', fontSize: '30px' }}>
                {t('jocelyn calzoni')}
              </Typography>
              <LocationOn sx={{ fintSize: 'small', display: 'inline-block', marginLeft: '38px' }} />
              <Typography component='div' sx={{ display: 'inline-block' }}>
                {t('Ukraine')}
              </Typography>
            </div>
            <Button className='button button-border-dark button-m'
              style={{ display: 'block', marginLeft: '40px', width: '130px', height: '42px', left: '100px', border: '1px solid #271846', borderRadius: '30px', gap: '10px', padding: '10px, 22px, 10px, 22px' }}>
              <Typography component='div' sx={{ float: 'center', padding: '1px 6px' }}>
                {editAccount}
              </Typography>
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={4} md={4}>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={3} md={3}>

      </Grid>
      <Grid item xs={5} md={5}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{}}
          style={{ width: '545px', height: '44px', gap: '20px' }}>
          {pages.map((page) => (
            <NavLink
              key={page}
              to={pathes[pages.indexOf(page)]}
              className={({ isActive }) => (isActive ? 'link1-active' : 'link1')}
            >{page}
            </NavLink>
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={4} md={4}>

      </Grid>
    </Grid>


    <Grid container spacing={2}>
      <Grid item xs={1} md={1}>

      </Grid>
      <Grid item xs={10} md={10}>
        <IconButton aria-label="addaphoto" className={'link2'} style={{ marginTop: '24px', display: 'block' }}
          sx={{ border: '2px dashed #271846', color: '#271846', padding: '50px', borderRadius: '10px', width: '280px', height: '200px' }}>
          <Typography style={{ display: 'block', marginTop: '16px', marginLeft: '14px', fontWeight: 'normal' }} >{downloadWork}</Typography>
          <AddCircleOutline style={{ width: '44px', height: '44px', fontWeight: 'normal' }} />
        </IconButton>

      </Grid>

    </Grid>
  </>
};
export default ProfilePage;

