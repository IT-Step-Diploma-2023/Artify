import { styled } from "@mui/material/styles";
import { sizes } from "../../assets/defaults/sizes";
import { colors } from "../../assets/defaults/colors";

const positionHover = '0px 4px 8px 0px ';
const positionActive = '0px 3px 8px 0px ';

const colorValid = 'rgba(39, 24, 70, 0.60)';
const colorInvalid = 'rgba(214, 83, 83, 0.4)';

const CommonTextArea = styled('textarea')(({
    color,
    borderRaius,
    rows,
    cols,
    isValid,
    autocomplete
}: {
    color?: 'primary' | 'secondary',
    borderRaius?: 'bg' | 'md',
    rows?: number,
    cols?: number,
    isValid?: boolean,
    autocomplete?: "on" | "off"
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
        padding: '12px 24px',
        rows: { rows },
        cols: { cols },
        resize: 'none',
        transition: 'all 0.15s ease-out',
        '&:hover': {
            boxShadow: ((isValid || isValid === undefined) ? positionHover + colorValid : positionHover + colorInvalid),
        },
        '&:active': {
            boxShadow: ((isValid || isValid === undefined) ? positionActive + colorValid : positionActive + colorInvalid)
        },
        borderRadius: (borderRaius === 'bg' ? sizes.radiusBg : sizes.radiusMd)
    }));

export default CommonTextArea;