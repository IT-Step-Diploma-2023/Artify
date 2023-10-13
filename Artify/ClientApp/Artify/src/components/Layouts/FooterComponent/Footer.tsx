import { Box, Divider, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../../assets/defaults/colors";
import Logo from "../../UI/Logo";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavMenu from "../../UI/NavMenu";

const buttonIcons = [
    { target: "#", image: "/images/components/layouts/footer/phone_icon.svg" },
    { target: "#", image: "/images/components/layouts/footer/instagram_icon.svg" },
    { target: "#", image: "/images/components/layouts/footer/facebook_icon.svg" },
    { target: "#", image: "/images/components/layouts/footer/mail_icon.svg", }
];

interface Position {
    pos?: 'docked' | 'default';
}


// const Footer: FunctionComponent<Position> = ({ pos }) => {
const Footer: FunctionComponent<Position> = () => {

    // const navigate = useNavigate();

    const { t } = useTranslation();

    const pages = [
        t('headerComponent.menue.inspiration'),
        t('headerComponent.menue.buy'),
        t('headerComponent.menue.hire'),
        t('headerComponent.menue.help'),
        t('headerComponent.menue.aboutUs'),
    ];

    const pathes = [
        '/inspire',
        '/buy',
        '/hire',
        '/help-center',
        '/about-us'
    ]

    return <>
        <Box component='footer' sx={{
            position: 'fixed',
            bottom: '0',
            paddingTop: '1rem',
            backgroundColor: colors.lightGrey
        }}>
            <Divider />
            <Grid container sx={{
                width: '100vw',
                padding: '1rem 100px',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Grid item xs={12} lg='auto'>
                    <Box sx={{
                        textAlign: {
                            xs: 'center',
                            sm: 'center',
                            md: 'center',
                            lg: 'left'
                        }
                    }}>
                        <NavLink to='/' className="logo" >
                            <Logo />
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Box sx={{
                        height: '41px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <NavMenu pages={pages} pathes={pathes} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg='auto'>
                    <Box sx={{
                        height: '41px',
                        width: '152px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: '0 auto'
                    }}>
                        {buttonIcons.map((buttonIcon) => (
                            <Box key={buttonIcon.image} id={buttonIcon.image} >
                                <a href={buttonIcon.target}>
                                    <Box
                                        width='20px' height='20px'
                                        sx={{
                                            backgroundImage: `url(${buttonIcon.image})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: "contain",
                                            backgroundRepeat: 'no-repeat',
                                            "&:hover": {
                                                filter: 'brightness(120%)',
                                                transform: 'scale(1.075)',
                                            }
                                        }}>
                                    </Box>
                                </a>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>

    </>
}

export default Footer;