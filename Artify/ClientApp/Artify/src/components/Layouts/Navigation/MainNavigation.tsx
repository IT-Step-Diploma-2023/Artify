/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useContext, useState } from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, styled, InputBase, Box, MenuItem, Avatar, IconButton, Menu, Tooltip, Divider } from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../UI/Logo';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from '../../../assets/defaults/colors';
import NavMenu from '../../UI/NavMenu';
import CommonButton from '../../UI/CommonButton';
import UserDropdownMenuItems from './UserDropDownMenuItems';
import { baseUrlApi } from '../../../assets/defaults/urls';
import AppContext from '../../../utils/AppContext';
import { IBasicUserFormData } from '../../../assets/interfaces/usersInterfaces';
import { useSelector } from 'react-redux';
import { isUserLogged } from '../../../hooks/useAuthorization';


/* #region global functions */
const getShownName = (user: IBasicUserFormData | undefined): string => {
  if (user == null) return "";
  if (user.fullName != "") return user.fullName
  return user.username;
}
const getLogoImage = (user: IBasicUserFormData | undefined): string => {
  if (user == null) return "images/default_profile.png";
  if (user.logoImage !== "") return user.logoImage; 
  return "images/default_profile.png";
}
/* #endregion */

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

const pathes = [
  '/inspire',
  '/buy',
  '/hire',
  '/help-center',
];

const Navbar: FunctionComponent = () => {


  /* #region variant of check is user logged */
  //// Cheking in local storage
  ////////////////////////////////////////////////
  //// TEST THIS FOR USING LATER
  ////////////////////////////////////////////////
  let username = isUserLogged();
  const authStore = useSelector<IAuth, any>(state => state.auth);

  if (username === "" && authStore.isAuthenticated === true) {
    username = authStore.username;
  }

  // console.log("auth - ");
  // console.log(authStore);
  //// Checking in state
  /* #endregion */

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const { signinState, user } = useContext(AppContext);
 
  const shownName = getShownName(user);
  const logoImage = getLogoImage(user);

  const pages = [
    t('headerComponent.menue.inspiration'),
    t('headerComponent.menue.buy'),
    t('headerComponent.menue.hire'),
    t('headerComponent.menue.help'),
  ];

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
    // backgroundColor: 'white !important',
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

  const NavDropdownMenuItems = (): JSX.Element => {
    return <>
      {pages.map((page) => (
        <MenuItem
          key={pages.indexOf(page)}
          onClick={() => { handleClickMenuItem(pathes[pages.indexOf(page)]) }}>
          <Typography textAlign="center">{page}-</Typography>
        </MenuItem>
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

  console.log(user);
  return (
    <AppBar
      sx={{ position: 'fixed', boxShadow: 'none', backgroundColor: colors.lightGrey }}>
      <CssBaseline />
      <Toolbar sx={{
        marginTop: { xs: '12px', md: '30px' },
        marginBottom: { xs: '12px', md: '30px' },
        width: 'auto',
        padding: { xs: '0 20px', md: '0 100px' }
      }}>
        {/* for sm size */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar-xs"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: `${colors.darkViolet}` }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar-xs"
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
            <Divider />
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
        {/*for md size */}
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
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height: '25px', justifyContent: 'center' }}>
          <NavMenu pages={pages} pathes={pathes} />
        </Box>
        {/* for all sizes */}
        <Box sx={{
          flexGrow: 0,
          margin: '0 10px 0 20px'
        }}>
          {signinState && (
            <CommonButton
              color='primary'
              height='bg'
              sx={{ width: { lg: '200px', md: '150px' } }}
              onClick={() => navigate('/share')}>
              {t('headerComponent.share')}
            </CommonButton>
          )}
        </Box>
        <Box sx={{ flexGrow: 0, marginRight: '10px' }}>
          <Tooltip title={signinState ? shownName : t('headerComponent.loggedOffMessage')}>
            <IconButton onClick={handleOpenUserMenu} sx={{
              p: 0,
              "&:hover": {
                boxShadow: "2px 2px 4px 0px rgba(39, 24, 70, 0.20)"
              },
              "&:active": {
                boxShadow: "1px 1px 6px 0px rgba(39, 24, 70, 0.40)"
              },
            }}>
              <Avatar
                alt={user ? shownName : t('headerComponent.loggedOffMessage')}
                src={(user && user.logoImage !== "") ? baseUrlApi + logoImage : "images/default_profile.png"}
                />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar-md"
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
            <UserDropdownMenuItems
              shownName={shownName}
              handleClick={handleClickMenuItem}
            />
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