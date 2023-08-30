import { useTranslation } from 'react-i18next';
import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, Grid, Paper, Typography } from '@mui/material';
import CommonButton from '../../components/UI/CommonButton';
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';
import CommonInput from '../../components/UI/CommonInput';
import { NavLink } from 'react-router-dom';



const EmailRegisterPage: FunctionComponent = () => {

    const { t } = useTranslation();

    return <>
        <RegLogPageContent title={t('userAccountCreate.title')}>
            <Box component='form' onSubmit={() => { console.log('Create Account Submitted') }}>
                <Grid container columnSpacing={2} rowSpacing={3} marginTop={3}>
                    <Grid item xs={12} md={6}>
                        <CommonInput
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={t('userAccountCreate.registerationPage.login')}
                            id='login'
                            name='login'
                            required
                            placeholder={t('userAccountCreate.registerationPage.login')}
                            autoFocus
                            aria-label='input-login'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CommonInput
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={t('userAccountCreate.registerationPage.userName')}
                            id='username'
                            name='username'
                            required
                            placeholder={t('userAccountCreate.registerationPage.userName')}
                            autoFocus
                            aria-label='input-username'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonInput
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={t('userAccountCreate.registerationPage.email')}
                            type='email'
                            id='email'
                            name='email'
                            required
                            placeholder={t('userAccountCreate.registerationPage.email')}
                            autoFocus
                            aria-label='input-email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonInput
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={t('userAccountCreate.registerationPage.password')}
                            type='password'
                            id='password'
                            name='password'
                            required
                            placeholder={t('userAccountCreate.registerationPage.password')}
                            autoFocus
                            aria-label='input-password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonInput
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={t('userAccountCreate.registerationPage.passwordRepeat')}
                            type='password'
                            id='password-repeat'
                            name='password-repeat'
                            required
                            placeholder={t('userAccountCreate.registerationPage.passwordRepeat')}
                            autoFocus
                            aria-label='input-password-repeat'
                        />
                    </Grid>
                    <Grid item xs={12} display='flex'>
                        <Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{ paddingTop: '0px', paddingRight: '0px' }}
                                        value='remember'
                                        color='primary'
                                        aria-label='remember'
                                        disableRipple />
                                }
                                label={null}
                            />
                        </Box>
                        <Box textAlign='justify' fontSize='0,875rem'>
                            Я погоджуюся з <a href='#'>умовами обслуговування</a>, <a href='#'>політикою конфіденційності</a> та <a href='#'>налаштуваннями сповіщень</a> за замовчуванням
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <CommonButton color='primary' height='bg' type='submit' sx={{ width: '100%' }}>
                            {t('userAccountCreate.general.enter')}
                        </CommonButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography textAlign='center'>
                            {`${t('userAccountCreate.general.haveAccount')} `}
                            <NavLink key='haveAccount' to='/login'>
                                {t('userAccountCreate.general.enter')}
                            </NavLink>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </RegLogPageContent >
    </>
}

export default EmailRegisterPage