import { Box, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../../assets/defaults/colors";
import Logo from "../../UI/Logo";
import { NavLink } from "react-router-dom";

const buttonIcons = [
    { target: "#", image: "/images/footer/phone_icon.svg" },
    { target: "#", image: "/images/footer/instagram_icon.svg" },
    { target: "#", image: "/images/footer/facebook_icon.svg" },
    { target: "#", image: "/images/footer/mail_icon.svg", }
];


const Footer: FunctionComponent = () => {
    return <>
        <Box
            sx={{
                width: '100%',
                height: { xs: '10rem', md: '24rem' },
                backgroundColor: colors.lightGrey,
                boxShadow: '0px -2px 16px 0px rgba(106, 75, 217, 0.20), 1px -22px 40px 0px rgba(106, 75, 217, 0.20) inset',
                borderTopLeftRadius: '1.5rem',
                borderTopRightRadius: '1.5rem',
                paddingTop: { xs: '2rem', md: '4rem' }
            }}>
            <Grid
                container
                margin='0 auto'
                width='200px'
                direction='column'
                justifyContent='top'
                alignItems='center'
            >
                <Grid item >
                    <NavLink className="logo" to='/' >
                        <Logo />
                    </NavLink>
                </Grid>
                <Grid item
                    sx={{ marginTop: { xs: '0.75rem', md: '2.625rem' } }}>
                    <Grid container columnSpacing={3}
                    >
                        {buttonIcons.map((buttonIcon) => (
                            <Grid item>
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
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    </>
}

export default Footer;