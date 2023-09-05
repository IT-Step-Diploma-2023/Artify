import { Divider, Grid, IconButton, Input, Select, Tab, TextField } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { AddAPhoto } from '@mui/icons-material';
import { display, fontSize } from '@mui/system';
import Separator from '../../components/UI/Separator';
import ProfileMenu from '../../components/UI/ProfileMenu';


const DelAccountPage: FunctionComponent = () => {

    const { t } = useTranslation();


    return <>
            <ProfileMenu translation={t}></ProfileMenu>
    </>
};

export default DelAccountPage;