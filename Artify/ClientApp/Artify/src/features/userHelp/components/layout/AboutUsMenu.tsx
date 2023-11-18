import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import classes from './AboutUsMenu.module.css';


function AboutUsMenu() {

  const { t } = useTranslation();

  // const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  const pages = [
    t('aboutUsMenu.text1'),
    t('aboutUsMenu.text2'),
    t('aboutUsMenu.text3')

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

export default AboutUsMenu;

