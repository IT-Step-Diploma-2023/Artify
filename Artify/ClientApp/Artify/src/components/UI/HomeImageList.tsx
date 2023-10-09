import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { existedTags } from "../../assets/data/tags";
import { prices } from "../../assets/data/prices";
import { extensions } from "../../assets/data/extensions";
import { colors } from "../../assets/defaults/colors";
import '../../App.css';
import { useContext, useEffect, useState, useRef } from 'react';
import Context from "../../utils/Context";
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { getAuthToken } from '../../hooks/useAuthorization';
import ShotModal from './HomePageComponents/ShotModal';

// interface IShot  {
//   id: number,
//   createdDateTime: string,
//   userid: number,
//   price: number,
//   isPublic: boolean,
//   isDraft: boolean,
//   title: string
// }

export interface IShot {
  title: string,
  description: string,
  tags?: string[]
  isPublic: boolean,
  isDraft: boolean,
  price: number;
  gap: number,
  cover: string,

  thumbnailsPaths: string[],
  id: number,
  createdDateTime: string,
  userId: number,
  username: number,
  userFullName: string,
}

/* #region styles */
const container = {
  width: "100%",
  display: "flex",
}

const filterBlock = {
  width: "25%",
}
/* #endregion */

const url = 'api/ShotsApi/GetShots';
const token = getAuthToken() ?? '';

export default function HomeImageList() {

  const { t } = useTranslation();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const { filterActive } = useContext(Context);

  const [shots, setHots] = useState<IShot[]>([]);
  const [activeShot, setActiveShot] = useState<IShot>();

  const [shotModalOpen, setShotModalOpen] = useState(false);

  const existedPrices: string[] = [];
  prices.map((price) => {
    existedPrices.push(price.name);
  });

  const getData = async (): Promise<void> => {
    const response = await fetch(url, {
      headers: {
        "Authorization": "Bearer " + token,
      },
    });
    if (response.status !== 200) return;
    const responseJson: IShot[] = await response.json();
    setHots(responseJson);
  }

  useEffect(() => { void getData() }, []);

  const openShotModalHandler = (shot: IShot) => {
    setActiveShot(shot);
    setShotModalOpen(true)
  };
  const closeShotModalHandler = () => setShotModalOpen(false);

  return (<>
    <Box sx={container}>
      <Box
        sx={filterBlock}
        style={{ display: filterActive ? "block" : "none" }}>
        <Box sx={{ width: "100%", paddingRight: "40px" }}>
          {filterParamlist(t, t("homePage.params.category"), existedTags)}
          {filterParamlist(t, t("homePage.params.price"), existedPrices)}
          {filterParamlist(t, t("homePage.params.extension"), extensions)}
        </Box>
      </Box>
      <Grid container spacing={{ xs: 2, md: 5 }} sx={{ height: "fit-content" }}>

        {shots.map((shot) => (
          <Grid item xs={12} md={6} lg={3} key={shot.id} id={shots.indexOf(shot).toString()}
            onClick={() => openShotModalHandler(shot)}>
            <ImageListItem >
              <img
                style={{ width: '100%', aspectRatio: '1.4', borderRadius: 10, boxShadow: '0px 4px 8px 0px #27184666' }}
                src={"api/" + shot.cover}
                alt={shot.title}
                loading="lazy"
              />
              <Box>
                <Box sx={{ verticalAlign: 'center', marginRight: 'auto' }}>
                  <Avatar sx={{ float: 'left', marginTop: '0.4375rem', width: '1.25rem', height: '1.25rem' }}
                    alt={shot.userFullName}
                    src="images/default_profile.png"
                  />
                </Box>
                <Typography sx={{ float: 'left', fontSize: '0.875rem', fontWeight: 700, padding: '0.4375rem 0 0 0.4375rem' }}>{shot.userFullName}</Typography>
                <Typography sx={{ float: 'right', fontSize: '0.875rem', fontWeight: 400, color: '#9E9AA2', padding: '0.4375rem 0 0 0.4375rem' }}>12</Typography>
                <Box >
                  <Checkbox {...label} icon={<FavoriteBorder sx={{ color: '#9E9AA2', width: '1rem' }} />} checkedIcon={<Favorite sx={{ color: '#D65353', width: '1rem' }} />}
                    sx={{ width: '18px', height: '18px', float: 'right', marginTop: '0.4375rem' }} />
                </Box>
              </Box>
            </ImageListItem>
          </Grid>
        ))}

        {itemData.map((item) => (
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
                    sx={{ width: '18px', height: '18px', float: 'right', marginTop: '0.4375rem' }} />
                </Box>
              </Box>
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
      {ShotModal(
        t,
        shotModalOpen,
        closeShotModalHandler,
        activeShot
      )}
    </Box>
  </>
  );
}

function filterParamlist(
  t: TFunction<"translation", undefined>,
  title: string,
  filterParams: string[]
) {

  /* #region styles */
  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    margin: "24px 0 12px"
  }

  const checkboxStyle = {
    marginLeft: "-9px",
    color: '#271846',
    '&.Mui-checked': {
      color: '#271846',
    }
  }

  const paramNameStyle = {
    display: 'inline-block',
    marginTop: '8px',
    marginLeft: '0px',
    color: colors.darkViolet,
    fontWeight: '400'
  }
  /* #endregion */

  return <Box sx={{ marginBottom: "36px" }}>
    <Divider sx={{ color: colors.darkViolet, borderColor: colors.darkViolet, marginTop: "10px" }} />
    <Typography sx={titleStyle}>{title}</Typography>
    <div style={{ display: 'block' }}>
      <div style={{ display: 'inline-block' }}>
        <Checkbox disableRipple
          sx={checkboxStyle} />
      </div>
      <Typography component='div'
        sx={paramNameStyle}>
        {t("homePage.params.selectAll")}
      </Typography>
    </div>
    {filterParams.map((param) => (
      <div style={{ display: 'block' }} key={filterParams.indexOf(param)}>
        <div style={{ display: 'inline-block' }}>
          <Checkbox disableRipple
            sx={checkboxStyle} />
        </div>
        <Typography component='div'
          sx={paramNameStyle}>
          {param}
        </Typography>
      </div>
    ))}
  </Box>
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





