import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import classes from './MainNavigation.module.css';
import { AuthenticationManager } from '../../../utils/AuthenticationManager';
import {useSelector} from "react-redux";
const Navbar: FunctionComponent = () => {
  const authManager = new AuthenticationManager();
  //Cheking in local storage
  let username = authManager.isUserLogged();
  const authStore = useSelector(state => state.auth);
  if(username === null && authStore.isAuthenticated === true){
    username = authStore.username;
  }
  console.log("auth - ")
  console.log(authStore);
  //Checking in state
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
          {username !== null && (
            <NavLink
              to='/logout'
              className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
            >
              Log out
            </NavLink>
          )}
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
          >
            {username === null ? 'Login' : username}
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
