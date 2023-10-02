import * as React from 'react';
import Tabs,{ tabsClasses }  from '@mui/material/Tabs';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import { Box, fontSize } from '@mui/system';
import classes from './AboutUsMenu.module.css';

interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}

export default function AboutUsMenu() {



  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const pages = [
    'про нас',
    'наша команда',
    'медіа кіт',

  ];
  const pathes = [
    '/about-us',
    '/team',
    '/media-kit',
  ]


  return (<>
    <div className= {classes['separator-line2']} style={{marginLeft:'104px',color:'#CACACA'}}></div>
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '32.5rem', justifyContent: 'center', margin: 'auto' }}>
    {pages.map((page) => (
        <NavLink
            key={page}
            to={pathes[pages.indexOf(page)]}
            className={({ isActive }) => (isActive ? classes['link-active'] : classes['link'])}
        >
            {page}
        </NavLink>
    ))}
</Box>
</>
  );
}

