/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState } from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, styled, InputBase, Box, MenuItem, Avatar, IconButton, Menu, Tooltip, Divider } from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { isUserLogged } from "../../../hooks/useAuthorization";
import { useSelector } from "react-redux";
//
import { useTranslation } from 'react-i18next';
import Logo from '../../UI/Logo';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/base/Button';
import { colors } from '../../../assets/defaults/colors';
import useAuthorization from "../../../hooks/useAuthorization";


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
  //Cheking in local storage
  let username = isUserLogged();
  const authStore = useSelector(state => state.auth);
  if (username === null && authStore.isAuthenticated === true) {
    username = authStore.username;
  }
  console.log("auth - ")
  console.log(authStore);
  //Checking in state

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const pages = [
    t('headerComponent.menue.hire'),
    t('headerComponent.menue.job'),
    t('headerComponent.menue.buy'),
    t('headerComponent.menue.help'),
  ];

  const pathes = [
    '/hire',
    '/job',
    '/buy',
    '/help',
  ]

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickMenuItem = (path: string) => {
    handleCloseNavMenu();
    navigate(path);
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '21px',
    border: `1px solid ${colors.darkViolet}`,
    backgroundColor: 'white !important',
    '&:hover': {
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    color: `${colors.darkViolet}`,
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      color: `${colors.darkViolet}`,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const NavMenuItems = (): JSX.Element => {
    return <>
      {pages.map((page) => (
        <NavLink
          key={page}
          to={pathes[pages.indexOf(page)]}
          className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        >
          {page}
        </NavLink>
      ))}
    </>
  }

  const NavDropdownMenuItems = (): JSX.Element => {
    return <>
      {pages.map((page) => (<>
        <MenuItem
          key={page}
          onClick={() => { handleClickMenuItem(pathes[pages.indexOf(page)]) }}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
        {pages.indexOf(page) === pages.length - 1 && <Divider />}
      </>
      ))}
    </>
  }

  const LangSwitcher = (): JSX.Element => {
    return <>
      {Object.keys(lngs).map((lng) => (
        <Typography
          className='lang'
          key={lng}
          onClick={() => void i18n.changeLanguage(lng)}
          style={{
            cursor: 'pointer',
            display: 'inline-block',
            margin: '0 3px',
            fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
          }}>
          {lng === 'ua' ? lngs.ua : lngs.en}
        </Typography>
      ))}
    </>
  }

  const UserDropdownMenuItems = (): JSX.Element => {
    if (username !== null)
      return <>
        <Typography
          textAlign="center"
          style={{ margin: '10px auto', fontWeight: '600', caret: 'transparent', cursor: 'default' }}>{username}</Typography >
        <MenuItem
          key={'workPrefs'}
          onClick={() => { handleClickMenuItem('/portfolio') }}>
          {t('headerComponent.dropdownMenu.workPrefs')}
        </MenuItem>
        <MenuItem divider
          key={'settings'}
          onClick={() => { handleClickMenuItem('/profile-edit') }}>
          {t('headerComponent.dropdownMenu.settings')}
        </MenuItem>
        <MenuItem
          key={'logout'}
          onClick={() => { handleClickMenuItem('/logout') }}>
          {t('headerComponent.dropdownMenu.logоut')}
        </MenuItem>
        <MenuItem
          key={'show-borders'}
          onClick={() => { handleClickMenuItem('/show-borders') }}>
          Show Borders
        </MenuItem>
      </>
    return <>
      <MenuItem divider
        key={'login'}
        onClick={() => { handleClickMenuItem('/login') }}>
        {t('headerComponent.dropdownMenu.login')}
      </MenuItem>
      <MenuItem
        key={'register'}
        onClick={() => { handleClickMenuItem('/select-register') }}>
        {t('headerComponent.dropdownMenu.register')}
      </MenuItem>
    </>
  }

  return (
    <AppBar
      position='static'
      sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
      <CssBaseline />
      <Toolbar sx={{ marginTop: { xs: '12px', md: '40px' }, width: 'auto', padding: { xs: '0 20px', md: '0 50px' } }}>
        {/* for sm size */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: `${colors.darkViolet}` }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <NavDropdownMenuItems />
            <MenuItem key='lng'>
              <LangSwitcher />
            </MenuItem>
          </Menu>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <NavLink to='/' className="logo">
              <Logo />
            </NavLink>
          </Box>
        </Box>
        {/* for md size */}
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <NavLink to='/' className="logo">
            <Logo />
          </NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t('headerComponent.search')}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height: '25px' }}>
          <NavMenuItems />
        </Box>
        {/* for all sizes */}
        <Box sx={{
          flexGrow: 0,
          marginRight: '10px'
        }}>
          {username !== null && (
            <Button
              className='button button-dark button-m'
              style={{ width: '200px' }}>
              {t('headerComponent.share')}
            </Button>
          )}

        </Box>
        <Box sx={{ flexGrow: 0, marginRight: '10px' }}>
          <Tooltip title={username !== null ? username : t('headerComponent.loggedOffMessage')}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={username !== null ? username : t('headerComponent.loggedOffMessage')}
                src={username !== null ? "/images/sample_christian_kouly_profile.jpg" : ""}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px', borderRadius: '20px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <UserDropdownMenuItems />
          </Menu>
        </Box>
        <Box sx={{ flexgrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <LangSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
