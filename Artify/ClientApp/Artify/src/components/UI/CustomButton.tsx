import { styled } from "@mui/material/styles";
import { sizes } from "../../assets/defaults/sizes";


const CustomButton = styled('button')(
    ({ height }: { height?: 'bg' | 'md' }) => ({
        fontFamily: 'Nunito',
        fontWeight: '400',
        cursor: 'pointer',
        fontSize: '1.125rem',
        display: 'inline-block',
        transition: 'all 0.15s ease-out',
        height: height === 'bg' ? sizes.heightBg : sizes.heightMd,
        borderRadius: height === 'bg' ? sizes.radiusBg : sizes.radiusMd,
    })
);

export default CustomButton;



