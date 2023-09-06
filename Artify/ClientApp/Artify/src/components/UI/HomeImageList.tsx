import ImageListItem from '@mui/material/ImageListItem';

import { Avatar, Grid, Paper, Typography } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import '../../App.css';




export default function StandardImageList() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (<>
    <Grid container spacing={{ xs: 2, md: 3 }} style={{ margin: 'auto 70px' }}>      
      {itemData.map((item) => (
        <Grid xs={12} sm={6} md={3}>
              <Paper elevation={0} style={{ width: 240, height: 238,borderRadius: '10px', marginTop: '60px',background:'#ECEAEF'}}>
                <ImageListItem key={item.img} >
                  <img
                    style={{ width: 240, height: 200, borderRadius: '10px',boxShadow: '0px 4px 8px 0px #27184666' }}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div>
                    <div style={{ verticalAlign:'center',marginRight: 'auto'}}>
                      <Avatar style={{float:'left',marginTop: '7px'}}
                        alt="Remy Sharp"
                        src="images/default_profile.png"
                        sx={{ width: 20, height: 20}}
                      />
                      </div>
                      <Typography style={{verticalAlign:'center',float:'left',fontFamily: 'Nunito',fontSize: '14px',fontWeight: 700,lineHeight: '19.1px',color:'#271846',marginTop: '7px',marginLeft:'7px'}}>fvfsvsvvs dgbdgbb</Typography>
                      <Typography style={{ width: '17px', height: '19px',marginLeft: 'auto',float:'right',fontFamily: 'Nunito',fontSize: '14px',fontWeight: 400,lineHeight: '19px',letterSpacing: '0em',textAlign: 'left',color:'#9E9AA2',marginTop: '7px'}}>12</Typography>
                      <div style={{marginLeft: 'auto'}}>
                        <Checkbox {...label} icon={<FavoriteBorder style={{color:'#9E9AA2'}} />} checkedIcon={<Favorite style={{color:'#D65353'}} />} 
                        style={{ width:'13.093928337097168px',height:'11.617537498474121px',float:'right',marginTop: '7px',marginLeft:'2.453125px',marginRight:'5px'}}/> 
                      </div>              
                    </div>              
                </ImageListItem>
              </Paper>
        </Grid>
            ))}
      </Grid>
</>
  );
  
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];





