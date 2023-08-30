import { styled } from "@mui/material/styles";
import { sizes } from "../../assets/defaults/sizes";
import { colors } from "../../assets/defaults/colors";


const CommonButton = styled('button')(({ color, height }: {
    color?: 'primary' | 'secondary',
    height?: 'bg' | 'md'
}) => (
    {
        fontFamily: 'Nunito',
        fontWeight: '400',
        cursor: 'pointer',
        fontSize: '1.125rem',
        display: 'inline-block',
        color: (color === 'primary' ? colors.lightGrey : colors.darkViolet),
        border: (color === 'primary' ? 0 : `1px solid ${colors.darkViolet}`),
        backgroundColor: (color === 'primary' ? colors.darkViolet : 'white'),
        transition: 'all 0.15s ease-out',
        '&:hover': {
            color: colors.lightGrey,
            backgroundColor: colors.violet,
            border: '0',
            boxShadow: '0px 4px 8px 0px rgba(39, 24, 70, 0.40)'
        },
        '&:active': {
            boxShadow: '0px 3px 6px 0px rgba(39, 24, 70, 0.60)'
        },
        height: (height === 'bg' ? sizes.heightBg : sizes.heightMd),
        borderRadius: (height === 'bg' ? sizes.radiusBg : sizes.radiusMd)
    }));

export default CommonButton;