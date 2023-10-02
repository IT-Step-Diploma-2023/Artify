import { SvgIcon } from "@mui/material";

const PlusIcon = ({ size, color }: { size?: string, color?: string }): JSX.Element => {
    if (size === undefined) size = '44px'
    if (color === undefined) color = 'grey'
    return <>
        <SvgIcon sx={{ width: size, height: size }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}>
                <circle cx="22" cy="22" r="21" strokeWidth="2" stroke='currentcolor' />
                <path fillRule="evenodd" clipRule="evenodd" d="M23 23V30C23 30.2652 22.8946 30.5196 22.7071 30.7071C22.5196 30.8946 22.2652 31 22 31C21.7348 31 21.4804 30.8946 21.2929 30.7071C21.1054 30.5196 21 30.2652 21 30V23H14C13.7348 23 13.4804 22.8946 13.2929 22.7071C13.1054 22.5196 13 22.2652 13 22C13 21.7348 13.1054 21.4804 13.2929 21.2929C13.4804 21.1054 13.7348 21 14 21H21V14C21 13.7348 21.1054 13.4804 21.2929 13.2929C21.4804 13.1054 21.7348 13 22 13C22.2652 13 22.5196 13.1054 22.7071 13.2929C22.8946 13.4804 23 13.7348 23 14V21H30C30.2652 21 30.5196 21.1054 30.7071 21.2929C30.8946 21.4804 31 21.7348 31 22C31 22.2652 30.8946 22.5196 30.7071 22.7071C30.5196 22.8946 30.2652 23 30 23H23Z" fill='currentcolor' />
            </svg>
        </SvgIcon>
    </>
}

export default PlusIcon;