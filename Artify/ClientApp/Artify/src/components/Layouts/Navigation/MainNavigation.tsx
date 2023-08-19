import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import classes from './MainNavigation.module.css';
import { AuthenticationManager } from '../../../utils/AuthenticationManager';
const Navbar: FunctionComponent = () => {
  const authManager = new AuthenticationManager();
  const userName = authManager.isUserLogged();
  console.log(userName);
  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4' className={classes.logo}>
          Artify
        </Typography>
        <div className={classes.navlink}>
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
            {userName === null ? 'Login' : userName}
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
