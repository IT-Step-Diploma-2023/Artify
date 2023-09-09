/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsMenu from '../../components/UI/UserSettingsComponents/SettingsMenu';
import { colors } from '../../assets/defaults/colors';
import CommonButton from '../../components/UI/CommonButton';
import CommonLabel from '../../components/UI/UserSettingsComponents/CommonLabel';
import CommonInput from '../../components/UI/CommonInput';
import networksData from '../../assets/data/networksData.json'
import React from 'react';
import { AddAPhoto } from '@mui/icons-material';
import { IconButton, Typography, Input, Grid } from '@mui/material';
import CommonTextArea from '../../components/UI/CommonTextArea';
import { margin } from '@mui/system';

const BasicInfoPage: FunctionComponent = () => {

    const networks = networksData;

    const [editFormData, setEditFormData] = useState({ ...networks });
    const [selectedImage, setSelectedImage] = useState(new Blob);
    console.log(selectedImage);


    const loadButtonClickHandler = () => {
        const inputElement = window.document.getElementById('loadFileInput')!
        inputElement.click();
    }

    const loadInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const loadedFile = event.target.files!
        console.log(loadedFile[0]);
        setSelectedImage(loadedFile[0]);
    }

    const { t } = useTranslation();

    const placeholders = [
        'instagram',
        'behance',
        'facebook',
        'pinterest'
    ];

    const login = t('accountPage.userName');
    const fullName = t('accountPage.fullName');
    const country = t('accountPage.country');
    const city = t('accountPage.city');
    const location = country + ', ' + city;
    const about = t('accountPage.about');
    const download = t('accountPage.download');
    const save = t('accountPage.save');


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
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={login}>
                                {login}
                            </CommonLabel>
                            <CommonInput
                                sx={{ width: '100%' }}
                                color='primary'
                                height='bg'
                                title={login}
                                id={login}
                                name={login}
                                placeholder={login}
                                aria-label={login}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={fullName}>
                                {fullName}
                            </CommonLabel>
                            <CommonInput
                                sx={{ width: '100%' }}
                                color='primary'
                                height='bg'
                                title={fullName}
                                id={fullName}
                                name={fullName}
                                placeholder={fullName}
                                aria-label={fullName}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={location}>
                                {location}
                            </CommonLabel>
                            <CommonInput
                                sx={{ width: '100%' }}
                                color='primary'
                                height='bg'
                                title={location}
                                id={location}
                                name={location}
                                placeholder={location}
                                aria-label={location}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <CommonLabel htmlFor={about}>
                                {about}
                            </CommonLabel>
                            <CommonTextArea
                                sx={{ width: '100%' }}
                                color='primary'
                                borderRaius='bg'
                                rows={6}
                                title={about}
                                id={about}
                                name={about}
                                placeholder={about}
                                aria-label={about}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <CommonButton
                            color='primary'
                            height='bg'
                            sx={{
                                display: 'block',
                                width: '12.5rem',
                                margin: {
                                    xs: '0.5rem auto 0',
                                    sm: '1.25rem auto 0',
                                    md: '4.625rem auto 0'
                                }
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