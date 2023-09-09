/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, IconButton, ImageListItem, Paper } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import ProfileMenu from '../../components/UI/UserProfileComponents/ProfileMenu';
import ProfileMainImage from '../../components/UI/UserProfileComponents/ProfileMainImage';


const PortfolioPage: FunctionComponent = () => {

  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const downloadWork = t('accountPage2.downloadWork');

  return <>
    <ProfileMainImage /> ДЛЯ ПОРІВНЯННЯ
    <ProfileMenu translation={t}></ProfileMenu>
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