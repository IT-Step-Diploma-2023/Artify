import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTranslation } from 'react-i18next';

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { t } = useTranslation();

  return (

    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
        style={{ width: '600px', height: '44px', gap: '20px' }}>
        <Tab className='link' label="веб сайти" color='#271846' />
        <Tab className='link' label="ілюстрації" />
        <Tab className='link' label="фото" />
        <Tab className='link' label="бренд" />
        <Tab className='link' label="типографія" />
        <Tab className='link' label="принти" />
        <Tab className='link' label="мобільне" />
        <Tab className='link' label="анімація" />
      </Tabs>
    </Box>
  );
}


