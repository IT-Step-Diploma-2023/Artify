import { styled } from "@mui/material/styles";
import { sizes } from "../../assets/defaults/sizes";
import { colors } from "../../assets/defaults/colors";


const positionHover = '0px 4px 8px 0px ';
const positionActive = '0px 3px 8px 0px ';

const colorValid = 'rgba(39, 24, 70, 0.60)';
const colorInvalid = 'rgba(214, 83, 83, 0.4)';

const CommonSelect = styled('select')(({ color, height, isValid }: {
    color?: 'primary' | 'secondary',
    height?: 'bg' | 'md',
    isValid?: boolean
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
        borderColor: ((isValid || isValid === undefined) ? (color === 'primary' ? colors.grey : colors.darkViolet) : colors.red),
        backgroundColor: (color === 'primary' ? 'white' : colors.lightGrey),
        padding: '0 24px',
        transition: 'all 0.15s ease-out',
        '&:hover': {
            boxShadow: ((isValid || isValid === undefined) ? positionHover + colorValid : positionHover + colorInvalid),
        },
        '&:active': {
            boxShadow: ((isValid || isValid === undefined) ? positionActive + colorValid : positionActive + colorInvalid)
        },
        height: (height === 'bg' ? sizes.heightBg : sizes.heightMd),
        borderRadius: (height === 'bg' ? sizes.radiusBg : sizes.radiusMd)
    }));

export default CommonSelect;