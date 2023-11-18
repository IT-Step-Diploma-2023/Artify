/* eslint-disable @typescript-eslint/no-misused-promises */
import Typography from '@mui/material/Typography';
import { Avatar, Button, Checkbox, Grid, IconButton, ImageListItem, Input, MenuItem, Paper, Select } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Close, LocationOn } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from "react-router-dom";


const HirePage: FunctionComponent = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  const tags = t('hire.tags');
  const profession = t('hire.profession');
  const location = t('hire.location');
  const salary = t('hire.salary');
  const hr = t('hire.hr');
  const write = t('hire.write');
  const message = t('hire.message');
  const interested = t('hire.interested');
  const budget = t('hire.budget');
  const send = t('hire.send');

  //basicInfo
  //professional information
  //social networks



  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  // };


  return <>
    <Grid container spacing={2} marginTop={'76px'} display={'flex'}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <div >
          <Typography style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontFamily: 'Nunito' }} >{tags}</Typography>
          <Input className='input' style={{ width: '280px', height: '47px', display: 'block' }} required />
        </div>
        <div >
          <Typography style={{ display: 'block', marginBottom: '8px', marginTop: '25px', fontSize: '14px', fontFamily: 'Nunito' }} >{profession}</Typography>
          <Input className='input' style={{ width: '280px', height: '47px', display: 'block' }} required />
        </div>
        <div >
          <Typography style={{ display: 'block', marginBottom: '8px', marginTop: '25px', fontSize: '14px', fontFamily: 'Nunito' }} >{location}</Typography>
          <Input className='input' style={{ width: '280px', height: '47px', display: 'block' }} required />
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <Typography style={{ display: 'block', marginBottom: '8px', marginTop: '25px', fontSize: '14px', fontFamily: 'Nunito' }} >{salary}</Typography>
            <Select className='select'
              style={{ marginTop: '10px', width: '130px', height: '47px', display: 'block' }}
              sx={{ backgroundColor: 'white', border: '1px solid #CACACA', borderRadius: '30px', height: '44px' }}
              required
            >
            </Select>
          </div>
          <div>
            <Select className='select'
              style={{ marginTop: '55.25px', marginLeft: '20px', width: '130px', height: '47px', display: 'block' }}
              sx={{ backgroundColor: 'white', border: '1px solid #CACACA', borderRadius: '30px', height: '44px' }}
              required
            />
          </div>
        </div>
      </Grid>

      <Grid item xs={7} marginLeft={9}>
        <Paper className='paper' elevation={0}
          sx={{ display: 'block', backgroundColor: '#F5F5F5', padding: '10px, 30px, 10px, 30px', width: '920px', height: '200px', borderRadius: '24px', border: '1px solid #CACACA' }}>
          <Grid container spacing={2} display={'flex'}>
            <Grid item xs={0.7} sx={{ height: '137px' }}></Grid>
            <Grid item xs={1} sx={{ height: '137px' }}>
              <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '500px' }}>
                <Link to={'/accountPage2'}>
                  <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg"
                    sx={{ marginTop: '45px', display: 'flex', width: '78px', height: '78px', boxShadow: '0px 2px 4px 0px #2718464D' }} />
                </Link>
              </div>
            </Grid>
            <Grid item xs={1.8}>
              <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '500px' }}>
                <div style={{ display: 'inline-block' }}>
                  <div style={{ display: 'block' }}>
                    <Typography component='div' sx={{ display: 'block', marginLeft: '14px', fontSize: '16px', marginTop: '45px', fontFamily: 'Nunito', fontWeight: 'bold' }}>
                      {t('jocelyn calzoni')}
                    </Typography>
                    <Typography component='div' sx={{ display: 'inline-block', marginLeft: '14px', verticalAlign: 'top', fontFamily: 'Nunito', fontSize: '14px', color: '#9E9AA2' }}>
                      {t('3d artist')}
                    </Typography>
                    <LocationOn sx={{ width: '16px', height: '22px', display: 'inline-block', marginLeft: '6px', color: '#9E9AA2' }} />
                    <Typography component='div' sx={{ display: 'inline-block', verticalAlign: 'top', fontFamily: 'Nunito', fontSize: '14px', color: '#9E9AA2' }}>
                      {t('ukraine')}
                    </Typography>
                  </div>
                  <Typography component='div' sx={{ display: 'inline-block', marginTop: '5px', marginLeft: '14px', fontFamily: 'Nunito', fontSize: '16px', color: '#6A4BD9', fontWeight: 'bold' }}>
                    70$ / {hr}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={1} sx={{ height: '137px' }}></Grid>

            <Grid item xs={7.5} sx={{ height: '137px' }}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {itemData.map((item) => (
                  <Grid container xs={12} sm={6} md={4}>
                    <Paper elevation={0} style={{ width: 164, height: 120, borderRadius: '10px', marginTop: '80px', background: '#ECEAEF' }}>
                      <ImageListItem key={item.img} >
                        <img
                          style={{ width: 164, height: 120, borderRadius: '10px', boxShadow: '0px 4px 8px 0px #27184666' }}
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
            </Grid>

          </Grid>

          <Button className='button1'
            onClick={handleClickOpen}
            style={{ display: 'block', width: '210px', height: '39px', marginLeft: '35px', marginTop: '15px', borderRadius: '30px', gap: '10px', padding: 'auto auto', backgroundColor: '#271846', color: '#FFFFFF' }}>
            <Typography sx={{ float: 'center', padding: '1px 6px', fontFamily: 'Nunito', fontSize: '14px', textTransform: 'lowercase' }}>
              {write}
            </Typography>
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogActions>
              <IconButton onClick={handleClose} aria-label="close" sx={{ color: '#CACACA' }}>
                <Close />
              </IconButton>
            </DialogActions>
            <Grid container spacing={2} display={'flex'}>
              <Grid item xs={3.2}></Grid>
              <Grid item xs={1}>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '30px' }}>
                  <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg"
                    sx={{ display: 'flex', width: '78px', height: '78px', boxShadow: '0px 2px 4px 0px #2718464D' }} />
                </div>
              </Grid>
              <Grid item xs={5}>
                <div style={{ marginLeft: '35px', marginRight: 'auto', width: '220px' }}>
                  <div style={{ display: 'inline-block' }}>
                    <div style={{ display: 'block' }}>
                      <Typography component='div' sx={{ display: 'block', marginLeft: '25px', fontSize: '26px', marginTop: '9px', fontFamily: 'Nunito', fontWeight: 'bold' }}>
                        {t('jocelyn calzoni')}
                      </Typography>
                      <Typography component='div' sx={{ display: 'inline-block', marginLeft: '25px', verticalAlign: 'top', fontFamily: 'Nunito', fontSize: '14px', color: '#9E9AA2' }}>
                        {t('3d artist')}
                      </Typography>
                      <LocationOn sx={{ width: '16px', height: '22px', display: 'inline-block', marginLeft: '6px', color: '#9E9AA2' }} />
                      <Typography component='div' sx={{ display: 'inline-block', verticalAlign: 'top', fontFamily: 'Nunito', fontSize: '14px', color: '#9E9AA2' }}>
                        {t('ukraine')}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Input
              multiline
              rows={9}
              placeholder={message}
              sx={{ marginRight: 'auto', marginLeft: 'auto', padding: '15px 24px', width: '450px', marginTop: '30px', borderRadius: '30px', border: '1px solid #CACACA', backgroundColor: '#FFFFFF' }}
            />

            <div>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div style={{ marginLeft: '20px', marginTop: '6px', display: 'inline-block' }}>
                    <Checkbox
                      sx={{
                        color: '#271846',
                        '&.Mui-checked': {
                          color: '#6A4BD9',
                        },
                      }}
                    />
                  </div>
                  <Typography component='div' sx={{ display: 'inline-block', marginTop: '15px', marginLeft: '0px', fontFamily: 'Nunito', fontSize: '16px', color: '#271846' }}>
                    {interested}
                  </Typography>
                  <Typography component='div' sx={{ display: 'inline-block', marginTop: '15px', marginLeft: '7px', fontFamily: 'Nunito', fontSize: '16px', color: '#6A4BD9' }}>
                    {t('jocelyn calzoni')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <Typography style={{ display: 'block', marginLeft: '25px', marginBottom: '8px', fontSize: '16px', fontFamily: 'Nunito' }} >{budget}</Typography>
                      <Input className='input' style={{ width: '270px', height: '47px', display: 'block', marginLeft: '27px' }} required />
                    </div>
                    <div>
                      <Select className='select'
                        style={{ width: '130px', height: '46px', display: 'block', marginLeft: '35px', marginTop: '30.5px' }}
                        sx={{ backgroundColor: 'white', border: '1px solid #CACACA', borderRadius: '30px', height: '44px' }}
                        required
                      >
                        <MenuItem sx={{ fontSize: '16px', fontFamily: 'Nunito', color: '#6A4BD9' }}>USD</MenuItem>
                        <MenuItem sx={{ fontSize: '16px', fontFamily: 'Nunito', color: '#6A4BD9' }}>UAH</MenuItem>
                        <MenuItem sx={{ fontSize: '16px', fontFamily: 'Nunito', color: '#6A4BD9' }}>EURO</MenuItem>
                      </Select>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <Link to={'/messagesPage'}>
              <Button className='button1'
                style={{ display: 'block', width: '450px', height: '39px', margin: '20px auto 50px auto', borderRadius: '30px', gap: '10px', padding: 'auto auto', backgroundColor: '#271846', color: '#FFFFFF' }}>
                <Typography sx={{ float: 'center', padding: '1px 6px', fontFamily: 'Nunito', fontSize: '16px', textTransform: 'lowercase' }}>
                  {send}
                </Typography>
              </Button>
            </Link>
          </Dialog>
        </Paper>
      </Grid>
    </Grid>
  </>
};
export default HirePage;

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
];


