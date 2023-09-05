/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



import { NavLink } from "react-router-dom";

import { Grid, IconButton, Input, List, ListItem, ListItemButton, ListItemText, Select, Tab, TextField } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { AddAPhoto } from '@mui/icons-material';
import { display } from '@mui/system';
import Separator from '../../components/UI/Separator';
import ProfileMenu from '../../components/UI/ProfileMenu';


interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}

const EditProfilePage: FunctionComponent = () => {

  const { t, i18n } = useTranslation();

  const [value, setValue] = React.useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const pages = [
    t('accountPage.basicInfo'),
    t('accountPage.profInfo'),
    t('accountPage.socialNetworks'),

  ];

  const delAccount = t('accountPage.deleteAccount');

  const name = t('accountPage.name');
  const userName = t('accountPage.userName');
  const country = t('accountPage.country');
  const city = t('accountPage.city');
  const about = t('accountPage.about');
  const download = t('accountPage.download');
  const save = t('accountPage.save');

  const pathes = [
    '/profile-basicinfo',
    '/profile-profinfo',
    '/profile-networks'
  ]


  //basicInfo
  //professional information
  //social networks



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };


  return <>
    <Grid container spacing={2} display={'flex'}>
      <Grid item xs={4}>
        <ProfileMenu translation={t}></ProfileMenu>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label="addaphoto" className={'link2'} style={{ marginTop: '24px', display: 'block' }}
          sx={{ border: '2px dashed #271846', color: '#271846', padding: '50px' }}>
          <AddAPhoto />
        </IconButton>
        <Typography style={{ display: 'block', marginTop: '16px', marginLeft: '14px', fontWeight: 'bold' }} >{download}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Box component='form' onSubmit={handleSubmit}
          sx={{ width: '100%' }}>
          <Grid container columnSpacing={2} rowSpacing={3} marginTop={3} display={'flex'} flexGrow={1}>
            <Grid item xs={12} md={6} display={'flex'} flexGrow={1}>
              <div >
                <Typography style={{ display: 'block', marginBottom: '10px', marginLeft: '7px' }} >{name}</Typography>
                <Input className='input'
                  style={{ width: '100%', display: 'block' }}
                  required
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} display={'flex'}>
              <div >
                <Typography style={{ display: 'block', marginBottom: '10px', marginLeft: '7px' }} >{userName}</Typography>
                <Input className='input'
                  style={{ width: '100%', display: 'block' }}
                  required
                />
              </div>
            </Grid>
          </Grid>

          <Grid container columnSpacing={2} rowSpacing={3} marginTop={3}>
            <Grid item xs={12} md={6} display={'flex'}>
              <div>
                <Typography style={{ display: 'block', marginTop: '1px', marginLeft: '7px' }} >{country}</Typography>
                <Select className='select'
                  style={{ marginTop: '10px', width: '250px', display: 'block' }}
                  sx={{ backgroundColor: 'white', border: '1px solid #CACACA', borderRadius: '30px', height: '44px' }}
                  required
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} display={'flex'}>
              <div>
                <Typography style={{ display: 'block', marginBottom: '10px', marginLeft: '7px' }} >{city}</Typography>
                <Input className='input'
                  style={{ marginTop: '10px', width: '100%', display: 'block' }}
                  required
                />
              </div>
            </Grid>
          </Grid>
          <Typography style={{ display: 'block', marginTop: '36px', marginLeft: '7px' }} >{about}</Typography>
          <Grid container columnSpacing={2} rowSpacing={3}>
            <Grid item xs={12} md={12} display={'flex'}>
              <Input
                multiline
                rows={6}
                sx={{ padding: '10px, 30px, 10px, 30px', width: '100%', marginTop: '7px', borderRadius: '30px', border: '1px solid #CACACA', backgroundColor: '#FFFFFF' }}
              />
            </Grid>
          </Grid>
          <Button className='button' style={{ width: '164px', height: '54px', padding: '18px, 72px, 18px, 72px', marginTop: '54px', color: '#FFFFFF', marginLeft: '169px', backgroundColor: '#CACACA', borderRadius: '50px' }}>{save}</Button>
        </Box>
      </Grid>
    </Grid>

  </>
};
export default EditProfilePage;
