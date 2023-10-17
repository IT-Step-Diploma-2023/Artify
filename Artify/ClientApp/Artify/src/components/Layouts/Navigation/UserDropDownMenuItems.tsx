import { Typography, MenuItem } from "@mui/material";
import { t } from "i18next";


/* #region styles */
const userFullNameText = {
    margin: '10px auto',
    fontWeight: '600',
    caret: 'transparent',
    cursor: 'default'
}
/* #endregion */

const UserDropdownMenuItems = ({
    username,
    handleClick
}: {
    username: string,
    handleClick: (path: string) => void
}
) => {
    if (username !== "")
        return <>
            <Typography
                textAlign="center"
                style={userFullNameText}>{username}</Typography >
            <MenuItem
                key={'workPrefs'}
                onClick={() => { handleClick('/portfolio') }}>
                {t('headerComponent.dropdownMenu.workPrefs')}
            </MenuItem>
            <MenuItem divider
                key={'settings'}
                onClick={() => { handleClick('/settings-basicinfo') }}>
                {t('headerComponent.dropdownMenu.settings')}
            </MenuItem>
            <MenuItem
                key={'logout'}
                onClick={() => { handleClick('/logout') }}>
                {t('headerComponent.dropdownMenu.logоut')}
            </MenuItem>
        </>
    return <>
        <MenuItem divider
            key={'login'}
            onClick={() => { handleClick('/login') }}>
            {t('headerComponent.dropdownMenu.login')}
        </MenuItem>
        <MenuItem
            key={'register'}
            onClick={() => { handleClick('/select-register') }}>
            {t('headerComponent.dropdownMenu.register')}
        </MenuItem>
    </>
}

export default UserDropdownMenuItems;