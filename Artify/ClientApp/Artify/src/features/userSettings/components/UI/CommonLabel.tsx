import { styled } from "@mui/material";
import { colors } from "../../../../assets/defaults/colors";

const CommonLabel = styled('label')(({ htmlFor }: { htmlFor: string }) => ({
    htmlFor: { htmlFor },
    color: colors.darkViolet,
    fontWeight: '700',
    display: 'inline-block',
    paddingLeft: '1.5rem',
    paddingBottom: '0.75rem'
}));

export default CommonLabel;