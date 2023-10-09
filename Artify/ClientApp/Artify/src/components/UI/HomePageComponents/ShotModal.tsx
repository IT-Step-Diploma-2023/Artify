import { Avatar, Box, CircularProgress, Modal, Typography, Divider } from "@mui/material";
import * as pageStyles from "../../../pages/UserProfilePages/SharePageStyles"
import * as BtnStyles from "../CustomButtonStyles"
import CustomButton from "../CustomButton";
import { TFunction } from "i18next";
import { colors } from "../../../assets/defaults/colors";
import { effects } from "../../../assets/defaults/effects";
import { useState } from "react";
import { IShot } from "../HomeImageList";


/* #region styles */
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

const header = {
    width: "100%",
    height: "50px",
    verticalAlign: 'center'
}

const avatar = {
    float: 'left',
    width: "50px",
    height: "50px"
}

const headerText = {
    float: "left",
    fontSize: "1.875rem",
    fontFamily: "Nunito",
    display: "inline-block",
    marginLeft: "30px",
    lineHeight: "50px"
}

const footer = {
    position: 'fixed',
    bottom: '75px',
    right: "100px",
    left: "100px"
}

const footerText = {
    fontSize: "2.375rem",
    fontFamily: "Sofia Sans",
    lineHeight: "45px",
    display: "block",
    marginTop: "75px"
}

const scrollContainer = {
    height: "calc(100% - 236px)",
    boxSizing: "border-box",
    overflowY: "auto",
    margin: "50px 203px 0",
    padding: "16px",
    "$::-webkit-scrollbar": {
        display: "none"
    },
    // scrollbarWidth: "none",
    // msOverflowStyle: "none",
};

const textBlock = {
    backgroundColor: colors.white,
    boxSizing: "border-box",
    caretColor: "transparent",
    padding: "98px 145px",
    fontHeight: "1.25rem",
    lineHeight: "179%"
};

