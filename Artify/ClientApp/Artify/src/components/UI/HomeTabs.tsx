import * as React from 'react';
import Tabs,{ tabsClasses }  from '@mui/material/Tabs';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import { fontSize } from '@mui/system';

interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}

export default function ScrollableTabsButtonVisible() {

  const { t, i18n } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const pages = [
    t('headerComponent.tags.sites'),
    t('headerComponent.tags.images'),
    t('headerComponent.tags.photos'),
    t('headerComponent.tags.brand'),
    t('headerComponent.tags.typography'),
    t('headerComponent.tags.prints'),
    t('headerComponent.tags.mobile'),
    t('headerComponent.tags.animation')

  ];
  const pathes = [
    '/webSites',
    '/images',
    '/photos',
    '/brand',
    '/typography',
    '/prints',
    '/mobile',
    '/animation'
  ]


  return (
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        centered
        
        scrollButtons
        
        sx={{          
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3}
          }
        }}
        style={{ width: '410px', height: '44px', gap: '20px'}}>
          {pages.map((page) => (
              <NavLink 
              
              key={page}
              to={pathes[pages.indexOf(page)]}
              className={({ isActive }) => (isActive ? 'link1-active' : 'link1')}
            ><Tab className='link1' sx={{height:'2px'}} label={page} />              
            </NavLink>
          ))}
    
      </Tabs> 
  );
}


