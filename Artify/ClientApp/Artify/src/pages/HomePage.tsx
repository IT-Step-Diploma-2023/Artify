import { FunctionComponent } from 'react';
import HomeImageList from '../components/UI/HomeImageList';
import HomeButtonFilter from '../components/UI/HomeButtonFilter';
import HomeTabs from '../components/UI/HomeTabs';
import { Box } from '@mui/material';

const HomePage: FunctionComponent = () => {
  return <>
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='center'
      sx={{ margin: { xs: '12px 0', md: '48px 0' } }}>
      <Box width='30%' sx={{ display: { xs: 'none', md: 'block' } }}>
        <HomeButtonFilter />
      </Box>
      <HomeTabs />
      <Box width='30%' sx={{ display: { xs: 'none', md: 'block' } }}>
      </Box>
    </Box>
    <HomeImageList />
  </>
};
export default HomePage;