const iconButtonsContainer = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const iconButton = {
    width: "36px",
    height: "36px",
    boxSizing: "border-box",
    margin: "0 20px",
    border: "1px solid " + colors.grey,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

/* #endregion */

const ViewShotModal = (
    t: TFunction<"translation", undefined>,
    openModal: boolean,
    closeModalHandler: () => void,
    shot: IShot | undefined
) => {



    /* #region localisation const */

    /* #endregion */


    if (shot === undefined) return <></>
    shot.gap = 16;
    shot.description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque nulla voluptas facere. Doloremque ipsam animi quod expedita repudiandae natus reprehenderit voluptatem non totam unde, tenetur velit ex commodi tempora temporibus! Molestiae odit dicta ipsam consectetur! Numquam exercitationem dolor veritatis neque magni modi ad praesentium totam ullam ratione deleniti debitis sunt odit voluptatum maiores corporis, ducimus id perspiciatis quisquam dolorem earum?"
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
                    padding: "100px 100px 75px 100px"
                }}>
                <Box sx={header} >
                    <Avatar sx={avatar}
                        alt={shot.userFullName}
                        src="images/default_profile.png"
                    />
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
                    >
                        {t("shotDetails.buttonText")}
                    </CustomButton>
                </Box>
                <Box sx={scrollContainer}>
                    {shot.thumbnailsPaths.map((image) =>
                        <Box key={shot.thumbnailsPaths.indexOf(image)}>
                            <img
                                src={image}
                                alt={shot.title + " - зображення " + (shot.thumbnailsPaths.indexOf(image) + 1).toString()}
                                style={{
                                    width: "100%",
                                    marginBottom: (shot.gap.toString() + "px"),
                                    boxShadow: "4px 4px 13px 0px rgba(0, 0, 0, 0.60)",
                                    borderRadius: "10px"
                                }} />
                        </Box>
                    )}
                    <Box sx={textBlock} >
                        {shot.description.split('\n').map((row) =>
                        (row !== "" ?
                            <p key={Math.random()}>{row}</p> :
                            <br key={Math.random()} />)
                        )}
                    </Box>
                    <Box sx={iconButtonsContainer}>
                        <Box sx={iconButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M14.475 4.28251C14.1307 3.93451 13.7207 3.65848 13.2688 3.47049C12.8168 3.28249 12.332 3.1863 11.8425 3.18751C11.353 3.1863 10.8682 3.28249 10.4162 3.47049C9.96425 3.65848 9.55422 3.93451 9.20998 4.28251L8.99998 4.50001L8.78998 4.29001C8.09376 3.59386 7.14953 3.20278 6.16498 3.20278C5.18043 3.20278 4.2362 3.59386 3.53998 4.29001C2.85288 4.99099 2.46802 5.93344 2.46802 6.91501C2.46802 7.89658 2.85288 8.83903 3.53998 9.54001L8.61748 14.6325C8.72295 14.7379 8.86592 14.797 9.01498 14.797C9.16405 14.797 9.30701 14.7379 9.41248 14.6325L14.49 9.54001C15.1773 8.83673 15.5609 7.89159 15.5581 6.90819C15.5553 5.9248 15.1663 4.98186 14.475 4.28251Z" fill={colors.violet} />
                            </svg>
                        </Box>
                        <Box sx={iconButton} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M9.00009 14.8128C8.85096 14.8127 8.70798 14.7534 8.60259 14.6478L3.52509 9.55535C2.83799 8.85437 2.45313 7.91192 2.45312 6.93035C2.45313 5.94878 2.83799 5.00633 3.52509 4.30535C4.22131 3.6092 5.16554 3.21812 6.15009 3.21812C7.13464 3.21812 8.07887 3.6092 8.77509 4.30535L9.00009 4.50035L9.21009 4.29035C9.55432 3.94235 9.96436 3.66631 10.4163 3.47832C10.8683 3.29033 11.3531 3.19414 11.8426 3.19535C12.3316 3.19316 12.8161 3.28817 13.268 3.47486C13.7199 3.66155 14.1302 3.9362 14.4751 4.28285C15.1622 4.98383 15.5471 5.92628 15.5471 6.90785C15.5471 7.88942 15.1622 8.83187 14.4751 9.53285L9.39759 14.6253C9.34731 14.6817 9.2862 14.7273 9.21791 14.7595C9.14962 14.7917 9.07554 14.8099 9.00009 14.8128ZM6.15759 4.31285C5.81696 4.31037 5.47921 4.37537 5.16384 4.50409C4.84846 4.63282 4.56169 4.82272 4.32009 5.06285C3.83324 5.55197 3.55993 6.21399 3.55993 6.9041C3.55993 7.59421 3.83324 8.25623 4.32009 8.74535L9.00009 13.4553L13.6726 8.76035C13.9146 8.51865 14.1065 8.23162 14.2375 7.91569C14.3684 7.59975 14.4358 7.2611 14.4358 6.9191C14.4358 6.5771 14.3684 6.23844 14.2375 5.92251C14.1065 5.60657 13.9146 5.31955 13.6726 5.07785C13.4329 4.83727 13.1475 4.647 12.8333 4.51821C12.519 4.38942 12.1822 4.3247 11.8426 4.32785C11.502 4.32537 11.1642 4.39037 10.8488 4.51909C10.5335 4.64782 10.2467 4.83772 10.0051 5.07785L9.39759 5.68535C9.29029 5.78716 9.14801 5.84392 9.00009 5.84392C8.85217 5.84392 8.70989 5.78716 8.60259 5.68535L7.99509 5.07785C7.75472 4.83502 7.46851 4.64234 7.15308 4.51102C6.83765 4.3797 6.49927 4.31234 6.15759 4.31285Z" fill="#9E9AA2" />
                            </svg>
                        </Box>
                    </Box>
                </Box>
                <Box sx={footer}>
                    <Divider sx={{ paddingTop: "16px" }} />
                    <Typography sx={footerText}>
                        {t("shotDetails.footerText")}
                    </Typography>
                </Box>
            </Box>
        </Modal>
    </Box>;
}


export default ViewShotModal;