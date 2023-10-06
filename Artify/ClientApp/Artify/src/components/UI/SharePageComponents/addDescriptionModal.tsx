import { Box, Modal, Typography } from "@mui/material";
import * as pageStyles from "../../../pages/UserProfilePages/SharePageStyles"
import * as BtnStyles from "../CustomButtonStyles"
import CommonTextArea from "../CommonTextArea";
import CustomButton from "../CustomButton";

const addDescriptionModal = (
    openDescriptionModal: boolean,
    closeDescriptionModalHandler: () => void,
    addDescription: (event: React.FormEvent<HTMLFormElement>) => void,
    descriptionCaption: string,
    descriptionText: string,
    description: string,
    myContinue: string
) => {
    return <Box id="modaParent">
        <Modal
            open={openDescriptionModal}
            onClose={closeDescriptionModalHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={pageStyles.modal}
                style={{ width: 600 }}
                component="form"
                onSubmit={addDescription}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        textAlign: "center",
                        marginBottom: "24px"
                    }}>
                    {descriptionCaption}
                </Typography>
                <CommonTextArea
                    sx={{ width: '100%', marginBottom: "24px" }}
                    color='primary'
                    borderRaius='bg'
                    rows={6}
                    title="description"
                    id="description"
                    name="description"
                    placeholder={descriptionText}
                    defaultValue={description}
                    aria-label="description"
                    autocomplete="off">
                </CommonTextArea>
                <CustomButton height="bg"
                    type="submit"
                    sx={BtnStyles.violetBtn}
                    style={{
                        display: "block",
                        width: "200px",
                        margin: "8px auto 18px"
                    }}>
                    {myContinue}
                </CustomButton>
            </Box>
        </Modal>
    </Box>;
}


export default addDescriptionModal;