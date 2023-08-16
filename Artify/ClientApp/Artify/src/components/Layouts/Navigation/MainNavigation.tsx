/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { FunctionComponent } from 'react';
const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: '5px',
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
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

const Navbar: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4' className={classes.logo}>
          Artify
        </Typography>
        <div className={classes.navlinks}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
          >
            Home
          </NavLink>
          <NavLink
            to='/fetchdata'
            className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
          >
            Example fetch
          </NavLink>
          <NavLink
            to='/otherPage'
            className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
          >
            Other page
          </NavLink>
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
          >
            Login
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
