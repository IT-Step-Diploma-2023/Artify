/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';

import {  Grid,  ImageListItem,  ImageListItemBar,  Paper, Stack} from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import AboutUsMenu from '../../components/UI/AboutUsMenu';


interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}
  
  const MediaKitPage: FunctionComponent = () => {   
 
    const { t } = useTranslation();  
    
    const text1=t('mediaKit.text1');
    const text2=t('mediaKit.text2');
    const text3=t('mediaKit.text3');
    const text4=t('mediaKit.text4');
    const text5=t('mediaKit.text5');
    const text6=t('mediaKit.text6');
    const text7=t('mediaKit.text7');
    const text8=t('mediaKit.text8');
    const text9=t('mediaKit.text9');
    const text10=t('mediaKit.text10');
    const text11=t('mediaKit.text11');
    const text12=t('mediaKit.text12');
    const text13=t('mediaKit.text13');
    const text14=t('mediaKit.text14');
    const text15=t('mediaKit.text15');
    const text16=t('mediaKit.text16');
    const text17=t('mediaKit.text17');
    const text18=t('mediaKit.text18');
    const text19=t('mediaKit.text19');

  return <>
  <AboutUsMenu/>

  <Typography sx={{marginTop:'100px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'70px', color:'#271846',fontWeight:'400', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text1}
  </Typography>

  <Grid container spacing={2} display={'flex'}>
    <Grid item xs={8.65} style={{display:'inline-block'}}>
    <Typography sx={{marginLeft:'100px',marginTop:'100px',width:'960px',height:'149px',border:'1px solid #271846',borderRadius:'24px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      <Typography sx={{width:'892px',height:'54px',display:'flex',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text2}
      </Typography>
    </Typography>
    </Grid>
  </Grid>

<Typography sx={{marginTop:'200px',marginLeft:'100px',fontSize:'70px', color:'#271846',fontWeight:'500', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
{text3}
  </Typography>

  <Grid container spacing={2} display={'flex'}>
    <Grid item xs={8.65} style={{display:'inline-block'}}>
    <Typography sx={{marginLeft:'100px',marginTop:'20px',width:'960px',height:'149px',border:'1px solid #271846',borderRadius:'24px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      <Typography sx={{width:'892px',height:'54px',display:'flex',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text4}
      </Typography>
    </Typography>
    </Grid>
  </Grid>

  <div style={{width:'472px',marginRight:'auto',marginLeft:'auto',marginTop:'103px'}}>
    <Typography sx={{display:'inline-block',color:'#B5A0FF',textAlign: 'center',fontFamily: 'Somatic',fontSize: '100px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        my      
    </Typography>
    <Typography sx={{display:'inline-block',color: '#6A4BD9',textAlign: 'center',fontFamily: 'Somatic',fontSize: '100px',fontStyle: 'normal',fontWeight: 400,lineHeight: 'normal'}}>
        designo
    </Typography>
  </div>  

  <Link to={'/help-center'}>
              <Button className='button1'
                style={{ width: '134px',height:'40px',margin:'50px auto 16px auto',borderRadius: '30px',gap:'10px',backgroundColor:'#271846',color:'#FFFFFF',display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{fontFamily:'Nunito',fontSize:'17.32px', textTransform:'lowercase'}}>
                  {text5}
                </Typography>
              </Button>
        </Link>

        <Link to={'/download-logo'}>

                <Typography style={{fontFamily:'Nunito',fontSize:'14px',lineHeight:'19.1px',textDecoration:'none',color:'#6A4BD9', textTransform:'lowercase',display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                  pdf {text6}
                </Typography>
        </Link>

  <Typography sx={{marginTop:'200px',marginLeft:'100px',fontSize:'70px', color:'#271846',fontWeight:'500', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
      {text7}
  </Typography>

  <Grid container spacing={2} display={'flex'}>
    <Grid item xs={8.65} style={{display:'inline-block'}}>
    <Typography sx={{marginLeft:'100px',marginTop:'20px',width:'960px',height:'176px',border:'1px solid #271846',borderRadius:'24px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      <Typography sx={{width:'892px',height:'54px',display:'flex',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text8}
      </Typography>
    </Typography>
    </Grid>
  </Grid>




  <Grid container spacing={2} display={'flex'} sx={{marginTop:'100px',marginLeft:'100px'}}>

    <Grid item xs={2.5} style={{display:'inline-block'}}>
      <Stack>
            <Typography className='typography1' sx={{width:'280px',height:'267px',
            fontSize:'40px', color:'#ECEAEF',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans', backgroundColor:'#271846'}}>
              <div>
              <Typography sx={{marginTop:'92.55px',fontSize:'20px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>very dark violet </Typography>
              </div>
              <div>
              <Typography sx={{fontSize:'40px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>271846</Typography>
              </div>
            </Typography>       
      </Stack>
    </Grid>
    <Grid item xs={2.5} style={{display:'inline-block'}}>
      <Stack>
            <Typography className='typography2' sx={{width:'280px',height:'267px',
            fontSize:'40px', color:'#ECEAEF',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans', backgroundColor:'#6A4BD9'}}>
              <div>
              <Typography sx={{marginTop:'92.55px',fontSize:'20px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>majorelle blue</Typography>
              </div>
              <div>
              <Typography sx={{fontSize:'40px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>6A4BD9</Typography>
              </div>
            </Typography>
      </Stack>
    </Grid>
    <Grid item xs={2.5} style={{display:'inline-block'}}>
      <Stack>
            <Typography className='typography3' sx={{width:'280px',height:'267px',
            fontSize:'40px', color:'#ECEAEF',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans', backgroundColor:'#9E9AA2'}}>
              <div>
              <Typography sx={{marginTop:'92.55px',fontSize:'20px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>manatee</Typography>
              </div>
              <div>
              <Typography sx={{fontSize:'40px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>9E9AA2</Typography>
              </div>
            </Typography>
      </Stack>
    </Grid>
    <Grid item xs={2.5} style={{display:'inline-block'}}>
      <Stack>
            <Typography className='typography4' sx={{width:'280px',height:'267px',
            fontSize:'40px', color:'#271846',fontWeight:'500', lineHeight:'48px', fontFamily:'Sofia Sans', backgroundColor:'#ECEAEF'}}>
              <div>
              <Typography sx={{marginTop:'92.55px',fontSize:'20px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>bright gray </Typography>
              </div>
              <div>
              <Typography sx={{fontSize:'40px',display:'flex',width:'280px',justifyContent:'center',alignItems:'center'}}>ECEAEF</Typography>
              </div>
            </Typography>
      </Stack>
    </Grid>
  </Grid>  

  <Typography sx={{marginTop:'200px',marginLeft:'100px',fontSize:'70px', color:'#271846',fontWeight:'500', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text9}
  </Typography>

  <Grid container spacing={2} display={'flex'}>
    <Grid item xs={8.65} style={{display:'inline-block'}}>
    <Typography sx={{marginLeft:'100px',marginTop:'20px',width:'960px',height:'122px',border:'1px solid #271846',borderRadius:'24px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      <Typography sx={{width:'892px',height:'54px',display:'flex',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      {text10}
      </Typography>
    </Typography>
    </Grid>
  </Grid>

  <Grid container spacing={2} display={'flex'} sx={{marginTop:'100px',marginLeft:'100px'}}>

    <Grid item xs={1.5} style={{display:'inline-block'}}></Grid>
    <Grid item xs={2.5} style={{display:'inline-block'}}>
      <Paper elevation={0} sx={{display:'inline-block',width:'280px',height:'261px',
      borderRadius:'10px',border:'2px dashed #271846',backgroundColor:'#ECEAEF',position:'relative'}}>
        <Typography sx={{fontFamily: 'Nunito',fontSize: '32px',fontWeight: 400,
        lineHeight: '44px',letterSpacing: '0em',textAlign: 'center',marginTop:'107.71px',marginLeft:'94.21px',position:'absolute'}}>
          nunito
        </Typography>
      </Paper>
    </Grid>
    <Grid item xs={2.5} style={{display:'inline-block'}}>
      <Paper elevation={0} sx={{display:'inline-block',width:'280px',height:'261px',
      borderRadius:'10px',border:'2px dashed #271846',backgroundColor:'#ECEAEF',position:'relative'}}>
        <Typography sx={{fontFamily: 'Sofia Sans',fontSize: '32px',fontWeight: 400,
        lineHeight: '44px',letterSpacing: '0em',textAlign: 'center',marginTop:'107.71px',marginLeft:'44.18px',position:'absolute'}}>
          soyuz grotesk
        </Typography>
      </Paper>
    </Grid>
    <Grid item xs={2.5} style={{display:'inline-block'}}>
      <Paper elevation={0} sx={{display:'inline-block',width:'280px',height:'261px',
      borderRadius:'10px',border:'2px dashed #271846',backgroundColor:'#ECEAEF',position:'relative'}}>
        <Typography sx={{fontFamily: 'Nunito',fontSize: '32px',fontWeight: 400,
        lineHeight: '44px',letterSpacing: '0em',textAlign: 'center',marginTop:'107.71px',marginLeft:'84.21px',position:'absolute'}}>
          somatic
        </Typography>
      </Paper>
    </Grid>
  </Grid>

  <Grid container spacing={2} display={'flex'}>
  <Typography sx={{marginTop:'200px',marginLeft:'100px',fontSize:'70px', color:'#271846',fontWeight:'500', lineHeight:'84px', fontFamily:'Sofia Sans'}}>
  {text11}
  </Typography>

  <Grid container spacing={2} display={'flex'}>
    <Grid item xs={10.5} style={{display:'inline-block',marginBottom:'200px'}}>
    <Typography sx={{marginLeft:'100px',marginTop:'20px',width:'1240px',height:'230px',border:'1px solid #271846',borderRadius:'24px',display:'block',alignItems:'center',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
      <div style={{display:'inline-block',width:'572px',height:'162px'}}>
        <Typography sx={{display:'block',marginLeft:'28px',marginTop:'24px',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text12}
        </Typography>
        <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text13}
        </Typography>
        <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text14}
        </Typography>
        <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text15}
        </Typography>
      </div>
      <div style={{display:'inline-block',width:'592px',height:'162px',marginLeft:'40px', position:'absolute'}}>
        <Typography sx={{display:'block',marginLeft:'28px',marginTop:'24px',fontSize:'20px', color:'#271846',fontWeight:'700', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text16}
        </Typography>
        <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text17}
        </Typography>
        <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text18}
        </Typography>
        <Typography sx={{display:'block',marginLeft:'48px',fontSize:'20px', color:'#271846',fontWeight:'400', lineHeight:'27.28pxpx', fontStyle:'Nunito'}}>
        {text19}
        </Typography>
      </div>
    </Typography>
    </Grid>


  </Grid>
</Grid>

  </>
};
export default MediaKitPage;


