import { styled } from "@mui/material";


const FormPanelBackground = styled('div')(({ theme }) => ({
    width: '53vw',
    height: '100vh',
    marginLeft: '47vw',
    backgroundSize: 'cover',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
    transition: 'background-image 1s'
}));

export default FormPanelBackground;