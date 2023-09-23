import { FunctionComponent } from 'react';
import HomeImageList from '../components/UI/HomeImageList';
import HomeButtonFilter from '../components/UI/HomeButtonFilter';
import HomeTabs from '../components/UI/HomeTabs';
import { Box } from '@mui/system';

const HomePage: FunctionComponent = () => {
  return <>
    <Box 
    display='flex' 
    flexDirection='row' 
    justifyContent='center' 
    sx={{margin:{xs:'12px 16px 35px', md: '48px 170px 70px'}}}>
      <Box width='30%' sx={{display: {xs:'none', md:'block'}}}>
        <HomeButtonFilter />
      </Box>
      {/* <HomeTabs /> */}
      <Box width='30%' sx={{display: {xs:'none', md:'block'}}}>
      </Box>
    </Box>
    <HomeImageList />
  </>
};
export default HomePage;
