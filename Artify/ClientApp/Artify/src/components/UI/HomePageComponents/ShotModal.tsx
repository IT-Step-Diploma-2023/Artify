import { Avatar, Box, Modal, Typography, Divider, Grid } from "@mui/material";
import * as BtnStyles from "../CustomButtonStyles"
import CustomButton from "../CustomButton";
import { TFunction } from "i18next";
import { colors } from "../../../assets/defaults/colors";
import { useEffect, useState } from "react";
import { IShot, IShotDetails } from "../../../assets/interfaces/shotsInterfaces";
import { appreciateShot, getShotData, isAppreciated } from "../../../hooks/useShots";
import { effects } from "../../../assets/defaults/effects";
import { useNavigate } from "react-router";
import ShotThumbnail from "./Shots";
import { scrollTo } from "../../../utils/scrollTo";
import { baseUrl } from "../../../assets/defaults/urls";
import useTargetUser from "../../../hooks/useTargetUser";


/* #region styles */
const modal = {
    outline: "none",
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translate(-50%, 0)',
    borderRadius: "30px",
    bgcolor: colors.white,
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    padding: "16px",
    "&::-webkit-scrollbar": {
        overflowY: "auto",
        display: "none"
    },
    scrollbarWidth: "none",
    msOverflowStyle: "none",
};

const content = {
    padding: "75px 0 50px"
};

const header = {
    width: "100%",
    height: "50px",
    verticalAlign: 'center'
};

const avatar = {
    float: 'left',
    width: "50px",
    height: "50px",
    "&:hover": {
        boxShadow: "2px 2px 4px 0px rgba(39, 24, 70, 0.20)"
    },
    "&:active": {
        boxShadow: "1px 1px 6px 0px rgba(39, 24, 70, 0.40)"
    },
};

const headerText = {
    float: "left",
    fontSize: "1.875rem",
    fontFamily: "Nunito",
    display: "inline-block",
    marginLeft: "30px",
    lineHeight: "50px"
};

const footer = {
    paddingTop: "80px"
};

const imagesContainer = {
    boxSizing: "border-box",
    margin: "50px 203px 0"

};

const footerText = {
    fontSize: "2.375rem",
    fontFamily: "Sofia Sans",
    lineHeight: "45px",
    display: "block",
    marginTop: "50px"
};

const textBlock = {
    backgroundColor: colors.white,
    boxSizing: "border-box",
    caretColor: "transparent",
    padding: "98px 145px",
    fontHeight: "1.25rem",
    lineHeight: "179%"
};

/* #region buttons styles */
const iconButtonsContainer = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const iconButtonLike = {
    width: "36px",
    height: "36px",
    boxSizing: "border-box",
    margin: "0 20px",
    border: "1px solid " + colors.grey,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        backgroundColor: colors.red,
        borderColor: colors.red,
        boxShadow: effects.shadowRedHover,
    },
    "&:hover svg > path:first-of-type": {
        color: colors.red

    },
    "&:hover svg > path:last-of-type": {
        color: colors.white
    },
    "&:active": {
        backgroundColor: colors.red,
        borderColor: colors.red,
        boxShadow: effects.shadowRedActive,
    }
};

const iconButtonLikeActive = {
    width: "36px",
    height: "36px",
    boxSizing: "border-box",
    margin: "0 20px",
    backgroundColor: colors.red,
    border: "1px solid " + colors.red,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        boxShadow: effects.shadowRedHover,
    },
    "&svg > path:first-of-type": {
        color: colors.violet
    },
    "&svg > path:last-of-type": {
        color: colors.white
    },
    "&:active": {
        boxShadow: effects.shadowRedActive,
    }
};

const iconButtonMark = {
    width: "36px",
    height: "36px",
    boxSizing: "border-box",
    margin: "0 20px",
    border: "1px solid " + colors.grey,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        backgroundColor: colors.violet,
        borderColor: colors.violet,
        boxShadow: effects.shadowVioletHover,
    },
    "&:hover svg > path:first-of-type": {
        color: colors.violet

    },
    "&:hover svg > path:last-of-type": {
        color: colors.white
    },
    "&:active": {
        backgroundColor: colors.violet,
        borderColor: colors.violet,
        boxShadow: effects.shadowVioletActive,
    }
}

const iconButtonMarkAtive = {
    width: "36px",
    height: "36px",
    boxSizing: "border-box",
    margin: "0 20px",
    backgroundColor: colors.violet,
    border: "1px solid " + colors.violet,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        boxShadow: effects.shadowVioletHover,
    },
    "&svg > path:first-of-type": {
        color: colors.violet

    },
    "&svg > path:last-of-type": {
        color: colors.white
    },
    "&:active": {
        boxShadow: effects.shadowVioletActive,
    }
}
/* #endregion */

