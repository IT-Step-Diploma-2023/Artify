import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsMenu from '../../components/UI/UserSettingsComponents/SettingsMenu';
import ProfileMenu from '../../components/UI/UserProfileComponents/ProfileMenu';


const DelAccountPage: FunctionComponent = () => {

    const { t } = useTranslation();

    return <>
            <SettingsMenu translation={t}></SettingsMenu>
            <ProfileMenu translation={t}></ProfileMenu>
    </>
};

export default DelAccountPage;