/* eslint-disable @typescript-eslint/no-misused-promises */
import { Grid, Paper } from '@mui/material';
import { FunctionComponent } from 'react';
// import { useTranslation } from 'react-i18next';


const MessagePage: FunctionComponent = () => {

  // const { t } = useTranslation();

  return <>
    <Grid container spacing={2} marginTop={'48px'} display={'flex'}>
      <Grid xs={1}></Grid>
      <Grid xs={2}>
        <Paper className='paper' elevation={0}
          sx={{ display: 'block', backgroundColor: '#FFFFFF', padding: '10px, 30px, 10px, 30px', width: '280px', height: '640px', borderRadius: '24px', border: '1px solid #CACACA' }}>

        </Paper>
      </Grid>

      <Grid xs={7} marginLeft={9}>
        <Paper className='paper' elevation={0}
          sx={{ display: 'block', backgroundColor: '#FFFFFF', padding: '10px, 30px, 10px, 30px', width: '920px', height: '640px', borderRadius: '24px', border: '1px solid #CACACA' }}>
        </Paper>
      </Grid>


    </Grid>
  </>
};
export default MessagePage;



