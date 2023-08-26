/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AuthenticationManager } from '../../utils/AuthenticationManager';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from '@mui/material';
import {CircularProgress} from "@mui/material";
import Separator from '../../components/UI/Separator';

const images = [
  '/images/auth_bg_img_01.png',
  '/images/auth_bg_img_02.png',
  '/images/auth_bg_img_03.png'
];

const LoginPage = () => {
    const [isLoginError, setIsLoginError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userName = data.get('username')?.toString() ?? '';
        const password = data.get('password')?.toString() ?? '';
        if (userName === '' && password === '') {
            setIsLoginError("Login or password is empty");
            return;
        }
        setIsLoginError("");
        setIsLoading(true);
        const authManager = new AuthenticationManager();

        const loggedUserName = await authManager.authenticateUser(userName, password);
        setIsLoading(false);
        if (loggedUserName) {
            dispatch(authActions.login(loggedUserName));
            navigate("/");
        } else {
            setIsLoginError("Login or password is incorrect");
            setIsLoading(false);
        }


    };

  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  setTimeout(() => {
    setIndex((index + 1) % images.length);
  }, 10000);

  return (<>
    <CssBaseline />
    <Container >
      {/* insert */}
      <div className="form-container">
        <div className='form-bg'
          style={{ backgroundImage: `url(${images[index]})` }}>
        </div>
        <div className='form'>
          <div className="form-fields">
            <Box component='form' onSubmit={handleSubmit}
              sx={{ width: '100%' }}>
              <Typography className='form-title'
                sx={{
                  fontSize: '42px',
                  fontWeight: '800',
                }}>
                {t('userLoginPage.title')}
              </Typography>
              <Button
                className='button button-light button-b'
                style={{ marginTop: '24px', width: '100%', display: 'block' }}>
                {t('userLoginPage.withGoogle')}
              </Button>
              <Separator text={t('userLoginPage.alternative')} />
              <Input className='input'
                style={{ marginTop: '24px', width: '100%' }}
                required
                title={t('userLoginPage.login')}
                id='username'
                name='username'
                placeholder={t('userLoginPage.login')}
                autoFocus
                aria-label='input-username'
              />
              <Box className='form-link'
                sx={{ textAlign: 'right' }}>
                <NavLink
                  key='fogot'
                  to='#'
                >
                  {t('userLoginPage.forgot')}
                </NavLink>
              </Box>
              <Input className='input'
                type='password'
                style={{ marginTop: '24px', width: '100%' }}
                required
                title={t('userLoginPage.password')}
                id='password'
                name='password'
                placeholder={t('userLoginPage.password')}
                aria-label='input-password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
                {isLoginError !== "" && <span style={{"color": "red"}}><br/>{isLoginError}</span>}
              <Button
                type='submit'
                className='button button-dark button-b'
                style={{ width: '100%', display: 'block', marginTop: '48px' }}
                disabled={isLoading}>
                  {isLoading ? <CircularProgress disableShrink/> : <span>{t('userLoginPage.enter')}</span>}

              </Button>

              <Box className='form-link'
                sx={{ textAlign: 'center' }}>
                <Typography
                >
                  {`${t('userLoginPage.noAccount')} `}
                  <NavLink
                    key='noAccount'
                    to='#'
                  >
                    {t('userLoginPage.register')}
                  </NavLink>
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </div>
      {/* end insert */}
    </Container>
  </>
  );
};
export default LoginPage;
