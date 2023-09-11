/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';

import { Link, NavLink } from "react-router-dom";

import { Avatar,  Grid, ImageListItem,  Paper } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import LocationOn from '@mui/icons-material/LocationOn';

import ProfileMenu from './UserProfileComponents/ProfileMenu';

interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}
  
  const ProfilePage2: FunctionComponent = () => {

    const { t, i18n } = useTranslation();

    const [value, setValue] = React.useState(0);
  
 
    const write=t('hire.write');
    const subscribe=t('hire.subscribe');

 
 
  return <>
     
    <Grid container spacing={2}>
      <Grid item xs={4} md={4}>
        
      </Grid>
      <Grid item xs={12} md={12}>
        <div style={{marginLeft:'auto',marginRight:'auto', width:'500px'}}>
          <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg" 
          sx={{marginTop:'90px',display:'inline-block',width:'147px',height:'147px'}} />
          <div style={{display:'inline-block'}}>
            <div style={{display:'block',marginBottom:'45px'}}>
              <Typography component='div' sx={{display:'block',marginLeft:'40px',fontSize:'30px'}}>
                {t('jocelyn calzoni')}
              </Typography>
            <LocationOn sx={{fintSize:'small',display:'inline-block',marginLeft:'38px',verticalAlign:'top'}}/>
            <Typography component='div' sx={{display:'inline-block'}}>
                {t('Ukraine')}
              </Typography>
            </div>
              <div style={{marginBottom:'70px',marginLeft:'40px'}}>
                <Button className='button3 button-border-dark button-m'
                  style={{ display:'inline-block',width: '130px',height:'42px',left:'100px',borderRadius: '30px',gap:'10px',padding:'10px, 22px, 10px, 22px'}}>
                  <Typography component='div' sx={{float:'center',padding:'1px 6px'}}>
                    {subscribe}
                  </Typography>
                </Button>
                <Link to={'/messagesPage'}>
                  <Button className='button4'
                    style={{ display:'inline-block',width: '130px',height:'42px',marginLeft:'10px',border: '1px solid #271846',borderRadius: '30px',gap:'10px',padding:'10px, 22px, 10px, 22px'}}>
                    <Typography component='div' sx={{float:'center',padding:'1px 6px'}}>
                      {write}
                    </Typography>
                  </Button>
                </Link>
              </div>
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
      <ProfileMenu translation={t}/>
      </Grid>
      <Grid item xs={4} md={4}>

      </Grid>
    </Grid>



  <Grid container spacing={{ xs: 2, md: 3 }} style={{marginLeft:'50px'}}>     
      
      {itemData.map((item) => (
        <Grid xs={12} sm={6} md={3}>
        <Paper elevation={0} style={{ width: 240, height: 238,borderRadius: '10px', marginTop: '60px',background:'#ECEAEF'}}>
          <ImageListItem key={item.img} >
            <img
              style={{ width: 280, height: 200, borderRadius: '10px',boxShadow: '0px 4px 8px 0px #27184666' }}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
              
          </ImageListItem>
        </Paper>
        </Grid>
        
      ))}
</Grid>


  </>
};
export default ProfilePage2;

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