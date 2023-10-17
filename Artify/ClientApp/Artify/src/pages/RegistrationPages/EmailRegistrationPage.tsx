/* eslint-disable @typescript-eslint/no-misused-promises */
import { useTranslation } from 'react-i18next';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import CommonButton from '../../components/UI/CommonButton';
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';
import CommonInput from '../../components/UI/CommonInput';
import { NavLink } from 'react-router-dom';
import useAuthorization from "../../hooks/useAuthorization";
import { useNavigate } from "react-router";
import { colors } from '../../assets/defaults/colors';
import InputErrorMessage from '../../components/UI/InputErrorMessage';

interface InputForm {
    name: string,
    title: string,
    type: string,
    error: string,
    active: boolean,
    focused: boolean,
    value: string,
    check: RegExp
}

const EmailRegisterPage: FunctionComponent = () => {

    const { t } = useTranslation();

    const errorMessages = {
        username: t('userAccountCreate.registerationPage.loginError'),
        email: t('userAccountCreate.registerationPage.emailError'),
        password: t('userAccountCreate.registerationPage.passwordError'),
        passwordRepeat: t('userAccountCreate.registerationPage.passwordRepeatError')
    }

    const navigate = useNavigate();
    const { registerUser } = useAuthorization();
    const [isFormError, setIsFormError] = useState<string>('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
        agree: false,
    });

    const [loginError, setLoginError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [passwordRepeatError, setPasswordRepeatError] = useState<string>('');

    const [loginActive, setLoginActive] = useState<boolean>(false);
    const [emailActive, setEmailActive] = useState<boolean>(false);
    const [passwordActive, setPasswordActive] = useState<boolean>(false);
    const [passwordRepeatActive, setPasswordRepeatActive] = useState<boolean>(false);

    const [agreeConfirmed, setAgreeConfirmed] = useState<boolean>(false);

    const [formValid, setFormValid] = useState<boolean>(false);
    const [formActive, setFormActive] = useState<boolean>(false);

    const inputs: InputForm[] = [
        {
            name: 'username',
            title: t('userAccountCreate.registerationPage.login'),
            type: 'text',
            error: loginError,
            active: loginActive,
            focused: true,
            value: formData.username,
            check: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_]{6,24}$/,
        },
        {
            name: 'email',
            title: t('userAccountCreate.registerationPage.email'),
            type: 'email',
            error: emailError,
            active: emailActive,
            focused: false,
            value: formData.email,
            check: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
        },
        {
            name: 'password',
            title: t('userAccountCreate.registerationPage.password'),
            type: 'password',
            error: passwordError,
            active: passwordActive,
            focused: false,
            value: formData.password,
            check: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}$/,
        },
        {
            name: 'passwordRepeat',
            title: t('userAccountCreate.registerationPage.passwordRepeat'),
            type: 'password',
            error: passwordRepeatError,
            active: passwordRepeatActive,
            focused: false,
            value: formData.passwordRepeat,
            check: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}$/,
        },
    ]

    useEffect(() => {
        if (loginError !== '' || emailError !== '' || passwordError !== '' || passwordRepeatError !== '' || !agreeConfirmed) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }
    }, [loginError, emailError, passwordError, passwordRepeatError, agreeConfirmed]);

    useEffect(() => {
        if (!loginActive || !emailActive || !passwordActive || !passwordRepeatActive || !agreeConfirmed) {
            setFormActive(false);
        }
        else {
            setFormActive(true);
        }
    }, [loginActive, emailActive, passwordActive, passwordRepeatActive, agreeConfirmed]);


    const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        switch (event.target.name) {
            case "username":
                event.target.value !== '' ? setLoginActive(true) : setLoginActive(false);
                break;
            case "email":
                event.target.value !== '' ? setEmailActive(true) : setEmailActive(false);
                break;
            case "password":
                event.target.value !== '' ? setPasswordActive(true) : setPasswordActive(false);
                break;
            case "passwordRepeat":
                event.target.value !== '' ? setPasswordRepeatActive(true) : setPasswordRepeatActive(false);
                break;
            default: break;
        }
    }

    const inputCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        let setter: any;
        let index: number;
        switch (event.target.name) {
            case "username":
                setter = setLoginError;
                index = 0;
                break;
            case "email":
                setter = setEmailError;
                event.target.value = event.target.value.toLowerCase();
                index = 1;
                break;
            case "password":
                setter = setPasswordError;
                index = 2;
                break;
            case "passwordRepeat":
                setter = setPasswordRepeatError;
                index = 3;
                break;
            default:
                return;
        }

        if (event.target.value === '') {
            setter('');
            return;
        }
        if (index === 3) {
            checkPasswordRepeat();
            return;
        }
        if (!inputs[index].check.test(String(event.target.value)))
            setter(Object.values(errorMessages)[index]);
        else {
            if (index === 2 && formData.passwordRepeat !== '')
                checkPasswordRepeat();
            setter('');
        }

        function checkPasswordRepeat() {
            // TODO
            // fix no cancelling error state if password becomes matching to passwordReapeat
            if (passwordError === '' && event.target.value !== formData.password)
                setPasswordRepeatError(errorMessages.passwordRepeat);
            else {
                setPasswordRepeatError('');
            }
        }
    }

    return <>
        <RegLogPageContent title={t('userAccountCreate.title')}>
            <Box component='form' onSubmit={async (event) => {
                event.preventDefault();
                console.log(formValid);
                if (!formValid && formActive) {
                    setIsFormError(t('userAccountCreate.registerationPage.formError'));
                    return;
                }
                const userName = await registerUser(formData.username, formData.email, formData.password);
                if (userName === null) {
                    setIsFormError(t('userAccountCreate.registrationPage.registrationError'));
                    return;
                }
                navigate('/');
            }}>
                <Grid container columnSpacing={2} rowSpacing={3} marginTop={3}>
                    {inputs.map((input) => (inputFragment(input)))}
                    <Grid item xs={12} display='flex'>
                        <Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{ paddingTop: '0px', paddingRight: '0px' }}
                                        name='agree'
                                        id='agree'
                                        color='primary'
                                        aria-label='agree'
                                        disableRipple
                                        value={formData.agree}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            setFormData((prevData) => {
                                                const updatedData = { ...prevData, agree: e.target.checked };
                                                return updatedData;
                                            });
                                            setAgreeConfirmed(e.target.checked);
                                        }
                                        } />
                                }
                                label={null}
                            />
                        </Box>
                        <Box textAlign='justify' fontSize='0,875rem'>
                            Я погоджуюся з <a href='#'>умовами обслуговування</a>, <a href='#'>політикою
                                конфіденційності</a> та <a href='#'>налаштуваннями сповіщень</a> за замовчуванням
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <CommonButton
                            color='primary'
                            height='bg'
                            type='submit'
                            sx={{ width: '100%', backgroundColor: ((formValid && formActive) ? colors.darkViolet : colors.grey) }}
                        >
                            {t('userAccountCreate.general.enter')}
                        </CommonButton>
                        {!formValid &&
                            <InputErrorMessage message={isFormError} />
                        }
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

    function inputFragment(input: InputForm) {
        return <Grid item xs={12} key={input.name}>
            <CommonInput
                isValid={input.error === ''}
                sx={{ width: '100%' }}
                color='primary'
                height='bg'
                title={input.title}
                type={input.type}
                id={input.name}
                name={input.name}
                required
                placeholder={input.title}
                aria-label={input.name}
                value={input.value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFormData((prevData) => {
                        const updatedData = { ...prevData, [input.name]: e.target.value };
                        return updatedData;
                    });
                    inputCheck(e);
                }}
                onBlurCapture={blurHandler} />
            {(input.active && input.error) &&
                <InputErrorMessage message={input.error} />
            }
        </Grid>;
    }
}

export default EmailRegisterPage