import { useTranslation } from 'react-i18next';
import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Paper } from '@mui/material';
import { colors } from '../../assets/defaults/colors';
import FormPanelBackground from '../../components/UI/FormPanelBackground';
import FormTitle from '../../components/UI/FormTitle';
import FormPanel from '../../components/UI/FormPanel';
import CommonButton from '../../components/UI/CommonButton';
import Separator from '../../components/UI/Separator';
import { useNavigate } from 'react-router-dom';
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';


const SelectRegisterPage: FunctionComponent = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    return <>
        <RegLogPageContent title={t('userAccountCreate.title')}>
            <CommonButton color='primary' height='bg' type='button'
                sx={{ width: '100%', marginTop: '2.5rem' }}
                onClick={(() => { navigate('/google-register') })}>
                {t('userAccountCreate.registerationMetodPage.withGoogle')}
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