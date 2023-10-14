import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import * as BtnStyles from "../CustomButtonStyles"
import CustomButton from "../CustomButton";
import { colors } from "../../../assets/defaults/colors";
import { editIcon } from "./editIcon";
import { effects } from "../../../assets/defaults/effects";
import { useState } from "react";
import { baseUrl } from "../../../assets/defaults/urls";
import { useTranslation } from "react-i18next";



/* #region styles */

const container = {
    width: "100%",
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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

const PublicateModal = ({

    files,
    openModal,
    closeModalHandler,
    addImageHandler,
    setCover,
    coverFile
}: {
    files: File[],
    openModal: boolean,
    closeModalHandler: () => void,
    addImageHandler: () => void,
    setCover?: React.Dispatch<React.SetStateAction<File | undefined>>,
    coverFile?: File
}
) => {
    /* #region localisation const */
    const { t } = useTranslation();

    const coverCaption = t("share.publicate.coverCaption");
    const edit = t("share.publicate.edit");
    const saveDraft = t("share.publicate.saveDraft");
    const publicateProject = t("share.publicate.publiсateProject");
    const editCoverCaption = t("share.publicate.editCoverCaption");
    const saveCover = t("share.publicate.saveCover");
    const cancelCover = t("share.publicate.cancelCover");
    const progressMessage = t("share.publicate.progressMessage");
    const progressExplane = t("share.publicate.progressExplane");
    /* #endregion */

    const [tempCover, setTempCover] = useState<File>();
    (coverFile !== undefined && tempCover === undefined) && setTempCover(coverFile);
    const [coverEditActive, setCoverEditActive] = useState(false);
    const [progressActive, setProgressActive] = useState(false);

    const plusIcon =
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" color="inherit">
            <path d="M8.00065 3.33301V12.6663M3.33398 7.99967H12.6673" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    return <Box id="modaParent">
        <Modal
            open={openModal}
            onClose={() => {
                setProgressActive(false);
                setTempCover(coverFile);
                closeModalHandler();
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {
                !progressActive ?
                    <Box
                        sx={modal}
                        style={{
                            width: "480px",
                            padding: "48px 42px 54px"
                        }}>
                        {!coverEditActive ?
                            <Box sx={container} id="step1">
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    sx={{
                                        textAlign: "center",
                                        marginBottom: "24px"
                                    }}>
                                    {coverCaption}
                                </Typography>
                                {files.length > 0 ? (
                                    <Box
                                        sx={cover}
                                        style={{
                                            backgroundImage: tempCover !== undefined ?
                                                "url('" + (baseUrl + URL.createObjectURL(tempCover)) + "')" :
                                                'none'
                                        }}>
                                    </Box>
                                ) : (
                                    <Box
                                        sx={cover}
                                        style={{
                                            backgroundColor: colors.lightGrey
                                        }}>
                                    </Box>
                                )}
                                <Box sx={editMenu}
                                    onClick={() => {
                                        setCoverEditActive(true);
                                        console.log("edit")
                                    }}>
                                    {editIcon}
                                    <Typography sx={editMenuText}>
                                        {edit}
                                    </Typography>
                                </Box>
                                <Box style={btnWrapper}>
                                    <CustomButton height="md"
                                        sx={BtnStyles.greyBtn}
                                        style={btnStyle}
                                        onClick={() => console.log("saveDraft")}>
                                        {saveDraft}
                                    </CustomButton>
                                    <CustomButton height="md"
                                        sx={BtnStyles.violetBtn}
                                        style={btnStyle}
                                        onClick={() => {
                                            console.log("publicate")
                                            setProgressActive(true)
                                        }}>
                                        {publicateProject}
                                    </CustomButton>
                                </Box>
                            </Box>
                            :
                            <Box sx={container} id="step2">
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    sx={{
                                        textAlign: "center",
                                        marginBottom: "24px"
                                    }}>
                                    {editCoverCaption}
                                </Typography>
                                <Box
                                    sx={editedCover}
                                    style={{
                                        backgroundImage: tempCover !== undefined ?
                                            "url('" + (baseUrl + URL.createObjectURL(tempCover)) + "')" :
                                            'none'
                                    }}>
                                </Box>
                                <Box sx={thumbnailsContainer}>
                                    {setCover !== undefined &&
                                        files.map((file) =>
                                            <Box
                                                key={files.indexOf(file)}
                                                sx={thumbnail}
                                                style={{
                                                    backgroundImage: "url('" + (baseUrl + URL.createObjectURL(file)) + "')",
                                                    border: file.name === tempCover?.name ? "2px solid " + colors.violet : "none"
                                                }}
                                                onClick={() => {
                                                    setTempCover(file);
                                                }}>
                                            </Box>
                                        )
                                    }
                                    <Box sx={addImageBtn}
                                        onClick={() => addImageHandler()}>
                                        {plusIcon}
                                    </Box>
                                </Box>
                                <Box style={btnWrapper}>
                                    <CustomButton height="md"
                                        sx={BtnStyles.greyBtn}
                                        style={btnStyle}
                                        onClick={() => {
                                            (tempCover !== undefined && coverFile !== undefined)
                                                && setTempCover(coverFile);
                                            setCoverEditActive(false);
                                        }}>
                                        {cancelCover}
                                    </CustomButton>
                                    <CustomButton height="md"
                                        sx={BtnStyles.violetBtn}
                                        style={btnStyle}
                                        onClick={() => {
                                            (tempCover !== undefined && setCover !== undefined)
                                                && setCover(tempCover);
                                            setCoverEditActive(false);
                                        }}>
                                        {saveCover}
                                    </CustomButton>
                                </Box>
                            </Box>
                        }

                    </Box>
                    :
                    <Box sx={progressModal}>
                        <CircularProgress color="inherit" />
                        <Typography sx={{ fontSize: "1.5rem", fontWeight: "700", marginTop: "12px" }}>
                            {progressMessage}
                        </Typography>
                        <Typography sx={{ fontSize: "0.875rem", fontWeight: "400" }}>
                            {progressExplane}
                        </Typography>
                    </Box>
            }
        </Modal>
    </Box>;
}


export default PublicateModal;