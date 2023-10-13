/* eslint-disable @typescript-eslint/no-misused-promises */
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton, ImageListItem } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from '../../components/UI/UserProfileComponents/ProfileMenu';
import ProfileTopComponent from '../../components/UI/UserProfileComponents/ProfileTopComponent';
import PlusIcon from '../../components/UI/PlusIcon';
import { useNavigate } from 'react-router';


/* #region styles */
const portfolioShot = {
  width: '100%',
  aspectRatio: '1.4',
  borderRadius: 10,
  boxShadow: '0px 4px 8px 0px #27184666'
}

const addPhotoBtn = {
  border: '2px dashed #271846',
  color: '#271846',
  borderRadius: '10px',
  width: '100%',
  aspectRatio: '1.4',
  display: 'flex',
  flexDirection: 'column'
}
/* #endregion */

const PortfolioPage: FunctionComponent = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const clickHandle = () => {

    console.log('click');
    navigate('/share');
  }

  const downloadWork = t('accountPage2.downloadWork');

  return <>
    <ProfileTopComponent />
    <ProfileMenu translation={t} />
    <Grid container spacing={{ xs: 2, md: 5 }} sx={{ marginBottom: '15rem' }}>
      {itemData.map((item) => (
        <Grid item xs={12} md={6} lg={3} key={item.img}>
          <ImageListItem >
            <img
              style={portfolioShot}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        </Grid>
      ))}
      <Grid item xs={12} md={6} lg={3}>
        <IconButton aria-label="addaphoto" className={'link2'}
          disableRipple
          sx={addPhotoBtn}
          onClick={clickHandle}>
          <Typography sx={{ marginBottom: '0.75rem' }} >{downloadWork}</Typography>
          <Box marginTop={'0.75rem'}>
            <PlusIcon size={'44px'} color={'inherit'} />
          </Box>
        </IconButton>
      </Grid>
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