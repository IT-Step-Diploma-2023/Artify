/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useContext, useState } from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, styled, InputBase, Box, MenuItem, Avatar, IconButton, Menu, Tooltip } from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { AuthenticationManager } from '../../../utils/AuthenticationManager';
import { useSelector } from "react-redux";
//
import { useTranslation } from 'react-i18next';
import Logo from '../../UI/Logo';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/base/Button';
import { colors } from '../../../assets/defaults/colors';
import { margin } from '@mui/system';


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

  const authManager = new AuthenticationManager();
  //Cheking in local storage
  let username = authManager.isUserLogged();
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

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '21px',
    border: `1px solid ${colors.darkViolet}`,
    backgroundColor: 'white !important',
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      // backgroundColor: alpha(theme.palette.common.white, 0.25),
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

  const MenuItems = (): JSX.Element => {
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
            marginLeft: '5px',
            fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
          }}>
          {lng === 'ua' ? lngs.ua : lngs.en}
        </Typography>
      ))}
    </>
  }

  const DropdownMenu = (): JSX.Element => {
    if (username !== null)
      return <>
        <Typography
          textAlign="center"
          style={{ margin: '10px auto', fontWeight: '600', caret: 'transparent', cursor: 'default' }}>{username}</Typography >
        <MenuItem
          key={'workPrefs'}
          onClick={handleCloseUserMenu}>
          {t('headerComponent.dropdownMenu.workPrefs')}
        </MenuItem>
        <MenuItem divider
          key={'settings'}
          onClick={handleCloseUserMenu}>
          {t('headerComponent.dropdownMenu.settings')}
        </MenuItem>
        <MenuItem
          key={'logout'}
          onClick={() => { navigate('/logout') }}>
          {t('headerComponent.dropdownMenu.logоut')}
        </MenuItem>
      </>
    return <>
      <MenuItem divider
        key={'login'}
        onClick={() => { navigate('/login') }}>
        {t('headerComponent.dropdownMenu.login')}
      </MenuItem>
      <MenuItem
        key={'register'}
        onClick={() => { navigate('/register') }}>
        {t('headerComponent.dropdownMenu.register')}
      </MenuItem>
    </>
  }

  return (
    <AppBar
      position='static'
      sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
      <CssBaseline />
      <Toolbar sx={{ margin: "40px 50px 0" }}>
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
          <MenuItems />
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
            <DropdownMenu />
          </Menu>
        </Box>
        <LangSwitcher />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
