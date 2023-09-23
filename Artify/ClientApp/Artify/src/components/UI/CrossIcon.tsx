import { SvgIcon } from "@mui/material";

const CrossIcon = ({id}:{id?:string}): JSX.Element => {
    return <>
        <SvgIcon id={id} sx={{ width: 19, height: 19, cursor: 'pointer' }}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="basil:cross-outline">
                    <path id="Vector" d="M6.7002 12.2985L12.2989 6.70142M6.7002 6.70142L12.2989 12.2985" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </g>
            </svg>
        </SvgIcon>
    </>
}

export default CrossIcon;