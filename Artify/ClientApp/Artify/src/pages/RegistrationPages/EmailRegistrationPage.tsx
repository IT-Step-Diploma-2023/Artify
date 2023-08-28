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
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';


const EmailRegisterPage: FunctionComponent = () => {

    const { t } = useTranslation();

    return <>
        <RegLogPageContent title={t('userAccountCreate.title')}>
            <p>registartion by Email Account</p>
        </RegLogPageContent>
    </>
}

export default EmailRegisterPage