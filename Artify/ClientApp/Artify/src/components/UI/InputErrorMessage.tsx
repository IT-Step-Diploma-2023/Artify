import { Typography } from "@mui/material";
import { colors } from "../../assets/defaults/colors";

const InputErrorMessage = ({message}: {message: string}) => {
    return <Typography sx={{
        width: '100%',
        color: colors.red,
        fontSize: '0.8rem',
        textAlign: 'center',
        padding: '0.5rem 1.25rem',
        boxSizing: 'border-box'
    }}>
        {message}
    </Typography>;
}

export default InputErrorMessage;