import { Box, Modal, Typography } from "@mui/material";
import * as pageStyles from "../../../pages/UserProfilePages/SharePageStyles"
import * as BtnStyles from "../CustomButtonStyles"
import CommonTextArea from "../CommonTextArea";
import CustomButton from "../CustomButton";
import { TFunction } from "i18next";
import { colors } from "../../../assets/defaults/colors";
import { editIcon } from "./editIcon";



const publicateModal = (
    t: TFunction<"translation", undefined>,
    files: File[],
    openModal: boolean,
    editActive: boolean,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>,
    closeModalHandler: () => void,
    coverFile?: File,
) => {

    /* #region localisation const */
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

    /* #region styles */

    const container = {
        width: "100%",
    }

    const cover = {
        width: "280px",
        height: "200px",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "auto"
    }

    const editedCover = {
        width: "370px",
        height: "200px",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "auto"
    }

    const thumbnailsContainer = {
        display: "flex",
        width: "370px",
        backgroundColor: "blue",
        margin: "auto",
        marginTop: "12px",
        overflowX: "auto"
    }

    const addImageBtn = {
        width: "84px",
        height: "60px",
        backgroundColor: colors.grey,
        borderRadius: "4px",
        textAlign: "center",
        color: colors.violet

    }

    const thumbnail = {
        width: "84px",
        height: "60px",
        borderRadius: "4px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "12px",
        border: "5px solid red",
    }

    const editMenu = {
        padding: "10px 22px",
        width: "fit-content",
        margin: "12px auto 0",
        color: colors.violet,
        cursor: "pointer",
    }

    const editMenuText = {
        caretColor: "transparent",
        display: "inline-block",
        width: "100px",
        paddingLeft: "12px"
    }

    const btnWrapper = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "60px"
    }

    const btnStyle = {
        display: "block",
        padding: "1px 24px",
        fontSize: "0.875rem"
    }
    /* #endregion */

    const plusIcon =
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" color="inherit">
            <path d="M8.00065 3.33301V12.6663M3.33398 7.99967H12.6673" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    return <Box id="modaParent">
        <Modal
            open={openModal}
            onClose={closeModalHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={pageStyles.modal}
                style={{
                    width: "480px",
                    padding: "48px 48px 54px"
                }}>
                {!editActive &&
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
                        {files.length > 0 && (
                            <Box
                                sx={cover}
                                style={{
                                    backgroundImage: coverFile !== undefined ?
                                        "url('" + (URL.createObjectURL(coverFile)) + "')" :
                                        'none'
                                }}>
                            </Box>
                        )}
                        <Box sx={editMenu}
                            onClick={() => {
                                setEditActive(true);
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
                                onClick={() => console.log("publicate")}>
                                {publicateProject}
                            </CustomButton>
                        </Box>
                    </Box>
                }
                {editActive &&
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
                                backgroundImage: coverFile !== undefined ?
                                    "url('" + (URL.createObjectURL(coverFile)) + "')" :
                                    'none'
                            }}>
                        </Box>
                        <Box sx={thumbnailsContainer}>
                            {files.map((file) => 
                            
                            <Box 
                            key={files.indexOf(file)}
                            sx={thumbnail}
                            style={{
                                backgroundImage: "url('" + (URL.createObjectURL(file)) + "')"
                            }}>
                            </Box>
                            )}
                            <Box sx={addImageBtn}>
                                {plusIcon}
                            </Box>
                        </Box>
                        <Box style={btnWrapper}>
                            <CustomButton height="md"
                                sx={BtnStyles.lightGreyBtn}
                                style={btnStyle}
                                onClick={() => {
                                    setEditActive(false);
                                    console.log("cancelCover");
                                }}>
                                {cancelCover}
                            </CustomButton>
                            <CustomButton height="md"
                                sx={BtnStyles.violetBtn}
                                style={btnStyle}
                                onClick={() => console.log("saveCover")}>
                                {saveCover}
                            </CustomButton>
                        </Box>
                    </Box>
                }
            </Box>
        </Modal>
    </Box>;
}


export default publicateModal;