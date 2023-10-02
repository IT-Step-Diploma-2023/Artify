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
    coverEditActive: boolean,
    setCoverEditActive: React.Dispatch<React.SetStateAction<boolean>>,
    closeModalHandler: () => void,
    submitHandler: (event: React.FormEvent<HTMLFormElement>) => void,

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
                {!coverEditActive &&
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
                        <Box
                            sx={cover}
                            style={{
                                backgroundImage: files.length > 0 ? "url('" + (URL.createObjectURL(files[0])) + "')" : 'none'
                            }}>
                        </Box>
                        <Box sx={editMenu}
                            onClick={() => {
                                setCoverEditActive(true);
                                console.log("edit")
                            }}>
                            {editIcon}
                            <Typography sx={editMenuText}>
                                {editCoverCaption}
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
                {coverEditActive &&
                    <Box sx={container} id="step2">
                        <Box sx={editMenu}
                            onClick={() => {
                                setCoverEditActive(false)
                                console.log("edit")
                            }}>
                            {editIcon}
                            <Typography sx={editMenuText}>
                                back
                            </Typography>
                        </Box>
                        <Box style={btnWrapper}>
                            <CustomButton height="md"
                                sx={BtnStyles.lightGreyBtn}
                                style={btnStyle}
                                onClick={() => console.log("cancelCover")}>
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