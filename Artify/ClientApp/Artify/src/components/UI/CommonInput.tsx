import { styled } from "@mui/material/styles";
import { sizes } from "../../assets/defaults/sizes";
import { colors } from "../../assets/defaults/colors";


const CommonInput = styled('input')(({ color, height }: {
    color?: 'primary' | 'secondary',
    height?: 'bg' | 'md'
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
        padding: '0 24px',
        transition: 'all 0.15s ease-out',
        '&:hover': {
            boxShadow: '0px 4px 8px 0px rgba(39, 24, 70, 0.40)'
        },
        '&:active': {
            boxShadow: '0px 3px 6px 0px rgba(39, 24, 70, 0.60)'
        },
        height: (height === 'bg' ? sizes.heightBg : sizes.heightMd),
        borderRadius: (height === 'bg' ? sizes.radiusBg : sizes.radiusMd)
    }));

export default CommonInput;