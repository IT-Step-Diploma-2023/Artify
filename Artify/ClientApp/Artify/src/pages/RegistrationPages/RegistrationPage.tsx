import { useTranslation } from 'react-i18next';
import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import { colors } from '../../assets/defaults/colors';
import { styled } from '@mui/material';
import FormPanel from '../../components/UI/FormPanel';
import FormPanelBackground from '../../components/UI/FormPanelBackground';

const images = [
    '/images/auth_bg_img_01.png',
    '/images/auth_bg_img_02.png',
    '/images/auth_bg_img_03.png'
];

const RegisterPage: FunctionComponent = () => {

    const { t } = useTranslation();

    const [index, setIndex] = useState(0);

    setTimeout(() => {
        setIndex((index + 1) % images.length);
    }, 10000);



    return <>
        <FormPanel sx={{ backgroundColor: `${colors.lightGrey}` }}>
            {/* form fields */}sdfsdfsdfsdf
        </FormPanel >
        <FormPanelBackground sx={{ backgroundImage: `url(${images[index]})` }} />
    </>
}

export default RegisterPage