



/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';

import {  Grid,  ImageListItem,  ImageListItemBar,  Paper, Stack} from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import AboutUsMenu from '../components/UI/AboutUsMenu';


interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}
  
  const AboutUsPage: FunctionComponent = () => {   
 
    const { t } = useTranslation();  

    const text1=t('aboutUsPage.text1');
    const text2=t('aboutUsPage.text2');
    const text3=t('aboutUsPage.text3');
    const text4=t('aboutUsPage.text4');
    const text5=t('aboutUsPage.text5');
    const text6=t('aboutUsPage.text6');
    const text7=t('aboutUsPage.text7');
    const text8=t('aboutUsPage.text8');
    const text9=t('aboutUsPage.text9');
    const text10=t('aboutUsPage.text10');
    const text11=t('aboutUsPage.text11');
    const text12=t('aboutUsPage.text12');
    const text13=t('aboutUsPage.text13');
    const text14=t('aboutUsPage.text14');
    const text15=t('aboutUsPage.text15');
    const text16=t('aboutUsPage.text16');





    const text17=t('howBuyWorkPage.text6');
    

  return <>
  <AboutUsMenu/>

  <Typography sx={{marginTop:'100px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'70px', color:'#271846',fontWeight:'400', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text1}
  </Typography>
  <Typography sx={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'25px', color:'#271846',fontWeight:'400', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text2}
  </Typography>


<img src="../images/team.jpg"
style={{background: 'url(pexels-huy-chien-tran-1756665.jpg)',
filter:'drop-shadow(0px 4px 8px rgba(39, 24, 70, 0.4))',
width:'1240px',height:'626px',marginTop:'100px',display:'block',marginLeft:'auto',marginRight:'auto',borderRadius: '10px'}}>
</img>

<Typography sx={{marginTop:'100px',marginLeft:'100px',fontSize:'70px', color:'#271846',fontWeight:'500', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text3}
  </Typography>

  <Grid container spacing={2} display={'flex'}>
    <Grid item xs={8.65} style={{display:'inline-block'}}>
    <Typography sx={{marginLeft:'100px',marginTop:'20px',width:'920px',height:'176px',border:'1px solid #271846',borderRadius:'24px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      <Typography sx={{width:'892px',height:'54px',display:'flex',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text4}
      </Typography>
    </Typography>
    </Grid>
  </Grid>

  <Grid container spacing={2} display={'flex'}>
  <Grid item xs={2} style={{display:'inline-block',marginLeft:'100px',marginTop:'174px'}}>
    <Typography sx={{display:'inline-block',color:'#B5A0FF',textAlign: 'center',fontFamily: 'Somatic',fontSize: '20px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        my      
    </Typography>
    <Typography sx={{display:'inline-block',color: '#6A4BD9',textAlign: 'center',fontFamily: 'Somatic',fontSize: '20px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        designo
    </Typography>  
  </Grid>

  <Grid item xs={2} style={{display:'inline-block',marginLeft:'125px',marginTop:'148px'}}>
    <Typography sx={{display:'inline-block',color:'#B5A0FF',textAlign: 'center',fontFamily: 'Somatic',fontSize: '50px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        my      
    </Typography>
    <Typography sx={{display:'inline-block',color: '#6A4BD9',textAlign: 'center',fontFamily: 'Somatic',fontSize: '50px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        designo
    </Typography>  
  </Grid>

  <Grid item xs={3} style={{display:'inline-block',marginLeft:'250px',marginTop:'128px'}}>
    <Typography sx={{display:'inline-block',color:'#B5A0FF',textAlign: 'center',fontFamily: 'Somatic',fontSize: '70px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        my      
    </Typography>
    <Typography sx={{display:'inline-block',color: '#6A4BD9',textAlign: 'center',fontFamily: 'Somatic',fontSize: '70px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        designo
    </Typography>  
  </Grid>

  <Typography sx={{marginTop:'200px',marginLeft:'100px',fontSize:'70px', color:'#271846',fontWeight:'500', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text5}
  </Typography>

  <Grid container spacing={2} display={'flex'}>
    <Grid item xs={8.5} style={{display:'inline-block'}}>
    <Typography sx={{marginLeft:'100px',marginTop:'20px',width:'920px',height:'176px',border:'1px solid #271846',borderRadius:'24px',display:'block',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      <Typography sx={{display:'block',marginLeft:'28px',marginTop:'24px',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text6}
      </Typography>
      <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text7}
      </Typography>
      <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text8}
      </Typography>
      <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text9}
      </Typography>
    </Typography>
    </Grid>

    <Grid item xs={3} style={{display:'inline-block',marginTop:'-90px'}}>
      <img src="/images/Rectangle_black.png"></img>
      <Paper elevation={0} sx={{display:'inline-block',width:'150px',height:'140px',marginLeft:'-120px',marginBottom:'-25px',borderRadius:'6px',border:'2px dashed #6A4BD9', backgroundColor:'#ECEAEF',position:'relative'}} />
    
      <ImageListItem style={{display:'inline-block',width:'150px',height:'140px', borderRadius:'6px',position:'relative',marginLeft:'-57px',marginTop:'54px'}}>
        <img src="/images/Rectangle_blue.png" style={{position:'relative',marginLeft:'-57px',marginTop:'54px'}}/>
        <ImageListItemBar style={{width:'150px',height:'35px',marginLeft:'-57px', borderRadius:'0px 0px 6px 6px',marginBottom:'-54px'}}/>
      </ImageListItem>
    </Grid>
  </Grid>
</Grid>

  <Typography sx={{marginTop:'200px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'70px', color:'#271846',fontWeight:'500', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text10}
  </Typography>


  <Grid container spacing={2} display={'flex'} sx={{marginTop:'100px'}}>
  <Grid item xs={2} style={{display:'inline-block'}}></Grid>

    <Grid item xs={2.9} style={{display:'inline-block'}}>
      <Stack>
        <Paper elevation={0} sx={{display:'inline-block',width:'264px',height:'252px', backgroundColor:'#ECEAEF'}}>
          <Link to={'/about-us-photographs'} style={{textDecoration:'none'}}>
            <Typography className='link3' sx={{width:'264px',height:'252px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'40px', color:'#271846',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans'}}>
              {text11}
            </Typography>
          </Link>
        </Paper>
        <Paper elevation={0} sx={{display:'inline-block',width:'264px',height:'252px',marginTop:'100px', backgroundColor:'#ECEAEF'}}>
          <Link to={'/about-us-brands'} style={{textDecoration:'none'}}>
            <Typography className='link3' sx={{width:'264px',height:'252px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'40px', color:'#271846',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans'}}>
              {text12}
            </Typography>
          </Link>
        </Paper>
       
      </Stack>
    </Grid>
    <Grid item xs={2.9} style={{display:'inline-block'}}>
      <Stack>
        <Paper elevation={0} sx={{display:'inline-block',width:'264px',height:'252px', backgroundColor:'#ECEAEF'}}>
          <Link to={'/about-us-uiux'} style={{textDecoration:'none'}}>
            <Typography className='link3' sx={{width:'264px',height:'252px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'40px', color:'#271846',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans'}}>
              ui-ux 
              <br></br>
              {text13}
            </Typography>
          </Link>
        </Paper>
        <Paper elevation={0} sx={{display:'inline-block',width:'264px',height:'252px',marginTop:'100px', backgroundColor:'#ECEAEF'}}>
          <Link to={'/about-us-designers'} style={{textDecoration:'none'}}>
            <Typography className='link3' sx={{width:'264px',height:'252px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'40px', color:'#271846',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans'}}>
              {text13}
              <br></br>
              {text14}
            </Typography>
          </Link>
        </Paper>
      </Stack>
    </Grid>
    <Grid item xs={2.9} style={{display:'inline-block'}}>
      <Stack>
        <Paper elevation={0} sx={{display:'inline-block',width:'264px',height:'252px', backgroundColor:'#ECEAEF'}}>
          <Link to={'/about-us-illustrators'} style={{textDecoration:'none'}}>
            <Typography className='link3' sx={{width:'264px',height:'252px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'35px', color:'#271846',fontWeight:'500', lineHeight:'42px', fontFamily:'Sofia Sans'}}>
            {text15}
            </Typography>
          </Link>
        </Paper>
        <Paper elevation={0} sx={{display:'inline-block',width:'264px',height:'252px',marginTop:'100px', backgroundColor:'#ECEAEF'}}>
          <Link to={'/about-us-web'} style={{textDecoration:'none'}}>
            <Typography className='link3' sx={{width:'264px',height:'252px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'35px', color:'#271846',fontWeight:'500', lineHeight:'42px', fontFamily:'Sofia Sans'}}>
            {text16}
            </Typography>
          </Link>
        </Paper>
      </Stack>
    </Grid>
  </Grid>  

        <Link to={'/help-center'}>
              <Button className='button1'
                style={{ width: '121.23px',height:'46.18px',margin:'100px auto 50px auto',borderRadius: '30px',gap:'10px',backgroundColor:'#271846',color:'#FFFFFF',display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{fontFamily:'Nunito',fontSize:'17.32px', textTransform:'lowercase'}}>
                  {text17}
                </Typography>
              </Button>
        </Link>

  </>
};
export default AboutUsPage;


