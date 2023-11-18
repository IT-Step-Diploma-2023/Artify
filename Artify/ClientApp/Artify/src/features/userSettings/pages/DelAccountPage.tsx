import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from '../../userProfile/components/layout/ProfileMenu';
import SettingsMenu from '../components/layout/SettingsMenu';


const DelAccountPage: FunctionComponent = () => {

    const { t } = useTranslation();

    return <>
            <SettingsMenu translation={t}></SettingsMenu>
            <ProfileMenu translation={t}></ProfileMenu>
    </>
};

export default DelAccountPage;