import { useTranslation } from 'react-i18next';
import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CommonButton from '../../components/UI/CommonButton';
import Separator from '../../components/UI/Separator';
import { useNavigate } from 'react-router-dom';
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';
import GoogleIconG from '../../components/UI/GoogleIconG';


const SelectRegisterPage: FunctionComponent = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    return <>
        <RegLogPageContent title={t('userAccountCreate.title')}>
            <CommonButton color='primary' height='bg' type='button'
                sx={{ width: '100%', marginTop: '2.5rem' }}
                onClick={(() => { navigate('/google-register') })}>
                <Box sx={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
                    <GoogleIconG />
                    <Typography sx={{ marginLeft: '0.75rem' }}>
                        {t('userAccountCreate.registerationMetodPage.withGoogle')}
                    </Typography>
                </Box>
            </CommonButton>
            <Separator text={t('userLoginPage.alternative')} />
            <CommonButton color='secondary' height='bg' type='button'
                sx={{ width: '100%', marginTop: '2.5rem' }}
                onClick={(() => { navigate('/email-register') })}>
                {t('userAccountCreate.registerationMetodPage.withEmail')}
            </CommonButton>
        </RegLogPageContent>
    </>
}

export default SelectRegisterPage