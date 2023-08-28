import { styled } from "@mui/material";


const FormPanel = styled('div')(({ theme }) => ({
    float: 'left',
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
        boxShadow: '20px 10px 30px 0px rgba(39, 24, 70, 0.30)',
        borderTopRightRadius: '2.5rem',
        borderBottomRightRadius: '2.5rem'
    },
    width: '53vw',
    [theme.breakpoints.down('md')]: {
        width: '78vw'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100vw'
    },
    transition: 'width 0.2s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}));

export default FormPanel;