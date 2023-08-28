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
        <FormPanel sx={{ backgroundColor: colors.lightGrey }}>
            <Container sx={{ margin: 'auto' }}>
                <Paper sx={{ width: '460px' , margin: 'auto'}}>
                    <FormTitle sx={{ color: colors.violet }}>
                        {t('userAccountCreate.title')}
                    </FormTitle>
                    <CommonButton color='primary' height='bg'
                        sx={{ width: '100%' , marginTop: '2.5rem'}}>
                        {t('userAccountCreate.registerationMetodPage.withGoogle')}
                    </CommonButton>
                    <Separator text={t('userLoginPage.alternative')}/>
                    <CommonButton color='primary' height='bg'
                        sx={{ width: '100%' , marginTop: '2.5rem'}}>
                        {t('userAccountCreate.registerationMetodPage.withEmail')}
                    </CommonButton>
                </Paper>
            </Container>
        </FormPanel >
        <FormPanelBackground sx={{ backgroundImage: `url(${images[index]})` }} />
    </>
}

export default RegisterPage