import { Box } from "@mui/material";
import { TFunction } from "i18next";
import { NavLink } from "react-router-dom";
import classes from './ProfileMenu.module.css'


const ProfileMenu = ({ translation }: { translation: TFunction<"translation", undefined> }) => {

    const pages = [
        translation('accountPage2.portfolio'),
        translation('accountPage2.about'),
        translation('accountPage2.saved'),
        translation('accountPage2.likedIt'),
        translation('accountPage2.subscriptions')
      ];

    const pathes = [
        '/portfolio',
        '/about',
        '/saved',
        '/liked',
        '/subscriptions',
      ]

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '32.5rem', justifyContent: 'center', margin: 'auto', marginBottom: '1rem' }}>
            {pages.map((page) => (
                <NavLink
                    key={page}
                    to={pathes[pages.indexOf(page)]}
                    className={({ isActive }) => (isActive ? classes['link-active'] : classes['link'])}
                >
                    {page}
                </NavLink>
            ))}
        </Box>
    </>
}

export default ProfileMenu