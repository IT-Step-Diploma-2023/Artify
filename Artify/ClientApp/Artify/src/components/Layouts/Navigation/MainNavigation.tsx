/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { FunctionComponent } from 'react';
//
import { useTranslation } from 'react-i18next';
import Logo from '../../UI/Logo';



const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: '5px',
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: '20px',
    borderBottom: '1px solid transparent',
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
  linkActive: {
    textDecoration: 'none',
    fontSize: '20px',
    marginLeft: '20px',
    color: 'yellow',
    borderBottom: '1px solid white',
  },
}));

//#region localization languages
interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}
//#endregion

const Navbar: FunctionComponent = () => {
  const classes = useStyles();
  //
  const { t, i18n } = useTranslation();

  const pages = [
    t('headerComponent.menue.search'),
    t('headerComponent.menue.hire'),
    t('headerComponent.menue.job'),
    t('headerComponent.menue.buy'),
    t('headerComponent.menue.help'),
    t('headerComponent.menue.download'),
    t('headerComponent.menue.share')
  ];

  const pathes = [
    '/search',
    '/hire',
    '/job',
    '/buy',
    '/help',
    '/download',
    '/share'
  ]

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <NavLink to='/' className={classes.logo}>
            <Logo />
          </NavLink>
          {/* <NavLink
            to='/fetchdata'
            className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
          >
            Example fetch
          </NavLink> */}
          {pages.map((page) => (
            <NavLink
              key={page}
              to={pathes[pages.indexOf(page)]}
              className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
            >
              {page}
            </NavLink>
          ))}
        </div>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => void i18n.changeLanguage(lng)}>
              {lng === 'ua' ? lngs.ua : lngs.en}
            </button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
