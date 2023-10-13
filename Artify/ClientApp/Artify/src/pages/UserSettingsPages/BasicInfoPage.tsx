import Box from '@mui/material/Box';
import { Dispatch, SetStateAction } from "react";
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsMenu from '../../components/UI/UserSettingsComponents/SettingsMenu';
import { colors } from '../../assets/defaults/colors';
import CommonButton from '../../components/UI/CommonButton';
import CommonLabel from '../../components/UI/UserSettingsComponents/CommonLabel';
import CommonInput from '../../components/UI/CommonInput';
import React from 'react';
import { AddAPhoto } from '@mui/icons-material';
import { Grid } from '@mui/material';
import CommonTextArea from '../../components/UI/CommonTextArea';
import { countries } from '../../utils/getCountries';
import CommonSelect from '../../components/UI/CommonSelect';
import useUserSettings from '../../hooks/useUserSettings';
import InputErrorMessage from '../../components/UI/InputErrorMessage';
import { IBasicUserFormData } from '../../assets/interfaces/usersInterfaces';

const BasicInfoPage: FunctionComponent = () => {

    /* #region localization */

    const { t } = useTranslation();

    const login = t('accountPage.userName');
    const fullName = t('accountPage.fullName');
    const country = t('accountPage.country');
    const address = t('accountPage.address');
    const info = t('accountPage.about');
    const download = t('accountPage.download');
    const save = t('accountPage.save');
    const formErrorMessage = t('common.formError');

    /* #endregion */

    const { getData, postData, loadData, getData2 } = useUserSettings();
    // const retriveData = getData();


    const [formData, setFormData] = useState<IBasicUserFormData>(new Object as IBasicUserFormData);

    useEffect(() => {
        void getData2(setFormData)
    }, []);

    /* #region validation */

    const [fullNameError, setFullNameError] = useState<string>('');
    const [addressError, setAddressError] = useState<string>('');
    const [infoError, setInfoError] = useState<string>('');

    const [fullNameActive, setFullNameActive] = useState<boolean>(false);
    const [addressActive, setAddressActive] = useState<boolean>(false);
    const [infoActive, setInfoActive] = useState<boolean>(false);

    const [formValid, setFormValid] = useState<boolean>(false);
    const [formActive, setFormActive] = useState<boolean>(false);

    useEffect(() => {
        if (fullNameError !== '' || addressError !== '' || infoError !== '')
            setFormValid(false);
        else
            setFormValid(true);
    }, [fullNameError, addressError, infoError]);

    useEffect(() => {
        if (!fullNameActive || !addressActive || !infoActive)
            setFormActive(false);
        else
            setFormActive(true);
    }, [fullNameActive, addressActive, infoActive]);

    console.log(formActive); // for build test only

    const fullNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const re = /^([їЇіІєЄа-яА-Яa-zA-Z])[їЇіІєЄа-яА-Яa-zA-Z0-9" "-]{0,24}$/;
        re.test(String(value)) || value === '' ? setFullNameError('') : setFullNameError('fullNameError');
        value !== '' ? setFullNameActive(true) : setFullNameActive(false);
    }

    const addressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const re = /^([їЇіІєЄа-яА-Яa-zA-Z0-9#№])[їЇіІєЄа-яА-Яa-zA-Z0-9" "#№,;\\/-]{0,256}$/;
        re.test(String(value)) || value === '' ? setAddressError('') : setAddressError('addressError');
        value !== '' ? setAddressActive(true) : setAddressActive(false);
    }

    const infoChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        const re = /^([їЇіІєЄа-яА-Яa-zA-Z0-9])[їЇіІєЄа-яА-Яa-zA-Z0-9" "$@!?#№,;\\/-]{0,2048}$/;
        re.test(String(value)) || value === '' ? setInfoError('') : setInfoError('infoError');
        value !== '' ? setInfoActive(true) : setInfoActive(false);
    }

    /* #endregion */

    /* #region load profile icon image */
    const [selectedImage, setSelectedImage] = useState(new Blob);

    const loadButtonClickHandler = () => {
        const inputElement = window.document.getElementById('loadFileInput')!
        inputElement.click();
    }

    const loadInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const loadedFile = event.target.files!
        setSelectedImage(loadedFile[0]);
    }
    /* #endregion */

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formValid) {
            alert(formErrorMessage);
            return;
        }
        postData(formData, selectedImage);
    }

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: '0', margin: '0' }}>
                <SettingsMenu translation={t} />
            </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
            <Box sx={{
                position: 'absolute',
                left: '0',
                margin: '0',
                display: {
                    xs: 'none', sm: 'block'
                },
                marginBottom: '130px'
            }}>
                <SettingsMenu translation={t}></SettingsMenu>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    padding: '0 0 0 275px',
                    display: 'flex'
                }}>
                <Box sx={{
                    width: '151px',
                    marginRight: '4.5rem',
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}>
                    {(selectedImage.size === 0) &&
                        <Box
                            aria-label="addaphoto"
                            sx={{
                                border: '2px dashed #271846',
                                color: '#271846',
                                display: 'block',
                                padding: '50px',
                                width: '147px',
                                height: '147px',
                                borderRadius: '50%'
                            }}>
                            <AddAPhoto sx={{
                                height: '2.25rem',
                                width: '2.25rem',
                                margin: '3px 0 0 3px'
                            }} />
                        </Box>}
                    {(selectedImage.size !== 0) &&
                        <img
                            alt="not found"
                            width={'147px'}
                            style={{
                                border: '1px solid',
                                color: '#271846',
                                display: 'block',
                                borderRadius: '50%'
                            }}
                            src={URL.createObjectURL(selectedImage)}
                        // src='/public/images/sample_luna_profile.png'
                        />
                    }
                    <CommonButton color='secondary'
                        sx={{ width: '100%', marginTop: '1.5rem', backgroundColor: colors.lightGrey }}
                        onClick={() => selectedImage.size === 0 ? loadButtonClickHandler() : setSelectedImage(new Blob)}
                    >
                        {download}
                        <input
                            id='loadFileInput'
                            style={{ display: 'none' }}
                            type="file"
                            name="profileImage"
                            onChange={loadInputChangeHandler}
                        />
                    </CommonButton>
                </Box>
                <Grid
                    component='form'
                    container
                    columnSpacing={{ sm: 2 }}
                    rowSpacing={{ sm: 3 }}
                    sx={{ width: '100%' }}
                    onSubmit={submitHandler}
                >
                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={login}>
                                {login}
                            </CommonLabel>
                            <CommonInput
                                sx={{
                                    width: '100%',
                                    backgroundColor: colors.lightGrey,
                                    caretColor: 'transparent',
                                    '&:hover':
                                        { boxShadow: 'unset' },
                                    '&:active':
                                        { boxShadow: 'unset' }
                                }}
                                color='primary'
                                height='bg'
                                title={login}
                                id={login}
                                name={login}
                                placeholder={login}
                                aria-label={login}
                                defaultValue={formData.username}
                                readOnly
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={fullName}>
                                {fullName}
                            </CommonLabel>
                            <CommonInput
                                isValid={fullNameError === '' || formData.fullName.length === 0}
                                sx={{ width: '100%' }}
                                color='primary'
                                height='bg'
                                title={fullName}
                                id='fullName'
                                name='fullName'
                                placeholder={fullName}
                                aria-label={fullName}
                                value={formData.fullName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setFormData((pervData) => {
                                        const updatedData = { ...pervData, fullName: e.target.value };
                                        return updatedData;
                                    });
                                    fullNameChangeHandler(e);
                                }}
                            />
                            {(fullNameActive && fullNameError) &&
                                <InputErrorMessage message={fullNameError} />
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor='country'>
                                {country}
                            </CommonLabel>
                            <CommonSelect
                                sx={{ width: '100%' }}
                                height='bg'
                                color='primary'
                                title='country'
                                name='country'
                                value={formData.country}
                                onChange={(e) => {
                                    setFormData((pervData) => {
                                        const updatedData = { ...pervData, country: e.target.value };
                                        return updatedData;
                                    });
                                }}>
                                <option value="">
                                    None
                                </option>
                                {countries.map((country) =>
                                (
                                    <option key={country} value={country}>{country}</option>
                                ))}

                            </CommonSelect>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={address}>
                                {address}
                            </CommonLabel>
                            <CommonInput
                                isValid={addressError === '' || formData.address.length === 0}
                                sx={{ width: '100%' }}
                                color='primary'
                                height='bg'
                                title={address}
                                id="address"
                                name="address"
                                placeholder={address}
                                aria-label={address}
                                value={formData.address}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setFormData((pervData) => {
                                        const updatedData = { ...pervData, address: e.target.value };
                                        return updatedData;
                                    });
                                    addressChangeHandler(e);
                                }}
                            />

                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={info}>
                                {info}
                            </CommonLabel>
                            <CommonTextArea
                                isValid={infoError === '' || formData.info.length === 0}
                                sx={{ width: '100%' }}
                                color='primary'
                                borderRaius='bg'
                                rows={6}
                                title={info}
                                id="info"
                                name="info"
                                placeholder={info}
                                aria-label={info}
                                value={formData.info}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                    setFormData((pervData) => {
                                        const updatedData = { ...pervData, info: e.target.value };
                                        return updatedData;
                                    });
                                    infoChangeHandler(e);
                                }}
                            />
                            {(infoActive && infoError) &&
                                <InputErrorMessage message={infoError} />
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <CommonButton
                            color='primary'
                            height='bg'
                            type='submit'
                            sx={{
                                display: 'block',
                                width: '12.5rem',
                                margin: {
                                    xs: '0.5rem auto 0',
                                    sm: '1.25rem auto 0',
                                    md: '4.625rem auto 0'
                                },
                                backgroundColor: ((formValid) ? colors.darkViolet : colors.grey)
                            }}>
                            {save}
                        </CommonButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>
}

export default BasicInfoPage;