const moreImagesContainer = {
    width: "100%",
    marginTop: "50px",
}

/* #endregion */

const ViewShotModal = ({ t, openModal, closeModalHandler, openModalHandler, shotId, shots }: {
    t: TFunction<"translation", undefined>,
    openModal: boolean,
    closeModalHandler: () => void,
    openModalHandler: (shot: IShot) => void,
    shotId: number,
    shots: IShot[]
}) => {

    const [shot, setShotDetails] = useState<IShotDetails>();
    const [liked, setLiked] = useState<boolean>(false);
    const [marked, setMarked] = useState<boolean>(false);

    useEffect(() => {
        void getShotData(shotId, setShotDetails)
    }, [shotId]);

    const navigate = useNavigate();

    const { setTargetUserId } = useTargetUser();

    const avatarClickHandler = () => {
        if (shot === undefined) return;
        setTargetUserId(shot.authorId);
        navigate("portfolio");
    }

    /* #region localisation const */

    /* #endregion */

    if (shot === undefined) return <></>

    console.log(shot.authorFullName)
    return <Box id="modaParent">
        <Modal
            open={openModal}
            onClose={() => {
                closeModalHandler();
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={modal}
                style={{
                    width: "calc(100% - 128px)",
                    height: "100vh",
                    padding: "0px 100px 0px 100px"
                }}>
                <Box sx={content}>
                    <Box component="div" sx={header} id="header">
                        <Avatar sx={avatar}
                            alt={shot.authorFullName}
                            title={shot.authorFullName ?
                                shot.authorFullName :
                                shot.authorUsername}
                            src={
                                shot.authorLogoImage !== "" ?
                                    baseUrl + shot.authorLogoImage :
                                    "images/default_profile.png"
                            }
                            onClick={avatarClickHandler} />
                        <Typography sx={headerText}>{shot.title}</Typography>
                        <CustomButton height="md"
                            sx={BtnStyles.darkVioletBtn}
                            style={{
                                width: "200px",
                                display: "inline-block",
                                float: "right",
                                fontSize: "0.875rem",
                                margin: "3px 0"
                            }}
                            onClick={() => scrollTo("footer")}>
                            {t("shotDetails.buttonText")}
                        </CustomButton>
                    </Box>
                    <Box sx={imagesContainer}>
                        {shot.images.map((image) =>
                            <Box key={shot.images.indexOf(image)}>
                                <img
                                    src={baseUrl + image}
                                    alt={shot.images.indexOf(image).toString()}
                                    style={{
                                        width: "100%",
                                        marginBottom: (shot.blocksGap.toString() + "px"),
                                        boxShadow: "4px 4px 13px 0px rgba(0, 0, 0, 0.60)",
                                        borderRadius: "10px"
                                    }} />
                            </Box>
                        )}
                        {shot.description !== undefined && <Box sx={textBlock} >
                            {shot.description.split('\n').map((row) =>
                            (row !== "" ?
                                <p key={Math.random()}>{row}</p> :
                                <br key={Math.random()} />)
                            )}
                        </Box>}
                        <Box sx={iconButtonsContainer}>
                            <Box sx={marked ? iconButtonMarkAtive : iconButtonMark}
                                onClick={() => setMarked(!marked)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" color={colors.grey}>
                                    <path d="M3.2002 3.8C3.2002 3.32261 3.38984 2.86477 3.7274 2.52721C4.06497 2.18964 4.52281 2 5.0002 2H11.0002C11.4776 2 11.9354 2.18964 12.273 2.52721C12.6106 2.86477 12.8002 3.32261 12.8002 3.8V13.4168C12.8002 14.1488 11.9722 14.5748 11.377 14.1494L8.0002 11.7374L4.6234 14.1494C4.0276 14.5754 3.2002 14.1494 3.2002 13.4174V3.8Z" fill={colors.white} />
                                    <path d="M3.20117 3.8C3.20117 3.32261 3.39081 2.86477 3.72838 2.52721C4.06595 2.18964 4.52378 2 5.00117 2H11.0012C11.4786 2 11.9364 2.18964 12.274 2.52721C12.6115 2.86477 12.8012 3.32261 12.8012 3.8V13.4168C12.8012 14.1488 11.9732 14.5748 11.378 14.1494L8.00117 11.7374L4.62437 14.1494C4.02857 14.5754 3.20117 14.1494 3.20117 13.4174V3.8ZM5.00117 3.2C4.84204 3.2 4.68943 3.26321 4.57691 3.37574C4.46439 3.48826 4.40117 3.64087 4.40117 3.8V12.8342L7.47797 10.6364C7.63063 10.5273 7.81356 10.4687 8.00117 10.4687C8.18879 10.4687 8.37171 10.5273 8.52437 10.6364L11.6012 12.8342V3.8C11.6012 3.64087 11.538 3.48826 11.4254 3.37574C11.3129 3.26321 11.1603 3.2 11.0012 3.2H5.00117Z" fill="currentcolor" />
                                </svg>
                            </Box>
                            <Box sx={liked ? iconButtonLike : iconButtonLikeActive}
                                onClick={() => {
                                    void appreciateShot(shot.id, !liked, setLiked)
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" color={colors.grey}>
                                    <path d="M14.475 4.28251C14.1307 3.93451 13.7207 3.65848 13.2688 3.47049C12.8168 3.28249 12.332 3.1863 11.8425 3.18751C11.353 3.1863 10.8682 3.28249 10.4162 3.47049C9.96425 3.65848 9.55422 3.93451 9.20998 4.28251L8.99998 4.50001L8.78998 4.29001C8.09376 3.59386 7.14953 3.20278 6.16498 3.20278C5.18043 3.20278 4.2362 3.59386 3.53998 4.29001C2.85288 4.99099 2.46802 5.93344 2.46802 6.91501C2.46802 7.89658 2.85288 8.83903 3.53998 9.54001L8.61748 14.6325C8.72295 14.7379 8.86592 14.797 9.01498 14.797C9.16405 14.797 9.30701 14.7379 9.41248 14.6325L14.49 9.54001C15.1773 8.83673 15.5609 7.89159 15.5581 6.90819C15.5553 5.9248 15.1663 4.98186 14.475 4.28251Z" fill={colors.white} />
                                    <path d="M9.00009 14.8128C8.85096 14.8127 8.70798 14.7534 8.60259 14.6478L3.52509 9.55535C2.83799 8.85437 2.45313 7.91192 2.45312 6.93035C2.45313 5.94878 2.83799 5.00633 3.52509 4.30535C4.22131 3.6092 5.16554 3.21812 6.15009 3.21812C7.13464 3.21812 8.07887 3.6092 8.77509 4.30535L9.00009 4.50035L9.21009 4.29035C9.55432 3.94235 9.96436 3.66631 10.4163 3.47832C10.8683 3.29033 11.3531 3.19414 11.8426 3.19535C12.3316 3.19316 12.8161 3.28817 13.268 3.47486C13.7199 3.66155 14.1302 3.9362 14.4751 4.28285C15.1622 4.98383 15.5471 5.92628 15.5471 6.90785C15.5471 7.88942 15.1622 8.83187 14.4751 9.53285L9.39759 14.6253C9.34731 14.6817 9.2862 14.7273 9.21791 14.7595C9.14962 14.7917 9.07554 14.8099 9.00009 14.8128ZM6.15759 4.31285C5.81696 4.31037 5.47921 4.37537 5.16384 4.50409C4.84846 4.63282 4.56169 4.82272 4.32009 5.06285C3.83324 5.55197 3.55993 6.21399 3.55993 6.9041C3.55993 7.59421 3.83324 8.25623 4.32009 8.74535L9.00009 13.4553L13.6726 8.76035C13.9146 8.51865 14.1065 8.23162 14.2375 7.91569C14.3684 7.59975 14.4358 7.2611 14.4358 6.9191C14.4358 6.5771 14.3684 6.23844 14.2375 5.92251C14.1065 5.60657 13.9146 5.31955 13.6726 5.07785C13.4329 4.83727 13.1475 4.647 12.8333 4.51821C12.519 4.38942 12.1822 4.3247 11.8426 4.32785C11.502 4.32537 11.1642 4.39037 10.8488 4.51909C10.5335 4.64782 10.2467 4.83772 10.0051 5.07785L9.39759 5.68535C9.29029 5.78716 9.14801 5.84392 9.00009 5.84392C8.85217 5.84392 8.70989 5.78716 8.60259 5.68535L7.99509 5.07785C7.75472 4.83502 7.46851 4.64234 7.15308 4.51102C6.83765 4.3797 6.49927 4.31234 6.15759 4.31285Z" fill="currentcolor" />
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={footer} id="footer">
                        <Divider />
                        <Typography sx={footerText}>
                            {t("shotDetails.footerText")}
                        </Typography>
                    </Box>
                    <Box sx={moreImagesContainer}  >
                        <Grid container spacing={{ xs: 2, md: 5 }} sx={{ height: "fit-content" }}>
                            {shots.map((shot) => (
                                <Grid item xs={12} md={6} lg={3} key={"inner" + shot.id.toString()}
                                    onClick={() => scrollTo("header")}>
                                    <ShotThumbnail
                                        shot={shot}
                                        openModalHandler={openModalHandler} />
                                </Grid>
                            ))}</Grid>
                    </Box>
                </Box>
            </Box>
        </Modal>
    </Box>;
}
export default ViewShotModal;