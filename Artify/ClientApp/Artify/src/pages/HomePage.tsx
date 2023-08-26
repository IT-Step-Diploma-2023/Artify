import { FunctionComponent } from 'react';
import HomeImageList from '../components/UI/HomeImageList';
import HomeButtonFilter from '../components/UI/HomeButtonFilter';
import HomeTabs from '../components/UI/HomeTabs';
import { Box } from '@mui/system';

const HomePage: FunctionComponent = () => {
  return <>
    <Box display='flex' flexDirection='row' justifyContent='center' margin='48px 170px 0'>
      <Box width='30%'>
        <HomeButtonFilter />
      </Box>
      <HomeTabs />
      <Box width='30%'>
      </Box>
    </Box>
    <HomeImageList />
  </>
};
export default HomePage;
