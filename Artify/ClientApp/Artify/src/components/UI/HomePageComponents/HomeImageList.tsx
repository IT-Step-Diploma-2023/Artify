import { Box, Grid } from '@mui/material';
import { existedTags } from "../../../assets/data/tags";
import { prices } from "../../../assets/data/prices";
import { extensions } from "../../../assets/data/extensions";
import { useContext, useEffect, useState } from 'react';
import Context from "../../../utils/Context";
import { useTranslation } from 'react-i18next';
// import { TFunction } from 'i18next';
// import { getAuthToken } from '../../../hooks/useAuthorization';
import ShotModal from './ShotModal';
import { IShot } from '../../../assets/interfaces/shotsInterfaces';
import FilterParamlist from './FilterParamList';
import { getShotsData } from '../../../hooks/useShots';
import ShotThumbnail from './Shots';
import useTargetUser from '../../../hooks/useTargetUser';
import useCurrentUser from '../../../hooks/useCurrentUser';

/* #region styles */
const container = {
  width: "100%",
  display: "flex",
}

const filterBlock = {
  width: "25%",
}
/* #endregion */

export default function HomeImageList() {

  const { t } = useTranslation();

  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const { filterActive } = useContext(Context);

  const [shots, setShots] = useState<IShot[]>([]);
  const [activeShot, setActiveShot] = useState<IShot>();

  const [shotModalOpen, setShotModalOpen] = useState(false);

  const { loadData } = useCurrentUser();

  const isUserLoggedIn = loadData() !== null;

  const existedPrices: string[] = [];
  prices.map((price) => {
    existedPrices.push(price.name);
  });

  useEffect(() => { void getShotsData(setShots) }, [shots]);

  const { setTargetUserId } = useTargetUser();

  const openShotModalHandler = (shot: IShot) => {
    setActiveShot(shot);
    setShotModalOpen(true);
    setTargetUserId((shot.userId));
  };

  const closeShotModalHandler = () => {
    setShotModalOpen(false);
  };

  return (<>
    <Box sx={container}>
      <Box
        sx={filterBlock}
        style={{ display: filterActive ? "block" : "none" }}>
        <Box sx={{ width: "100%", paddingRight: "40px" }}>
          <FilterParamlist
            t={t}
            title={t("homePage.params.category")}
            filterParams={existedTags} />
          <FilterParamlist
            t={t}
            title={t("homePage.params.price")}
            filterParams={existedPrices} />
          <FilterParamlist
            t={t}
            title={t("homePage.params.extension")}
            filterParams={extensions} />
        </Box>
      </Box>
      <Grid container spacing={{ xs: 2, md: 5 }} sx={{ height: "fit-content" }}>
        {shots.map((shot) => (
          <Grid item xs={12} md={6} lg={3} key={shot.id.toString()}>
            <ShotThumbnail
              shot={shot}
              openModalHandler={openShotModalHandler}
              isUserLoggedIn={isUserLoggedIn} />
          </Grid>
        ))}

        {/* {itemData.map((item) => (
          <Grid item xs={12} md={6} lg={3} key={item.img} id={itemData.indexOf(item).toString()} >
            <ImageListItem >
              <img
                style={{ width: '100%', aspectRatio: '1.4', borderRadius: 10, boxShadow: '0px 4px 8px 0px #27184666' }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Box>
                <Box sx={{ verticalAlign: 'center', marginRight: 'auto' }}>
                  <Avatar sx={{ float: 'left', marginTop: '0.4375rem', width: '1.25rem', height: '1.25rem' }}
                    alt="Remy Sharp"
                    src="images/default_profile.png"
                  />
                </Box>
                <Typography sx={{ float: 'left', fontSize: '0.875rem', fontWeight: 700, padding: '0.4375rem 0 0 0.4375rem' }}>fvfsvsvvs dgbdgbb</Typography>
                <Typography sx={{ float: 'right', fontSize: '0.875rem', fontWeight: 400, color: '#9E9AA2', padding: '0.4375rem 0 0 0.4375rem' }}>12</Typography>
                <Box >
                  <Checkbox {...label} icon={<FavoriteBorder sx={{ color: '#9E9AA2', width: '1rem' }} />} checkedIcon={<Favorite sx={{ color: '#D65353', width: '1rem' }} />}
                    sx={{ width: '18px', height: '18px', float: 'right', marginTop: '0.4375rem' }} 
                    onChange={e=>{console.log(e.target.checked)}}/>
                </Box>
              </Box>
            </ImageListItem>
          </Grid>
        ))} */}
      </Grid>
      {activeShot && <ShotModal
        t={t}
        openModal={shotModalOpen}
        closeModalHandler={closeShotModalHandler}
        openModalHandler={openShotModalHandler}
        shotId={activeShot.id}
        shots={shots}
        isUserLoggedIn={isUserLoggedIn}
      />}
    </Box>
  </>
  );
}

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];





