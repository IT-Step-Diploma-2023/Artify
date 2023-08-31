/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { AuthenticationManager } from '../../utils/AuthenticationManager';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { CircularProgress } from "@mui/material";
import Separator from '../../components/UI/Separator';
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';
import CommonButton from '../../components/UI/CommonButton';
import CommonInput from '../../components/UI/CommonInput';
import { colors } from '../../assets/defaults/colors';
import useAuthorization from "../../hooks/useAuthorization";


const LoginPage = () => {
  const [isLoginError, setIsLoginError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {authenticateUser} = useAuthorization();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userName = data.get('username')?.toString() ?? '';
    const password = data.get('password')?.toString() ?? '';
    if (userName === '' && password === '') {
      setIsLoginError(t('userLoginPage.credentialsEmpty'));
      return;
    }

    setIsLoginError("");
    setIsLoading(true);
   // const authManager = new AuthenticationManager();

    const loggedUserName = await authenticateUser(userName, password);
    setIsLoading(false);
    if (loggedUserName) {
     // dispatch(authActions.login(loggedUserName));
      navigate("/");
    } else {
      setIsLoginError(t('userLoginPage.credentialsIncorrect'));
      setIsLoading(false);
    }
  };

  const { t } = useTranslation();

  return <>
    <RegLogPageContent title={t('userLoginPage.title')}>
      <Box component='form' onSubmit={handleSubmit}
        sx={{ width: '100%' }}>
        <CommonButton height='bg' type='button'
          sx={{ width: '100%', marginTop: '2.5rem', borderColor: colors.grey}}
          onClick={(() => { navigate('/google-register') })}>
          {t('userLoginPage.withGoogle')}
        </CommonButton>
        <Separator text={t('userLoginPage.alternative')} />
        <CommonInput color='primary' height='bg'
          sx={{ marginTop: '24px', width: '100%' }}
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
          <NavLink key='fogot' to='#'>
            {t('userLoginPage.forgot')}
          </NavLink>
        </Box>
        <CommonInput color='primary' height='bg'
          type='password'
          sx={{ marginTop: '24px', width: '100%' }}
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
          label={t('userLoginPage.rememberMe')}
        />
        {isLoginError !== "" && <span style={{ "color": "red" }}><br />{isLoginError}</span>}
        <Button
          type='submit'
          className='button button-dark button-b'
          style={{ width: '100%', display: 'block', marginTop: '48px' }}
          disabled={isLoading}>
          {isLoading ? <CircularProgress disableShrink /> : <span>{t('userLoginPage.enter')}</span>}
        </Button>
        <Box className='form-link'
          sx={{ textAlign: 'center' }}>
          <Typography>
            {`${t('userLoginPage.noAccount')} `}
            <NavLink
              key='noAccount'
              to='/select-register'
            >
              {t('userLoginPage.register')}
            </NavLink>
          </Typography>
        </Box>
      </Box>
    </RegLogPageContent>
  </>
}
export default LoginPage;
