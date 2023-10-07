/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Avatar, Grid, IconButton, ImageListItem, Paper } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';


const CollectionItemPage: FunctionComponent = () => {

  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  return <>
    <Grid container spacing={2} sx={{ marginTop: '74px' }}>
      <Grid item xs={1} md={1} sx={{ display: 'flex', justifyContent: 'right' }}>
        <Link to={'/saved'}>
          <IconButton className={'iconButtonBack'} aria-label="back">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 14L18 24L28 34" stroke="#271846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </IconButton>
        </Link>
      </Grid>
      <Grid item xs={8} md={8}>
        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '32px', color: '#271846', fontWeight: '700', lineHeight: '43.65px', font: 'Nunito' }}>
          колекція 1
        </Typography>
      </Grid>
      <Grid item xs={1} md={1}>
        <IconButton className='iconButtonEditCollection' aria-label="edit" sx={{ color: '#9E9AA2', float: 'right' }}>
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.03583 14.9966H2.5V11.4616L12.0292 1.93247C12.1854 1.77624 12.3974 1.68848 12.6183 1.68848C12.8393 1.68848 13.0512 1.77624 13.2075 1.93247L15.565 4.28913C15.7212 4.4454 15.809 4.65733 15.809 4.8783C15.809 5.09927 15.7212 5.31119 15.565 5.46746L6.03583 14.9966ZM2.5 16.6633H17.5V18.33H2.5V16.6633Z" fill="#6A4BD9" />
          </svg>
        </IconButton>
      </Grid>
      <Grid item xs={1} md={1}>
        <IconButton aria-label="delete" sx={{ backgroundColor: '#CACACA', color: '#9E9AA2', float: 'left' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#9E9AA2" />
          </svg>
        </IconButton>
      </Grid>
    </Grid>


    <Grid container spacing={2} style={{ marginTop: '74px', height: '15px' }}>
      <Grid item xs={1} md={1}>
        <div style={{ display: 'flex' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9686 9.2373C16.9686 9.91472 16.3957 10.4638 15.6889 10.4638C14.9831 10.4638 14.4102 9.9138 14.4102 9.2373C14.4102 8.55989 14.9831 8.01172 15.6889 8.01172C16.3947 8.01172 16.9686 8.55989 16.9686 9.2373Z" fill="#9E9AA2" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5327 5.07096C15.561 4.94629 14.3198 4.94629 12.7533 4.94629H9.24609C7.67859 4.94629 6.43742 4.94629 5.46667 5.07096C4.46751 5.20021 3.65717 5.47154 3.01917 6.08296C2.38117 6.69529 2.09792 7.47079 1.96317 8.42962C1.83301 9.35912 1.83301 10.549 1.83301 12.0514V12.143C1.83301 13.6455 1.83301 14.8353 1.96317 15.7666C2.09792 16.7245 2.38117 17.5 3.01917 18.1115C3.65717 18.7238 4.46751 18.9951 5.46667 19.1235C6.43834 19.25 7.67951 19.25 9.24609 19.25H12.7533C14.3208 19.25 15.5619 19.25 16.5327 19.1244C17.5318 18.996 18.3422 18.7247 18.9802 18.1124C19.6182 17.501 19.9014 16.7255 20.0362 15.7675C20.1663 14.8362 20.1663 13.6464 20.1663 12.144V12.0523C20.1663 10.549 20.1663 9.36004 20.0362 8.42871C19.9014 7.47079 19.6182 6.69529 18.9802 6.08296C18.3422 5.47154 17.5318 5.20021 16.5327 5.07096ZM5.63717 6.28646C4.77917 6.39646 4.28509 6.60454 3.92301 6.95012C3.56276 7.29662 3.34642 7.76962 3.23092 8.59187C3.13926 9.25187 3.11817 10.0769 3.11359 11.1549L3.54442 10.7928C4.57567 9.92837 6.12851 9.97787 7.09651 10.9055L10.754 14.4118C10.9353 14.5827 11.1692 14.687 11.4175 14.7077C11.6658 14.7283 11.9137 14.6641 12.1208 14.5255L12.3756 14.354C12.9734 13.9543 13.6852 13.7604 14.4032 13.8017C15.1211 13.8431 15.806 14.1174 16.3539 14.5832L18.5603 16.488C18.6502 16.246 18.7189 15.9564 18.7684 15.6035C18.8858 14.7638 18.8876 13.6565 18.8876 12.0981C18.8876 10.5398 18.8858 9.43246 18.7684 8.59187C18.6529 7.76962 18.4366 7.29662 18.0754 6.95104C17.7152 6.60454 17.2202 6.39737 16.3622 6.28646C15.4858 6.17371 14.3308 6.17187 12.7047 6.17187H9.29467C7.66851 6.17187 6.51351 6.17371 5.63717 6.28646Z" fill="#9E9AA2" />
            <path d="M15.6618 2.39234C14.8735 2.2915 13.8707 2.2915 12.6194 2.2915H9.78692C8.53659 2.2915 7.53284 2.2915 6.7445 2.39234C5.92867 2.49775 5.24851 2.7205 4.70859 3.23567C4.41061 3.52169 4.18338 3.8732 4.04492 4.26234C4.50692 4.0515 5.02942 3.92684 5.61609 3.84984C6.60975 3.7215 7.88025 3.7215 9.48442 3.7215H13.0723C14.6764 3.7215 15.946 3.7215 16.9406 3.84984C17.4521 3.91675 17.9159 4.02034 18.333 4.18534C18.1934 3.82655 17.9769 3.50271 17.6987 3.23659C17.1588 2.7205 16.4786 2.49775 15.6618 2.39325V2.39234Z" fill="#9E9AA2" />
          </svg>
          <Typography style={{ width: '17px', height: '22px', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '19px', letterSpacing: '0em', textAlign: 'left', color: '#9E9AA2', marginTop: '2px', marginLeft: '4px' }}>12</Typography>
        </div>
      </Grid>
    </Grid>

    <Grid container spacing={{ xs: 2, md: 3 }} style={{ marginLeft: '54px' }}>
      {itemData.map((item) => (
        <Grid xs={12} sm={6} md={3}>
          <Paper elevation={0} style={{ width: 240, height: 238, borderRadius: '10px', marginTop: '60px', background: '#ECEAEF' }}>
            <ImageListItem key={item.img} >
              <img
                style={{ width: 240, height: 200, borderRadius: '10px', boxShadow: '0px 4px 8px 0px #27184666' }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <div>
                <div style={{ verticalAlign: 'center', marginRight: 'auto' }}>
                  <Avatar style={{ float: 'left', marginTop: '7px' }}
                    alt="Remy Sharp"
                    src="images/default_profile.png"
                    sx={{ width: 20, height: 20 }}
                  />
                </div>
                <Typography style={{ verticalAlign: 'center', float: 'left', fontFamily: 'Nunito', fontSize: '14px', fontWeight: 700, lineHeight: '19.1px', color: '#271846', marginTop: '7px', marginLeft: '7px' }}>fvfsvsvvs dgbdgbb</Typography>
              </div>
            </ImageListItem>
          </Paper>
        </Grid>
      ))}
    </Grid>


  </>
};
export default CollectionItemPage;

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





