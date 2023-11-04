import { Avatar, Box, Checkbox, ImageListItem, Typography } from "@mui/material";
import { IShot } from "../../../assets/interfaces/shotsInterfaces";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { baseUrl } from "../../../assets/defaults/urls";
import { appreciateShot } from "../../../hooks/useShots";

export const ShotThumbnail = ({
    shot,
    openModalHandler,
    isUserLoggedIn
}: {
    shot: IShot,
    openModalHandler: ((shot: IShot) => void),
    isUserLoggedIn: boolean
}) => {
    return <ImageListItem>
        <img
            style={{ width: '100%', aspectRatio: '1.4', borderRadius: 10, boxShadow: '0px 4px 8px 0px #27184666' }}
            src={baseUrl + shot.cover}
            alt={shot.title}
            loading="lazy"
            onClick={() => openModalHandler(shot)} />
        <Box>
            <Box sx={{ verticalAlign: 'center', marginRight: 'auto' }}>
                <Avatar sx={{ float: 'left', marginTop: '0.4375rem', width: '1.25rem', height: '1.25rem' }}
                    alt={shot.userFullName}
                    src={shot.logoImage !== "" ?
                        baseUrl + shot.logoImage :
                        "images/default_profile.png"} />
            </Box>
            <Typography sx={{ float: 'left', fontSize: '0.875rem', fontWeight: 700, padding: '0.4375rem 0 0 0.4375rem' }}>{shot.userFullName}</Typography>
            <Typography sx={{ float: 'right', fontSize: '0.875rem', fontWeight: 400, color: '#9E9AA2', padding: '0.4375rem 0 0 0.4375rem' }}>{shot.appreciationsCount}</Typography>
            <Box>
                <Checkbox checked={shot.appreciatedByCurrentUser} icon={<FavoriteBorder sx={{ color: '#9E9AA2', width: '1rem' }} />} checkedIcon={<Favorite sx={{ color: '#D65353', width: '1rem' }} />}
                    sx={{ width: '18px', height: '18px', float: 'right', marginTop: '0.4375rem' }}
                    onChange={() => {
                        if (isUserLoggedIn)
                            void appreciateShot(shot);
                    }} />
            </Box>
        </Box>
    </ImageListItem>
};

export default ShotThumbnail;