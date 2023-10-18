import { Typography, MenuItem } from "@mui/material";
import { t } from "i18next";
import { colors } from "../../../assets/defaults/colors";


/* #region styles */
const userFullNameText = {
    margin: '10px 0',
    color: colors.violet,
    padding: "6px 16px",
    fontWeight: '600',
    caret: 'transparent',
    cursor: 'default'
}
/* #endregion */

const UserDropdownMenuItems = ({
    shownName,
    handleClick,
}: {
    shownName: string,
    handleClick: (path: string) => void,
}
) => {
    if (shownName !== "")
        return <>
            <Typography
                textAlign="left"
                style={userFullNameText}>{shownName}</Typography >
            <MenuItem
                onClick={() => {
                    localStorage.setItem("targetUserId", "-1");
                    if (window.location.pathname === "/portfolio") window.location.reload();
                    handleClick('/portfolio')
                }}>
                {t('headerComponent.dropdownMenu.workPrefs')}
            </MenuItem>
            <MenuItem divider
                onClick={() => handleClick('/settings-basicinfo')}>
                {t('headerComponent.dropdownMenu.settings')}
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('/logout')}>
                {t('headerComponent.dropdownMenu.logоut')}
            </MenuItem>
        </>
    return <>
        <MenuItem divider
            onClick={() => { handleClick('/login') }}>
            {t('headerComponent.dropdownMenu.login')}
        </MenuItem>
        <MenuItem
            onClick={() => { handleClick('/select-register') }}>
            {t('headerComponent.dropdownMenu.register')}
        </MenuItem>
    </>
}

export default UserDropdownMenuItems;