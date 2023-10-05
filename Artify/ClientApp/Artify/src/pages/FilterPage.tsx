import { FunctionComponent } from 'react';

import { Box } from '@mui/system';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Grid, Paper, ImageListItem, Avatar, Typography, Checkbox } from '@mui/material';
import HomeButtonFilter2 from '../components/UI/HomeButtonFilter2';
import {existedTags} from "../assets/data/tags";



const FilterPage: FunctionComponent = () => {

  return <>
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='left'
      sx={{ margin: { xs: '12px 0px 0', md: '48px 49px 0' } }}>
      <Box width='30%' sx={{ display: { xs: 'none', md: 'block' } }}>
        <HomeButtonFilter2 />
      </Box>
      <Box width='30%' sx={{ display: { xs: 'none', md: 'block' } }}>
      </Box>
    </Box>


    <Grid container spacing={2} marginTop={'39px'} display={'flex'}>
      <Grid item xs={3}>
        <div style={{ marginLeft: '53px', backgroundColor: '#271846', height: '1px', width: '240px' }}></div>

        <Typography sx={{ marginLeft: '63px', marginTop: '32px', fontSize: '20px', fontWeight: '700' }}>категорія</Typography>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', marginTop: '21px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            усі
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            ui ux
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            фото
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            анімація
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            лого
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: 400 }}>
            бренд
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            ілюстрації
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: 400 }}>
            веб дизайн
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' style={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', marginBottom: '32px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: 400 }}>
            дизайнери продукту
          </Typography>
        </div>

        <div style={{ marginLeft: '53px', marginBottom: '32px', backgroundColor: '#271846', height: '1px', width: '240px' }}></div>

        <Typography sx={{ marginLeft: '63px', marginBottom: '32px', fontSize: '20px', fontWeight: '700' }}>ціна</Typography>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            безкоштовно
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            2$-19$
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            20$-39$
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            40$-59$
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            60$-79$
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: 400 }}>
            80$-99$
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' style={{ display: 'inline-block', marginTop: '8px', marginBottom: '32px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: 400 }}>
            100$+
          </Typography>
        </div>

        <div style={{ marginLeft: '53px', marginBottom: '32px', backgroundColor: '#271846', height: '1px', width: '240px' }}></div>

        <Typography sx={{ marginLeft: '63px', marginBottom: '32px', fontSize: '20px', fontWeight: '700' }}>формат</Typography>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            pdf
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            jpg
          </Typography>
        </div>

        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            png
          </Typography>
        </div>
        <div style={{ display: 'block' }}>
          <div style={{ marginLeft: '53px', display: 'inline-block' }}>
            <Checkbox
              sx={{
                color: '#271846',
                '&.Mui-checked': {
                  color: '#271846',
                },
              }}
            />
          </div>
          <Typography component='div' sx={{ display: 'inline-block', marginTop: '8px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '15px', color: '#271846', fontWeight: '400' }}>
            gif
          </Typography>
        </div>
      </Grid>
      <Grid item xs={7.5}>
        <Grid container spacing={{ xs: 2, md: 3 }} style={{ margin: 'auto 70px' }}>
          {itemData.map((item) => (
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={0} style={{ width: 280, height: 238, borderRadius: '10px', marginBottom: '60px', background: '#ECEAEF' }}>
                <ImageListItem key={item.img} >

                  <img
                    style={{ width: 280, height: 200, borderRadius: '10px', boxShadow: '0px 4px 8px 0px #27184666' }}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div style={{ marginTop: '-183px', width: '78px', display: 'flex' }}>
                    <div style={{ marginRight: '140px' }}>
                      <svg width="78" height="42" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H74.2346C76.8365 0 78.2048 3.0857 76.458 5.01406L64.6948 18L76.458 30.9859C78.2048 32.9143 76.8365 36 74.2346 36H0V18V0Z" fill="#6A4BD9" />
                      </svg>
                    </div>
                    <div>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          '& > :not(style)': {
                            m: 1,
                            width: 20,
                            height: 20,
                          },
                        }}
                      >
                        <Paper elevation={0} sx={{ padding: '8px', borderRadius: '10px' }}>
                          <Checkbox icon={<FavoriteBorder style={{ color: '#9E9AA2' }} />} checkedIcon={<Favorite style={{ color: '#D65353' }} />}
                            style={{ width: '13.093928337097168px', height: '11.617537498474121px', margin: 'auto' }} />
                        </Paper>
                      </Box>
                    </div>
                  </div>


                  <Typography
                    title={item.price}
                    sx={{ verticalAlign: 'top', display: 'block-list', marginLeft: '27px', marginTop: '-41px', color: '#FFFFFF', fontFamily: 'Nunito', fontWeight: 500, fontSize: '15px' }}>{item.price}
                  </Typography>

                  <div>

                    <div style={{ verticalAlign: 'center', marginRight: 'auto' }}>
                      <Avatar style={{ float: 'left', marginTop: '159px' }}
                        alt="Remy Sharp"
                        src="images/default_profile.png"
                        sx={{ width: 20, height: 20 }}
                      />
                    </div>
                    <Typography style={{ verticalAlign: 'center', float: 'left', fontFamily: 'Nunito', fontSize: '14px', fontWeight: 700, lineHeight: '19.1px', color: '#271846', marginTop: '160px', marginLeft: '7px' }}>fvfsvsvvs dgbdgbb</Typography>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '14px', height: '14px', marginLeft: 'auto', float: 'right', textAlign: 'left', color: '#9E9AA2', marginTop: '165px', marginRight: '10px', border: '1px' }}>
                      <path d="M0.88884 0.666667V0.666667C1.12417 0.667066 1.35404 0.742472 1.5437 0.883044C1.73347 1.0237 1.87313 1.22245 1.93944 1.45045L1.93937 1.45021L1.45935 1.59017L1.93948 1.4506L0.88884 0.666667ZM0.88884 0.666667H0.887992M0.88884 0.666667H0.887992M0.887992 0.666667H0.595169C0.566725 0.666667 0.541418 0.655497 0.524306 0.638726C0.507535 0.622289 0.5 0.602157 0.5 0.583333C0.5 0.56451 0.507535 0.544378 0.524306 0.527941C0.541418 0.511169 0.566724 0.5 0.595169 0.5H0.887757C1.16934 0.500282 1.44212 0.590438 1.66489 0.755297C1.88756 0.920075 2.0477 1.15004 2.12324 1.40924L2.12331 1.40948L2.43399 2.47348L2.53906 2.83333M0.887992 0.666667L2.53906 2.83333M2.53906 2.83333H2.91395H2.53906ZM3.82716 7.92492L3.3476 8.06506L3.82724 7.92521L3.82716 7.92492ZM11.6975 8.04428L12.1605 8.23317L11.6975 8.04427L11.6975 8.04428ZM13.915 3.93283L13.4521 3.74395C13.4521 3.744 13.4521 3.74405 13.452 3.7441L13.915 3.93283ZM12.8101 2.83333H12.8104V2.33333L12.8101 2.83333ZM5.85172 13.4035C5.69501 13.4671 5.52671 13.5 5.35652 13.5C5.01238 13.5 4.6843 13.3659 4.44396 13.1304C4.20396 12.8951 4.07101 12.5782 4.07101 12.25C4.07101 11.9218 4.20396 11.6049 4.44396 11.3696C4.6843 11.1341 5.01238 11 5.35652 11C5.52671 11 5.69501 11.0329 5.85172 11.0965C6.00842 11.1601 6.15015 11.2531 6.26908 11.3696C6.38799 11.4862 6.48176 11.624 6.54555 11.7749C6.60933 11.9259 6.64203 12.0873 6.64203 12.25C6.64203 12.4127 6.60933 12.5741 6.54555 12.7251C6.48176 12.876 6.38799 13.0138 6.26908 13.1304C6.15015 13.2469 6.00842 13.3399 5.85172 13.4035ZM10.6131 13.4035C10.4564 13.4671 10.2881 13.5 10.1179 13.5C9.77373 13.5 9.44565 13.3659 9.20531 13.1304C8.96531 12.8951 8.83236 12.5782 8.83236 12.25C8.83236 11.9218 8.96531 11.6049 9.20531 11.3696C9.44565 11.1341 9.77373 11 10.1179 11C10.2881 11 10.4564 11.0329 10.6131 11.0965C10.7698 11.1601 10.9115 11.2531 11.0304 11.3696C11.1493 11.4862 11.2431 11.624 11.3069 11.7749C11.3707 11.9259 11.4034 12.0873 11.4034 12.25C11.4034 12.4127 11.3707 12.5741 11.3069 12.7251C11.2431 12.876 11.1493 13.0138 11.0304 13.1303C10.9115 13.2469 10.7698 13.3399 10.6131 13.4035Z" stroke="#9E9AA2" />
                    </svg>

                  </div>
                </ImageListItem>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </>
};
export default FilterPage;


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    price: '21$',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    price: '17$',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    price: '19$',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    price: '15$',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    price: '45$',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    price: '57$',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    price: '24$',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    price: '34$',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    price: '88$',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    price: '5$',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    price: '16$',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    price: '12$',
  },
];