import { Box, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../../assets/defaults/colors";
import Logo from "../../UI/Logo";


const Footer: FunctionComponent = () => {
    return <>
        <Box sx={{
            width: '100vw',
            height: { sx: '6rem', sm: '24rem' },
            backgroundColor: colors.lightGrey,
            boxShadow: '0px -2px 16px 0px rgba(106, 75, 217, 0.20), 1px -22px 40px 0px rgba(106, 75, 217, 0.20) inset',
            borderTopLeftRadius: '1.5rem',
            borderTopRightRadius: '1.5rem',
            paddingTop: '4rem'
        }}>
            <Grid
                container
                width='400px'
                margin='0 auto'
                direction='column'
                justifyContent='top'
                alignItems='center'
            >
                <Grid item >
                    <Logo></Logo>
                </Grid>
                <Grid item marginTop='2.625rem'>
                    <Grid
                        container
                        columnSpacing={3}
                    >
                        <Grid item>
                            <Box width='20px' height='20px' bgcolor='red'
                                sx={{ cursor: 'pointer' }}>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box width='20px' height='20px' bgcolor='red'
                                sx={{ cursor: 'pointer' }}>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box width='20px' height='20px' bgcolor='red'
                                sx={{ cursor: 'pointer' }}>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box width='20px' height='20px' bgcolor='red'
                                sx={{ cursor: 'pointer' }}>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    </>
}

export default Footer;