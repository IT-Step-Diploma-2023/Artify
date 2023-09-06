/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';

import { NavLink } from "react-router-dom";

import { Avatar, Checkbox, Grid, IconButton, ImageListItem, Paper, Tabs } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import LocationOn from '@mui/icons-material/LocationOn';

import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import CommonButton from '../../components/UI/CommonButton';
import { colors } from '../../assets/defaults/colors'

interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}

const PortfolioPage: FunctionComponent = () => {

  const { t, i18n } = useTranslation();

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
    '/liked',
    '/subscriptions',
  ]



  return <>
    <Grid container spacing={2}>
      <Grid item xs={4} md={4}/>
      <Grid item xs={4} md={4}>
        <div>
          <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg" sx={{ marginTop: '90px', display: 'inline-block', width: '147px', height: '147px' }} />
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
            <CommonButton color='secondary' sx={{ 
              backgroundColor: colors.lightGrey, 
              width: '130px', 
              margin: 'auto', 
              display: 'block', marginBottom: '70px'}}>
              <Typography > {editAccount} </Typography>
            </CommonButton>
          </div>
        </div>
      </Grid>
      <Grid item xs={4} md={4} />
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
          style={{ width: '645px', height: '44px', gap: '20px' }}>
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



    <Grid container spacing={{ xs: 2, md: 3 }} style={{ marginLeft: '50px' }}>

      {itemData.map((item) => (
        <Grid xs={12} sm={6} md={3}>
          <Paper elevation={0} style={{ width: 240, height: 238, borderRadius: '10px', marginTop: '60px', background: '#ECEAEF' }}>
            <ImageListItem key={item.img} >
              <img
                style={{ width: 280, height: 200, borderRadius: '10px', boxShadow: '0px 4px 8px 0px #27184666' }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </Paper>
        </Grid>

      ))}
      <IconButton aria-label="addaphoto" className={'link2'} style={{ marginTop: '60px', display: 'block' }}
        sx={{ border: '2px dashed #271846', color: '#271846', padding: '50px', borderRadius: '10px', width: '280px', height: '200px' }}>
        <Typography style={{ display: 'block', marginTop: '16px', marginLeft: '14px', fontWeight: 'normal' }} >{downloadWork}</Typography>
        <AddCircleOutline style={{ width: '44px', height: '44px', fontWeight: 'normal' }} />
      </IconButton>
    </Grid>


  </>
};
export default PortfolioPage;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  }
];