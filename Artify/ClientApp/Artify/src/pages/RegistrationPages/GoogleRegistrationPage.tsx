import { useTranslation } from 'react-i18next';
import { FunctionComponent, } from 'react';

import RegLogPageContent from '../../components/Layouts/RegLogPageContent';


const GoogleRegisterPage: FunctionComponent = () => {

    const { t } = useTranslation();
    
    return <>
        <RegLogPageContent title={t('userAccountCreate.title')}>
            <p>registartion by Google Account</p>
        </RegLogPageContent>
    </>
}

export default GoogleRegisterPage