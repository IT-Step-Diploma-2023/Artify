import { Avatar, Box, Checkbox, ImageListItem, Typography } from "@mui/material";
import { IShot } from "../../../assets/interfaces/shotsInterfaces";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { baseUrl, baseUrlApi } from "../../../assets/defaults/urls";
import { appreciateShot } from "../../../hooks/useShots";
import { useEffect, useState } from "react";


/* #region styles */
const shotThumbnail = {
    width: '100%',
    aspectRatio: '1.4',
    borderRadius: 10,
    boxShadow: '0px 4px 8px 0px #27184666',
    cursor: "pointer"
}

const logoNameContainer = {
    cursor: "pointer",
}

const authorLogo = {
    float: 'left',
    marginTop: '0.4375rem',
    width: '1.25rem',
    height: '1.25rem',
    transition: "all 0.15s ease-out",
    "&:hover": {
        boxShadow: "2px 2px 4px 0px rgba(39, 24, 70, 0.20)"
    },
    "&:active": {
        boxShadow: "1px 1px 6px 0px rgba(39, 24, 70, 0.40)"
    },
}

const authorFullName = {
    float: 'left',
    fontSize: '0.875rem',
    fontWeight: 700,
    padding: '0.4375rem 0 0 0.4375rem',
    caretColor: "transparent",
    transition: "all 0.15s ease-out",
    "&:hover": {
        transform: "translate(0px, 1px)"
    },
}
/* #endregion */

const ShotThumbnail = ({
    shot,
    openModalHandler,
    isUserLoggedIn,
    navigateToPortfolio
}: {
    shot: IShot,
    openModalHandler: ((shot: IShot) => void),
    isUserLoggedIn: boolean,
    navigateToPortfolio: (shotAuthorId: number) => void
}) => {

    const [appreciated, setAppreciated] = useState<boolean | undefined>(() => {
        return shot.appreciatedByCurrentUser;
    });

    useEffect(() => {
        setAppreciated(shot.appreciatedByCurrentUser);
    }, [shot])

    return <ImageListItem >
        <img
            style={shotThumbnail}
            src={baseUrl + shot.cover}
            alt={shot.title}
            loading="lazy"
            onClick={() => openModalHandler(shot)} />
        <Box>
            <Box sx={logoNameContainer}
                onClick={() => navigateToPortfolio(shot.userId)} >
                <Box sx={{ verticalAlign: 'center', marginRight: 'auto' }}>
                    <Avatar sx={authorLogo}
                        alt={shot.userFullName}
                        src={shot.logoImage !== "" ?
                            baseUrlApi + shot.logoImage :
                            "images/default_profile.png"} />
                </Box>
                <Typography sx={authorFullName}>{shot.userFullName} //{shot.id}</Typography>
            </Box>
            <Typography sx={{ float: 'right', fontSize: '0.875rem', fontWeight: 400, color: '#9E9AA2', padding: '0.4375rem 0 0 0.4375rem' }}>{shot.appreciationsCount}</Typography>
            <Box>
                <Checkbox checked={appreciated} icon={<FavoriteBorder sx={{ color: '#9E9AA2', width: '1rem' }} />} checkedIcon={<Favorite sx={{ color: '#D65353', width: '1rem' }} />}
                    sx={{ width: '18px', height: '18px', float: 'right', marginTop: '0.4375rem' }}
                    onChange={() => {
                        if (isUserLoggedIn) {
                            if (setAppreciated) {
                                void appreciateShot(shot.id, setAppreciated);
                                shot.appreciatedByCurrentUser = !shot.appreciatedByCurrentUser;
                                shot.appreciatedByCurrentUser ? shot.appreciationsCount++ : shot.appreciationsCount--;
                            }
                        }
                    }} />
            </Box>
        </Box>
    </ImageListItem>
};

export default ShotThumbnail;