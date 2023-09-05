/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



import { NavLink } from "react-router-dom";

import { Divider, Grid, IconButton, Input, Select, Tab, TextField } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { AddAPhoto } from '@mui/icons-material';
import { display, fontSize } from '@mui/system';
import Separator from '../../components/UI/Separator';
import ProfileMenu from '../../components/UI/ProfileMenu';


const ProfInfoPage: FunctionComponent = () => {

    const { t } = useTranslation();


    return <>
            <ProfileMenu translation={t}></ProfileMenu>
    </>
};

export default ProfInfoPage;

