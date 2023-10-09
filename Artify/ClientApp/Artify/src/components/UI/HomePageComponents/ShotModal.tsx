import { Avatar, Box, CircularProgress, Modal, Typography } from "@mui/material";
import * as pageStyles from "../../../pages/UserProfilePages/SharePageStyles"
import * as BtnStyles from "../CustomButtonStyles"
import CustomButton from "../CustomButton";
import { TFunction } from "i18next";
import { colors } from "../../../assets/defaults/colors";
import { effects } from "../../../assets/defaults/effects";
import { useState } from "react";
import { IShot } from "../HomeImageList";


const ViewShotModal = (
    t: TFunction<"translation", undefined>,
    openModal: boolean,
    closeModalHandler: () => void,
    shot: IShot | undefined
) => {



    /* #region localisation const */

    /* #endregion */

    /* #region styles */

    const header = {
        width: "100%",
        height: "50px",
        verticalAlign: 'center',
        backgroundColor: "grey"
    }

    const avatar = {
        float: 'left',
        width: "50px",
        height: "50px"
    }

    const headerText = {
        float: "left",
        fontSize: "1.875rem",
        fontStyle: "Nunito",
        display: "inline-block",
        marginLeft: "30px",
        lineHeight: "50px"
    }

    const footer = {
        position: 'fixed',
        bottom: '80px',
        height: "120px",
        backgroundColor: "grey",
        with: "100%",
    }
    
    const footerText = {
        fontSize: "2.375rem",
        fontFamily: "Sofia Sans"
    }

    const container = {
        height: "calc(100% - 50px)",
        boxSizing: "border-box",
        overflowY: "auto"
    };

    const cover = {
        width: "280px",
        height: "200px",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "auto"
    };

    const editedCover = {
        width: "370px",
        height: "200px",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "auto"
    };

    const modal = {
        position: 'absolute',
        top: '64px',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderRadius: "30px",
        bgcolor: colors.white,
        boxShadow: 24,
        p: 4,
    };

    const progressModal = {
        width: "400px",
        height: "240px",
        backgroundColor: colors.violet,
        margin: "auto",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: "30px",
        boxShadow: 24,
        p: 4,
        color: colors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        caretColor: "transparent"
    };

    const thumbnailsContainer = {
        display: "flex",
        width: "394px",
        margin: "auto",
        overflowX: "auto",
        padding: "12px"
    };

    const addImageBtn = {
        width: "84px",
        height: "60px",
        backgroundColor: colors.grey,
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: colors.violet,
        marginBottom: "12px",
        caretColor: "transparent",
        cursor: "pointer",
        transition: effects.transitionA,
        "&:hover": {
            boxShadow: effects.shadowVioletHover
        },
        "&:active": {
            boxShadow: effects.shadowVioletActive
        },

    };

    const thumbnail = {
        width: "84px",
        height: "60px",
        borderRadius: "4px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "12px",
        marginBottom: "12px",
        caretColor: "transparent",
        cursor: "pointer",
        transition: effects.transitionA,
        "&:hover": {
            boxShadow: effects.shadowVioletHover
        },
        "&:active": {
            boxShadow: effects.shadowVioletActive
        },
    };

    const editMenu = {
        padding: "10px 22px",
        width: "fit-content",
        margin: "12px auto 0",
        color: colors.violet,
        cursor: "pointer",
    };

    const editMenuText = {
        caretColor: "transparent",
        display: "inline-block",
        width: "100px",
        paddingLeft: "12px"
    };

    const btnWrapper = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "60px"
    };

    const btnStyle = {
        display: "block",
        padding: "1px 24px",
        fontSize: "0.875rem"
    };
    /* #endregion */


    if (shot === undefined) return <></>
    console.log(shot);
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
                    height: "calc(100vh - 128px)",
                    padding: "100px 100px 80px 100px"
                }}>
                <Box
                    sx={header}
                // style={{ verticalAlign: 'center', marginRight: 'auto' }}
                >
                    <Avatar sx={avatar}
                        alt={shot.userFullName}
                        src="images/default_profile.png"
                    />
                    <Typography sx={headerText}>{shot.title}</Typography>
                </Box>
                <Box sx={container}>
                    {shot.thumbnailsPaths.map((image) =>
                        <Box key={shot.thumbnailsPaths.indexOf(image)}>
                            <Box >
                                <img
                                    src={image}
                                    alt={shot.title + " - зображення " + (shot.thumbnailsPaths.indexOf(image) + 1).toString()}
                                    style={{ width: "100%" }}
                                />
                            </Box>
                        </Box>
                    )}
                </Box>
                <Box sx={footer}>
                    <Typography sx={footerText}>
                        переглянути більше робіт //
                    </Typography>
                </Box>
            </Box>
        </Modal>
    </Box>;
}


export default ViewShotModal;