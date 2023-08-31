import {useTranslation} from 'react-i18next';
import {ChangeEvent, FunctionComponent, useState} from 'react';
import Box from '@mui/material/Box';
import {Checkbox, FormControlLabel, Grid, Typography} from '@mui/material';
import CommonButton from '../../components/UI/CommonButton';
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';
import CommonInput from '../../components/UI/CommonInput';
import {NavLink} from 'react-router-dom';
import useAuthorization from "../../hooks/useAuthorization";
import {useNavigate} from "react-router";


const EmailRegisterPage: FunctionComponent = () => {

    const {t} = useTranslation();
    const {registerUser} = useAuthorization();
    const [isFormError, setIsFormError] = useState<string>('');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
        remember: false,
    });


    return <>
        <RegLogPageContent title={t('userAccountCreate.title')}>
            <Box component='form' onSubmit={async (event) => {
                event.preventDefault();
                if (formData.password !== formData.passwordRepeat) {
                    setIsFormError("Passwords are not similar");
                    return;
                }
                const userName = await registerUser(formData.username, formData.email, formData.password);
                if(userName === null){
                    setIsFormError("Registration error");
                    return;
                }
                navigate('/');
            }}>
                <Grid container columnSpacing={2} rowSpacing={3} marginTop={3}>
                    {/*<Grid item xs={12} md={6}>*/}
                    {/*    <CommonInput*/}
                    {/*        sx={{ width: '100%' }}*/}
                    {/*        color='primary'*/}
                    {/*        height='bg'*/}
                    {/*        title='name'*/}
                    {/*        id='name'*/}
                    {/*        name='name'*/}
                    {/*        required*/}
                    {/*        placeholder='Your name'*/}
                    {/*        autoFocus*/}
                    {/*        aria-label='input-login'*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} md={12}>
                        <CommonInput
                            sx={{width: '100%'}}
                            color='primary'
                            height='bg'
                            title={t('userAccountCreate.registerationPage.userName')}
                            id='username'
                            name='username'
                            required
                            placeholder={t('userAccountCreate.registerationPage.userName')}
                            autoFocus
                            aria-label='input-username'
                            value={formData.username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setFormData((prevData) => {
                                    const updatedData = {...prevData, username: e.target.value};
                                    setIsFormError('');
                                    return updatedData;
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonInput
                            sx={{width: '100%'}}
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
                            value={formData.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setFormData((prevData) => {
                                    const updatedData = {...prevData, email: e.target.value};
                                    setIsFormError('');
                                    return updatedData;
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonInput
                            sx={{width: '100%'}}
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
                            value={formData.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setFormData((prevData) => {
                                    // You can update your form data here
                                    const updatedData = {...prevData, password: e.target.value};
                                    setIsFormError('');
                                    return updatedData;
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonInput
                            sx={{width: '100%'}}
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
                            value={formData.passwordRepeat}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setFormData((prevData) => {
                                    const updatedData = {...prevData, passwordRepeat: e.target.value};
                                    setIsFormError('');
                                    return updatedData;
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} display='flex'>
                        <Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{paddingTop: '0px', paddingRight: '0px'}}
                                        value={formData.remember}
                                        color='primary'
                                        aria-label='remember'
                                        disableRipple
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            // setFormData((prevData) => {
                                            //     const updatedData = {...prevData, remember: e.target.value};
                                            //     setIsFormError('');
                                            //     return updatedData;
                                            // });
                                        }}/>
                                }
                                label={null}
                            />
                        </Box>
                        <Box textAlign='justify' fontSize='0,875rem'>
                            Я погоджуюся з <a href='#'>умовами обслуговування</a>, <a href='#'>політикою
                            конфіденційності</a> та <a href='#'>налаштуваннями сповіщень</a> за замовчуванням
                        </Box>
                    </Grid>
                    {isFormError !=='' && <span style={{color:"red"}}>{isFormError}</span>}
                    <Grid item xs={12}>
                        <CommonButton color='primary' height='bg' type='submit' sx={{width: '100%'}}
                        >
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
        </RegLogPageContent>
    </>
}

export default EmailRegisterPage