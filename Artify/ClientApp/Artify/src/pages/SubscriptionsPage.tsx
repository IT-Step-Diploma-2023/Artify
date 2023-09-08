/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Grid,  Paper } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import LocationOn from '@mui/icons-material/LocationOn';
import ProfileMenu from '../components/UI/UserProfileComponents/ProfileMenu';

interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}
  
  const SubscriptionsPage: FunctionComponent = () => {

    const { t } = useTranslation();
    
    const subscriptions=t('accountPage2.subscriptions');

    const [value, setValue] = React.useState(0);
  
    const editAccount=t('accountPage2.editAccount');
 
  return <>
     
    <Grid container spacing={2}>
      <Grid item xs={4} md={4}>
        
      </Grid>
      <Grid item xs={4} md={4}>
        <div>
          <Avatar alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg" sx={{marginTop:'90px',display:'inline-block',width:'147px',height:'147px'}} />

          <div style={{display:'inline-block'}}>
            <div style={{display:'block',marginBottom:'45px'}}>
              <Typography component='div' sx={{display:'block',marginLeft:'40px',fontSize:'30px'}}>
                {t('jocelyn calzoni')}
              </Typography>
            <LocationOn sx={{fintSize:'small',display:'inline-block',marginLeft:'38px'}}/>
            <Typography component='div' sx={{display:'inline-block'}}>
                {t('Ukraine')}
              </Typography>
            </div>
            <Button className='button button-border-dark button-m'
              style={{ display:'block',marginBottom:'70px',marginLeft:'40px',width: '130px',height:'42px',left:'100px',border: '1px solid #271846',borderRadius: '30px',gap:'10px',padding:'10px, 22px, 10px, 22px'}}>
              <Typography component='div' sx={{float:'center',padding:'1px 6px'}}>
                {editAccount}
              </Typography>
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={4} md={4}>

      </Grid>
    </Grid>


    <Grid container spacing={2}>
      <Grid item xs={3} md={3}>
        
      </Grid>
      <Grid item xs={5} md={5}>
        <ProfileMenu translation={t}></ProfileMenu>
      </Grid>
      <Grid item xs={4} md={4}>

      </Grid>
    </Grid>



    <Grid container spacing={{ xs: 2, md: 3 }} style={{ margin: 'auto 50px' }}>      
        <Grid xs={12} sm={6} md={3}>
              <Paper elevation={0} style={{ width: 280, height: 259, marginTop: '60px',backgroundColor:'#ECEAEF',border:'1px solid #9E9AA2', borderRadius: '10px 10px 10px 10px'}}>
                      <img
                        style={{ width: 280, height: 80, borderRadius: '10px 10px 0px 0px',marginBottom:'-36px'}}
                        src={'images/background_subscriptions.png'}
                        srcSet={'images/background_subscriptions.png'}
                        alt={'background'}
                        loading="lazy"
                      />           
                  <div style={{}}>
                  <Avatar alt="Luna Everhart" src="/images/sample_luna_profile.png" 
                  sx={{width:'72px',height:'72px',margin: '0 auto',boxShadow: '0px 2px 4px 0px #2718464D'}} />
                  <Typography sx={{display:'flex',justifyContent:'center',alignItems:'center'}} style={{fontFamily: 'Nunito',fontSize: '16px',fontWeight: 700,lineHeight: '19.1px',color:'#271846',marginTop:'10px'}}>
                    luna everhart
                  </Typography>
                  <Typography  sx={{display:'flex',justifyContent:'center',alignItems:'center'}}  style={{fontFamily: 'Nunito',fontSize: '14px',fontWeight: 700,lineHeight: '19.1px',color:'#271846'}}>
                    3d artist
                  </Typography>
                  <Button className='button button-dark' style={{ marginTop:'20px',marginRight: 'auto',marginLeft: 'auto',display:'block',width:'141px', height:'39px',borderRadius:'30px',padding:'auto auto',fontSize:'14px'}}>
                      {subscriptions}
                  </Button>
                </div>
              </Paper>
        </Grid>
      </Grid>
  </>
};
export default SubscriptionsPage;






