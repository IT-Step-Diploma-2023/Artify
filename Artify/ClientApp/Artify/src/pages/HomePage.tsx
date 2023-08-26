import { FunctionComponent } from 'react';
import HomeImageList from '../components/UI/HomeImageList';
import HomeButtonFilter from '../components/UI/HomeButtonFilter';
import HomeTabs from '../components/UI/HomeTabs';
import { Box } from '@mui/system';

const HomePage: FunctionComponent = () => {
  return <>
    <Box>
      <HomeButtonFilter />
      <HomeTabs />
    </Box>
    <HomeImageList />
  </>
};
export default HomePage;
