import { LocationOn } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CommonButton from "../CommonButton";
import { colors } from "../../../assets/defaults/colors";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const ProfileMainImage = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    return <>
        <Box sx={{ margin: '0 auto 40px', width: '500px', height: '150px', display: 'flex', justifyContent: 'left' }}>
            <Box sx={{ paddingLeft: '40px' }}>
                <Avatar
                    alt="Remy Sharp" src="/images/sample_christian_kouly_profile.jpg"
                    sx={{
                        display: 'inline-block',
                        width: '147px',
                        height: '147px',
                        boxShadow: '0px 4px 8px 0px #2718464D'
                    }} />
            </Box>
            <Box sx={{ paddingLeft: '40px' }}>
                <Typography component='div' sx={{ display: 'block', fontSize: '2rem', fontWeight: '700' }}>
                    {t('jocelyn calzoni')}
                </Typography>
                <LocationOn sx={{ fontSize: '1.25rem', display: 'inline-block', color: 'grey', margin: '0 4px -2px 0' }} />
                <Typography component='div' sx={{ display: 'inline-block', color: 'grey', fontSize: '1.25rem' }}>
                    {t('Ukraine')}
                </Typography>
                <CommonButton color='secondary' height='md'
                    sx={{ width: '130px', marginTop: '20px', display: 'block', background: colors.lightGrey }}
                    onClick={()=>{navigate('/settings-basicinfo')}}>
                    {t('accountPage2.editAccount')}
                </CommonButton>
            </Box>
        </Box>;
    </>
};

export default ProfileMainImage;

