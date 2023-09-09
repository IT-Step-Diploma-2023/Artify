import { styled } from "@mui/material/styles";
import { sizes } from "../../assets/defaults/sizes";
import { colors } from "../../assets/defaults/colors";


const CommonTextArea = styled('textarea')(({
    color,
    borderRaius,
    rows,
    cols
}: {
    color?: 'primary' | 'secondary',
    borderRaius?: 'bg' | 'md',
    rows?: number,
    cols?: number
}) => (
    {
        fontFamily: 'Nunito',
        outline: 'none',
        caretColor: colors.darkViolet,
        fontWeight: '400',
        fontSize: '1rem',
        display: 'inline-block',
        boxSizing: 'border-box',
        color: colors.darkViolet,
        border: '1px solid',
        borderColor: (color === 'primary' ? colors.grey : colors.darkViolet),
        backgroundColor: (color === 'primary' ? 'white' : colors.lightGrey),
        padding: '12px 24px',
        rows: { rows },
        cols: { cols },
        resize: 'none',
        transition: 'all 0.15s ease-out',
        '&:hover': {
            boxShadow: '0px 4px 8px 0px rgba(39, 24, 70, 0.40)'
        },
        '&:active': {
            boxShadow: '0px 3px 6px 0px rgba(39, 24, 70, 0.60)'
        },
        borderRadius: (borderRaius === 'bg' ? sizes.radiusBg : sizes.radiusMd)
    }));

export default CommonTextArea;