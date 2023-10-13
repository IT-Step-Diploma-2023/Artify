import { FunctionComponent, useState } from 'react';
import HomeImageList from '../components/UI/HomePageComponents/HomeImageList';
import HomeButtonFilter from '../components/UI/HomePageComponents/HomeButtonFilter';
// import HomeTabs from '../components/UI/HomeTabs';
import { Box } from '@mui/system';
import Context from '../utils/Context';

const HomePage: FunctionComponent = () => {

  const [filterActive, setFilterActive] = useState(false);

  return <>
    <Context.Provider value={{
      filterActive, setFilterActive
    }}>
      <Box
        sx={{ margin: { xs: '12px 0px 35px', md: '48px 0px 70px' } }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <HomeButtonFilter />
        </Box>
      </Box>
      <HomeImageList />
    </Context.Provider>
  </>
};
export default HomePage;
