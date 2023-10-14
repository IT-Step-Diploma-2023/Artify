/* eslint-disable @typescript-eslint/no-misused-promises */
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton, ImageListItem } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from '../../components/UI/UserProfileComponents/ProfileMenu';
import ProfileTopComponent from '../../components/UI/UserProfileComponents/ProfileTopComponent';
import PlusIcon from '../../components/UI/PlusIcon';
import { useNavigate } from 'react-router';
import { IShot } from '../../assets/interfaces/shotsInterfaces';
import { getPortfolioShotsData } from '../../hooks/useShots';
import { loggedInUserId } from '../../hooks/useAuthorization';
import ShotModal from '../../components/UI/HomePageComponents/ShotModal';
import useStorage from '../../hooks/useStorage';


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
  const { getTargetUserId } = useStorage()

  const [shots, setShots] = useState<IShot[]>([]);
  const loggedUserId = loggedInUserId();
  const targetUserId = getTargetUserId();

  console.log(targetUserId);

  const getId = () => {
    if (targetUserId !== -1) return targetUserId;
    if (loggedUserId !== -1) return loggedUserId;
    return 0;
  };

  useEffect(() => { void getPortfolioShotsData(getId(), setShots) }, []);

  const [activeShot, setActiveShot] = useState<IShot>();
  const [shotModalOpen, setShotModalOpen] = useState(false);

  const openShotModalHandler = (shot: IShot) => {
    setActiveShot(shot);
    setShotModalOpen(true);
  };

  const closeShotModalHandler = () => {
    setShotModalOpen(false);
  };

  const clickHandle = () => {
    navigate('/share');
  }

  const downloadWork = t('accountPage2.downloadWork');

  return <>
    <ProfileTopComponent />
    <ProfileMenu translation={t} />
    <Grid container spacing={{ xs: 2, md: 5 }} sx={{ marginBottom: '15rem' }}>
      {shots.map((shot) => (
        <Grid item xs={12} md={6} lg={3} key={shot.id}>
          <ImageListItem >
            <img
              style={portfolioShot}
              src={shot.cover}
              alt={shot.title}
              loading="lazy"
              onClick={() => openShotModalHandler(shot)} />
          </ImageListItem>
        </Grid>
      ))}
      <Grid item xs={12} md={6} lg={3}>
        <IconButton aria-label="addaphoto" className={'link2'}
          disableRipple
          sx={addPhotoBtn}
          onClick={() => clickHandle()}>
          <Typography sx={{ marginBottom: '0.75rem' }} >{downloadWork}</Typography>
          <Box marginTop={'0.75rem'}>
            <PlusIcon size={'44px'} color={'inherit'} />
          </Box>
        </IconButton>
      </Grid>
    </Grid>
    {activeShot && <ShotModal
      t={t}
      openModal={shotModalOpen}
      closeModalHandler={closeShotModalHandler}
      openModalHandler={openShotModalHandler}
      shotId={activeShot.id}
      shots={shots}
    />}
  </>
};
export default PortfolioPage;

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   }
// ];