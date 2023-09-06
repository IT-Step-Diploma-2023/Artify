import { Box, Divider, } from "@mui/material";
import { TFunction } from "i18next";
import { NavLink } from "react-router-dom";
import classes from './ProfileMenu.module.css'

const ProfileMenu = ({ translation }: { translation: TFunction<"translation", undefined> }) => {

    const pages = [
        translation('accountPage.basicInfo'),
        translation('accountPage.profInfo'),
        translation('accountPage.socialNetworks'),
    ];


    const pathes = [
        '/profile-basicinfo',
        '/profile-profinfo',
        '/profile-networks'
    ]

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '13rem' }}>
            {pages.map((page) => (
                <NavLink
                    key={page}
                    to={pathes[pages.indexOf(page)]}
                    className={({ isActive }) => (isActive ? classes['link-active'] : classes['link'])}
                >
                    {page}
                </NavLink>
            ))}
            <Divider sx={{marginTop: '3.5rem'}}/>
            <NavLink
                key={translation('accountPage.deleteAccount')}
                to='/delete-account'
                className={({ isActive }) => (isActive ? classes['link-danger-active'] : classes['link-danger'])}
            >
                {translation('accountPage.deleteAccount')}
            </NavLink>
        </Box>
    </>
}

export default ProfileMenu