/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';

import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';



import { styled } from '@mui/system';


import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}
  
  const HelpCenterPage: FunctionComponent = () => {

    const { t } = useTranslation(); 

    const helpCenter=t('help.helpCenter');
    const addWork=t('help.addWork');
    const getJob=t('help.getJob');
    const hireDesigner=t('help.hireDesigner');
    const createAccount=t('help.createAccount');
    const aboutUs=t('help.aboutUs');


    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: '21px',
      border: '1px solid #271846',
      // backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        // backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    }));
  
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
  
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        // transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));
  
 
  return <>
  <Typography sx={{marginTop:'100px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'70px', color:'#271846',fontWeight:'700', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
    {helpCenter}
  </Typography>

  <Grid container spacing={2} marginTop={'38.22px'} display={'flex'}>
  <Grid item xs={4.5}></Grid>
  <Grid item xs={3}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t('headerComponent.search')}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>   
          </Grid>
  </Grid> 

  <Grid container spacing={2} marginTop={'38.22px'} display={'flex'} height={'250px'} >
    <Grid item xs={5.2}></Grid>
    <Grid item xs={3} sx={{height:'250px'}}>
      <Link className='link1' to={'/how-add-work'}>
        <Typography sx={{display:'flex',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'84px', fontFamily:'Nunito'}}>
        <IconButton className={'iconButtonBack'} aria-label="back">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999999 21L11 11L1 1" stroke="#271846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>     
          <Typography sx={{marginLeft:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'500', fontFamily:'Nunito'}}>
            {addWork}
            </Typography>
        </Typography>
      </Link>

      <Link className='link1' to={'/how-buy-work'}>
        <Typography sx={{marginTop:'20px',display:'flex',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'84px', fontFamily:'Nunito'}}>
        <IconButton className={'iconButtonBack'} aria-label="back">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999999 21L11 11L1 1" stroke="#271846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>     
          <Typography sx={{marginLeft:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'500', fontFamily:'Nunito'}}>
            {getJob}
          </Typography>
        </Typography>
      </Link>

      <Link className='link1' to={'/how-hire-designer'}>
        <Typography sx={{marginTop:'20px',display:'flex',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'84px', fontFamily:'Nunito'}}>
        <IconButton className={'iconButtonBack'} aria-label="back">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999999 21L11 11L1 1" stroke="#271846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>     
          <Typography sx={{marginLeft:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'500', fontFamily:'Nunito'}}>
            {hireDesigner}
          </Typography>
        </Typography>
      </Link>

      <Link className='link1' to={'/how-create-account'}>
        <Typography sx={{marginTop:'20px',display:'flex',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'84px', fontFamily:'Nunito'}}>
        <IconButton className={'iconButtonBack'} aria-label="back">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999999 21L11 11L1 1" stroke="#271846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>     
          <Typography sx={{marginLeft:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'500', fontFamily:'Nunito'}}>
            {createAccount}
          </Typography>
        </Typography>
      </Link>
<p></p>
      <Link className='link1' to={'/AboutUsPage'}>
        <Typography sx={{marginTop:'20px',display:'flex',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'84px', fontFamily:'Nunito'}}>
        <IconButton className={'iconButtonBack'} aria-label="back">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999999 21L11 11L1 1" stroke="#271846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>     
          <Typography sx={{marginLeft:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'500', fontFamily:'Nunito'}}>
            {aboutUs}
          </Typography>
        </Typography>
      </Link>

    </Grid>
  </Grid> 
   
  </>
};
export default HelpCenterPage;







