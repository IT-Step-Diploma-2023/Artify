/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import CommonButton from '../../../components/UI/CommonButton';
import CommonInput from '../../../components/UI/CommonInput';
import SettingsMenu from '../components/layout/SettingsMenu';
import CommonLabel from '../components/UI/CommonLabel';
import InputSub from '../components/UI/InputSub';


const ProfInfoPage: FunctionComponent = () => {

    const { t } = useTranslation();

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: '0', margin: '0' }}>
                <SettingsMenu translation={t}></SettingsMenu>
            </Box>
            <Box
                component='form'
                onSubmit={() => { console.log('submit') }}
                sx={{ width: '100%', padding: '0 275px', marginBottom: '130px' }}>

                <CommonLabel htmlFor='prof'>
                    {t('accountPage3.profession')}
                </CommonLabel>
                <CommonInput
                    sx={{ width: '100%' }}
                    color='primary'
                    height='bg'
                    title={t('accountPage3.profession')}
                    id='profession'
                    name='profession'
                    required
                    placeholder={t('accountPage3.professionPlaceholder')}
                    autoFocus
                    aria-label='input-profession'
                    onChange={() => { console.log('profession input changed') }}
                />
                <CommonLabel
                    htmlFor='skills'
                    sx={{ marginTop: '1.5rem' }}>
                    {t('accountPage3.skills')}
                </CommonLabel>
                <CommonInput
                    sx={{ width: '100%' }}
                    color='primary'
                    height='bg'
                    title={t('accountPage3.skills')}
                    id='skills'
                    name='skills'
                    placeholder={t('accountPage3.skillsPlaceholder')}
                    aria-label='input-skills'
                    onChange={() => { console.log('skills input changed') }}
                />
                <InputSub >
                    {t('accountPage3.skillsSub')}
                </InputSub>
                <Divider sx={{ marginTop: '2.25rem' }} />
                {/*  */}
                <Divider sx={{ marginTop: '2.25rem' }} />
                <CommonLabel
                    htmlFor='skills'
                    sx={{ marginTop: '1.5rem' }}>
                    {t('accountPage3.site')}
                </CommonLabel>
                <CommonInput
                    sx={{ width: '100%' }}
                    color='primary'
                    height='bg'
                    title={t('accountPage3.site')}
                    id='site'
                    name='site'
                    placeholder={t('accountPage3.sitePlaceholder')}
                    aria-label='input-site'
                    onChange={() => { console.log('site input changed') }}
                />
                <InputSub >
                    {t('accountPage3.siteSub')}
                </InputSub>
                <CommonButton
                    color='primary'
                    height='bg'
                    sx={{
                        padding: '0 48px',
                        display: 'block',
                        margin: '4rem auto 0'
                    }}
                >
                    {t('common.saveLong')}
                </CommonButton>
            </Box>
        </Box>
    </>
};

export default ProfInfoPage;

