/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from "react";
import { Button } from "@mui/base/Button";
import Typography from "@mui/material/Typography";

import { Box, Divider, IconButton, Input, ListItemButton, ListItemText, Menu, MenuItem, Modal, Paper, Select, Slider, Stack } from "@mui/material";
import { ChangeEvent, FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AutorenewRounded, DeleteForeverRounded, North, South } from "@mui/icons-material";
import CommonInput from "../../components/UI/CommonInput";
import CommonLabel from "../../components/UI/UserSettingsComponents/CommonLabel";
import { colors } from "../../assets/defaults/colors";
import { effects } from "../../assets/defaults/effects";
import CrossIcon from "../../components/UI/CrossIcon";
import * as pageSyles from "./SharePageStyles";
import * as BtnStyles from "../../components/UI/CustomButtonStyles";
import CustomButton from "../../components/UI/CustomButton";
import { getAuthToken } from "../../hooks/useAuthorization";
import addDescriptionModal from "../../components/UI/SharePageComponents/addDescriptionModal";
import PublicateModal from "../../components/UI/SharePageComponents/publicateModal";
import { existedTags } from "../../assets/data/tags";
import { useNavigate } from "react-router";

interface IVisibilityOption {
  index: number,
  option: string
}

interface IUploadedData {
  title?: string,
  description?: string,
  tags?: string[],
  isPublic?: boolean,
  isDraft?: boolean,
  price?: number,
  blocksGap?: number,
  cover?: string
}

const url = "api/ShotsApi/UploadShot";
const token = getAuthToken() ?? "";

const SharePage: FunctionComponent = () => {

  const { t, i18n } = useTranslation();

  /* #region constants */
  const addToGetStarted = t("share.addToGetStarted");

  const project = t("share.project");
  const addTitle = t("share.addTitle");
  const tags = t("share.tags");
  const addTags = t("share.addTags");
  const upTo = t("share.upTo");
  const suggested = t("share.suggested");
  const visibility = t("share.visibility");
  const priceTitle = t("share.price");
  const blocksGap = t("share.blocksGap");
  const saveAsDraft = t("share.saveAsDraft");
  const myContinue = t("share.myContinue");
  const addBlock = t("share.addBlock");
  const descriptionText = t("share.description.placeholder");
  const descriptionCaption = t("share.description.caption");

  const iconText = [
    t("share.text"),
    t("share.image"),
    t("share.video")
  ]

  // const existedTags = [
  //   "design",
  //   "illustration",
  //   "ui",
  //   "logo",
  //   "branding",
  //   "graphic design",
  //   "vector",
  //   "ux",
  //   "typography",
  //   "app",
  //   "photo"
  // ]

  const visibilityOptions = [
    t("share.visibilityOptions.public"),
    t("share.visibilityOptions.private")
  ]

  /* #endregion */

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState<string>("");
  const [openDescriptionModal, setOpenDescriptionModal] = useState(false);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([...existedTags]);
  const [tagInputValue, setTagInputValue] = useState("");

  const [tagsMenuVisible, setTagsMenuVisible] = useState(false);

  const [visibylity, setVisibility] = useState<IVisibilityOption>({ index: 0, option: visibilityOptions[0] });
  const [visibilityMenuVisible, setVisibilityMenuVisible] = useState(false);

  const isDraft = useRef(false);

  console.log(isDraft.current);

  const [gap, setInterval] = useState(16);

  const [price, setPrice] = useState(0.00);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const [addBlockActive, setAddBlockActive] = useState(false);

  const addBlockRef = useRef(null);
  const [openPublicateModal, setOpenPublicateModal] = useState(false);

  const [cover, setCover] = useState<File>();

  useEffect(() => {
    const index = visibylity.index;
    setVisibility({ index: index, option: visibilityOptions[index] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage]);

  useEffect(() => {
    if (addBlockActive && addBlockRef.current !== null) {
      (addBlockRef.current as HTMLDivElement).scrollIntoView()
    }
  }, [addBlockActive])

  /* #region just not in use */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  /* #endregion */

  /* #region tags handlers */

  const tagItemClickHandler = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.stopPropagation();
    const newTag = e.currentTarget.innerText;
    if (selectedTags.length === 10) return;
    if ((selectedTags.find((tag) => tag === newTag)) !== undefined) {
      setTagInputValue("");
      return;
    }
    const newSelectedTags = [...selectedTags];
    newSelectedTags.push(newTag);
    setSelectedTags(newSelectedTags);
    setTagInputValue("");
  }

  const tagInputKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" && event.key !== "Escape") return;
    if (selectedTags.length === 10 || event.key === "Escape") {
      setTagsMenuVisible(false);
      setTagInputValue("");
      return;
    }
    const newTag = event.currentTarget.value;
    if ((selectedTags.find((tag) => tag === newTag)) !== undefined) {
      setTagsMenuVisible(false);
      setTagInputValue("");
      return;
    }
    const newSelectedTags = [...selectedTags];
    newSelectedTags.push(newTag);
    setSelectedTags(newSelectedTags);
    setTagsMenuVisible(false);
    setTagInputValue("");
  }

  const removeTag2ClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const removedTag = e.currentTarget.id;
    const updatedTags: string[] = [];
    selectedTags.forEach((tag) => {
      if (tag !== removedTag) updatedTags.push(tag)
    });
    setSelectedTags(updatedTags);
  }

  const filterTags = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    const visibleTags = existedTags.filter((tag) => tag.includes(text));
    setAvailableTags([...visibleTags]);
    console.log(availableTags);
  }
  /* #endregion */

  /* #region visibility handlers */
  const visibilityOptionClickHandler = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.stopPropagation();
    const index = parseInt(e.currentTarget.id);
    setVisibility({ index: index, option: visibilityOptions[index] });
    setVisibilityMenuVisible(false);
  }
  /* #endregion */

  /* #region add description, images, video */
  const addImageHandler = () => {
    const inputElement = window.document.getElementById("loadFileInput")!
    inputElement.click();
    setAddBlockActive(false);
  }
  const openDescriptionModalHandler = () => setOpenDescriptionModal(true);
  const closeDescriptionModalHandler = () => setOpenDescriptionModal(false);


  const addDescription = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newDescription = formData.get('description')?.toString() ?? '';
    setDescription(newDescription);
    setAddBlockActive(false);
    closeDescriptionModalHandler();
  }

  const addVideoHandler = () => {
    console.log("addVideoHandler");
    setAddBlockActive(false);
  }

  const loadInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    if (event.target.files.length === 0) return;
    const updatedFiles = [...selectedFiles, ...event.target.files];
    setSelectedFiles(updatedFiles);
    cover === undefined && setCover(updatedFiles[0]);
    console.log(selectedFiles);
  }

  const openPublicateModalHandler = () => setOpenPublicateModal(true);
  const closePublicateModalHandler = () => setOpenPublicateModal(false);


  /* #endregion */

  /* #region post data */
  const postData = async (): Promise<void> => {
    const uploadedData: IUploadedData = {};
    uploadedData.title = title;
    uploadedData.description = description;
    uploadedData.tags = [...selectedTags];
    uploadedData.isPublic = true;
    uploadedData.isDraft = false;
    uploadedData.price = price;
    uploadedData.blocksGap = gap;
    cover ? uploadedData.cover = cover.name : "";
    console.log(uploadedData);
    const formData = new FormData;
    formData.append("value", JSON.stringify(uploadedData));
    selectedFiles.forEach((file) => formData.append("images", file));
    console.log(formData);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        "Authorization": "Bearer " + token,
      }
    });
    if (response.status !== 200) return;
    navigate("/");
  }
  /* #endregion */

  const saveDraft = () => {
    const draft = {
      title: title,
      tags: [...selectedTags],
      visibility: visibylity.index,
      gap: gap
    }

    localStorage.setItem("draft", JSON.stringify(draft));
    console.log(draft);
  }

  /* #region components */
  const visibilityDropDown = (
    itemSet: string[],
    id: string,
    displayCondition: boolean,
    setter: (value: React.SetStateAction<boolean>) => void,
    handler: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
  ) => {
    return <Box
      id={id}
      tabIndex={1}
      style={displayCondition ? pageSyles.dropdown : pageSyles.dropdownHidden}
      onBlur={() => setter(false)}>
      <Divider />
      {itemSet.map((item) => (
        <Typography key={item}
          id={itemSet.indexOf(item).toString()}
          sx={pageSyles.dropdownItem}
          onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => handler(e)}
        >{item}</Typography>
      ))}
    </Box>;
  }

  const tagsDropdown = (
    itemSet: string[],
    id: string,
    displayCondition: boolean,
    setter: (value: React.SetStateAction<boolean>) => void,
    handler: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
  ) => {
    return <Box
      id={id}
      tabIndex={1}
      style={displayCondition ? pageSyles.dropdown : pageSyles.dropdownHidden}
      onBlur={() => setter(false)}>
      <Divider color={selectedTags.length > 0 ? colors.violet : colors.grey} />
      {itemSet.map((item) => (
        <Typography key={item}
          id={itemSet.indexOf(item).toString()}
          sx={pageSyles.dropdownItem}
          onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
            console.log(e.currentTarget.innerText)
            handler(e);
            setTagsMenuVisible(false);
          }}
        >{item}</Typography>
      ))}
    </Box>
  }
  /* #endregion */

  const itemIcons = [
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" color="inherit">
      <path d="M6 5.5C6 5.23478 6.10536 4.98043 6.29289 4.79289C6.48043 4.60536 6.73478 4.5 7 4.5H23C23.2652 4.5 23.5196 4.60536 23.7071 4.79289C23.8946 4.98043 24 5.23478 24 5.5V9.5C24 9.76522 23.8946 10.0196 23.7071 10.2071C23.5196 10.3946 23.2652 10.5 23 10.5C22.7348 10.5 22.4804 10.3946 22.2929 10.2071C22.1054 10.0196 22 9.76522 22 9.5V6.5H16V26.5H18C18.2652 26.5 18.5196 26.6054 18.7071 26.7929C18.8946 26.9804 19 27.2348 19 27.5C19 27.7652 18.8946 14.0196 18.7071 28.2071C18.5196 28.3946 18.2652 28.5 18 28.5H12C11.7348 28.5 11.4804 28.3946 11.2929 28.2071C11.1054 28.0196 11 27.7652 11 27.5C11 27.2348 11.1054 26.9804 11.2929 26.7929C11.4804 26.6054 11.7348 26.5 12 26.5H14V6.5H8V9.5C8 9.76522 7.89464 10.0196 7.70711 10.2071C7.51957 10.3946 7.26522 10.5 7 10.5C6.73478 10.5 6.48043 10.3946 6.29289 10.2071C6.10536 10.0196 6 9.76522 6 9.5V5.5Z" fill="currentcolor" />
    </svg>,
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" color="inherit">
      <path d="M23.6667 4.5C24.8159 4.5 25.9181 4.95655 26.7308 5.7692C27.5435 6.58186 28 7.68406 28 8.83333V24.1667C28 25.3159 27.5435 26.4181 26.7308 27.2308C25.9181 28.0435 24.8159 28.5 23.6667 28.5H8.33333C7.18406 28.5 6.08186 28.0435 5.2692 27.2308C4.45655 26.4181 4 25.3159 4 24.1667V8.83333C4 7.68406 4.45655 6.58186 5.2692 5.7692C6.08186 4.95655 7.18406 4.5 8.33333 4.5H23.6667ZM24.44 26.368L16.7 18.7867C16.5311 18.6212 16.3091 18.5209 16.0733 18.5035C15.8375 18.4862 15.6032 18.553 15.412 18.692L15.3 18.7853L7.55733 26.368C7.8 26.4533 8.06133 26.5 8.33333 26.5H23.6667C23.9373 26.5 24.1987 26.4533 24.44 26.368ZM23.6667 6.5H8.33333C7.71449 6.5 7.121 6.74583 6.68342 7.18342C6.24583 7.621 6 8.21449 6 8.83333V24.1667C6 24.444 6.048 24.7107 6.13733 24.9587L13.9013 17.3573C14.4336 16.8363 15.1406 16.5319 15.8848 16.5033C16.6291 16.4747 17.3574 16.724 17.928 17.2027L18.0987 17.3573L25.8613 24.96C25.9507 24.712 26 24.4453 26 24.1667V8.83333C26 8.21449 25.7542 7.621 25.3166 7.18342C24.879 6.74583 24.2855 6.5 23.6667 6.5ZM20.336 9.16667C21.1324 9.16667 21.8961 9.48302 22.4592 10.0461C23.0223 10.6092 23.3387 11.373 23.3387 12.1693C23.3387 12.9657 23.0223 13.7294 22.4592 14.2925C21.8961 14.8556 21.1324 15.172 20.336 15.172C19.5396 15.172 18.7759 14.8556 18.2128 14.2925C17.6497 13.7294 17.3333 12.9657 17.3333 12.1693C17.3333 11.373 17.6497 10.6092 18.2128 10.0461C18.7759 9.48302 19.5396 9.16667 20.336 9.16667ZM20.336 11.1667C20.0701 11.1667 19.815 11.2723 19.627 11.4603C19.439 11.6484 19.3333 11.9034 19.3333 12.1693C19.3333 12.4353 19.439 12.6903 19.627 12.8783C19.815 13.0664 20.0701 13.172 20.336 13.172C20.6019 13.172 20.857 13.0664 21.045 12.8783C21.233 12.6903 21.3387 12.4353 21.3387 12.1693C21.3387 11.9034 21.233 11.6484 21.045 11.4603C20.857 11.2723 20.6019 11.1667 20.336 11.1667Z" fill="currentcolor" />
    </svg>,
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" color="inherit">
      <path d="M4 10.5C4 9.70435 4.31607 8.94129 4.87868 8.37868C5.44129 7.81607 6.20435 7.5 7 7.5H19C19.7956 7.5 20.5587 7.81607 21.1213 8.37868C21.6839 8.94129 22 9.70435 22 10.5V22.5C22 23.2956 21.6839 24.0587 21.1213 24.6213C20.5587 25.1839 19.7956 25.5 19 25.5H7C6.20435 25.5 5.44129 25.1839 4.87868 24.6213C4.31607 24.0587 4 23.2956 4 22.5V10.5ZM7 5.5C5.67392 5.5 4.40215 6.02678 3.46447 6.96447C2.52678 7.90215 2 9.17392 2 10.5V22.5C2 23.8261 2.52678 25.0979 3.46447 26.0355C4.40215 26.9732 5.67392 27.5 7 27.5H19C19.6566 27.5 20.3068 27.3707 20.9134 27.1194C21.52 26.8681 22.0712 26.4998 22.5355 26.0355C22.9998 25.5712 23.3681 25.02 23.6194 24.4134C23.8707 23.8068 24 23.1566 24 22.5V21.5L27.6 24.2C27.8229 24.3671 28.0878 24.4689 28.3653 24.4939C28.6427 24.519 28.9217 24.4662 29.1708 24.3416C29.42 24.2171 29.6295 24.0256 29.776 23.7886C29.9224 23.5516 30 23.2786 30 23V10.01C30 9.73143 29.9224 9.45837 29.776 9.2214C29.6295 8.98444 29.42 8.79294 29.1708 8.66836C28.9217 8.54378 28.6427 8.49104 28.3653 8.51606C28.0878 8.54108 27.8229 8.64286 27.6 8.81L24 11.5V10.5C24 9.84339 23.8707 9.19321 23.6194 8.58658C23.3681 7.97996 22.9998 7.42876 22.5355 6.96447C22.0712 6.50017 21.52 6.13188 20.9134 5.8806C20.3068 5.62933 19.6566 5.5 19 5.5H7ZM24 14L28 11.008V22L24 19V14Z" fill="currentcolor" />
    </svg>
  ]

  const plusIcon =
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" color="inherit">
      <path d="M17.416 10.0837H11.916V4.58366C11.916 4.34054 11.8194 4.10739 11.6475 3.93548C11.4756 3.76357 11.2425 3.66699 10.9993 3.66699C10.7562 3.66699 10.5231 3.76357 10.3512 3.93548C10.1793 4.10739 10.0827 4.34054 10.0827 4.58366V10.0837H4.58268C4.33957 10.0837 4.10641 10.1802 3.9345 10.3521C3.76259 10.5241 3.66602 10.7572 3.66602 11.0003C3.66602 11.2434 3.76259 11.4766 3.9345 11.6485C4.10641 11.8204 4.33957 11.917 4.58268 11.917H10.0827V17.417C10.0827 17.6601 10.1793 17.8933 10.3512 18.0652C10.5231 18.2371 10.7562 18.3337 10.9993 18.3337C11.2425 18.3337 11.4756 18.2371 11.6475 18.0652C11.8194 17.8933 11.916 17.6601 11.916 17.417V11.917H17.416C17.6591 11.917 17.8923 11.8204 18.0642 11.6485C18.2361 11.4766 18.3327 11.2434 18.3327 11.0003C18.3327 10.7572 18.2361 10.5241 18.0642 10.3521C17.8923 10.1802 17.6591 10.0837 17.416 10.0837Z" fill="currentcolor" />
    </svg>

  const loadImageHandlers = [
    openDescriptionModalHandler,
    addImageHandler,
    addVideoHandler
  ]

  const itemIconsBlock = () => <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      margin: "0 auto"
    }}>
    {itemIcons.map((icon) => <Box
      key={itemIcons.indexOf(icon)}
      component="button"
      sx={pageSyles.addItemButton}
      onClick={loadImageHandlers[itemIcons.indexOf(icon)]}>
      {itemIcons[itemIcons.indexOf(icon)]}
      <Typography sx={{ fontSize: "0.875rem" }}>
        {iconText[itemIcons.indexOf(icon)]}
      </Typography>
    </Box>)}
  </Box>

  const displayImages = useMemo(() => {
    return <>
      {selectedFiles.map((file) => <Box
        key={selectedFiles.indexOf(file)}
        sx={pageSyles.imageBlock}
        style={{
          marginBottom: selectedFiles.indexOf(file) < selectedFiles.length - 1 ?
            (gap.toString() + "px") : "0",
          backgroundImage: "url('" + (URL.createObjectURL(file)) + "')"
        }}>
      </Box>
      )}
    </>
  }, [selectedFiles, gap]);

  return <>
    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      {(selectedFiles.length === 0 && description.length === 0) &&
        <Box sx={{ width: "50%" }}>
          <Box
            sx={pageSyles.addImageBox}>
            <Typography sx={{ color: "inherit", textAlign: "center", marginBottom: "40px" }}>
              {addToGetStarted}
            </Typography>
            {itemIconsBlock()}
            {/* #region move update delete image menu */}
            <>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                openDescriptionModal={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="up" sx={{ color: "#271846" }}>
                    <North />
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="down" sx={{ color: "#271846" }}>
                    <South />
                  </IconButton>
                </MenuItem>
                <Box className="separator-line1" style={{ marginLeft: "5px", color: "#CACACA", width: "62px", height: "1.5px" }}></Box>
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="update" sx={{ color: "#6A4BD9" }}>
                    <AutorenewRounded />
                  </IconButton>
                </MenuItem>
                <Box className="separator-line1" style={{ marginLeft: "5px", color: "#CACACA", width: "62px", height: "1.5px" }}></Box>
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="delete" sx={{ color: "#D65353" }}>
                    <DeleteForeverRounded />
                  </IconButton>
                </MenuItem>
              </Menu> */}
            </>
            {/*  #endregion */}
          </Box>
        </Box>
      }
      {(selectedFiles.length > 0 || description.length > 0) &&
        <Box sx={{ width: "50%", paddingBottom: "1rem" }}>
          <Box sx={{ width: "100%", borderRadius: "30px", overflow: "hidden", boxShadow: effects.shadowVioletHover }}>
            {(selectedFiles.length > 0) &&
              displayImages
            }
            {(description.length > 0) &&
              <Box sx={pageSyles.textBlock}
                style={{ marginTop: selectedFiles.length > 0 ? gap : 0 }}>
                {description.split('\n').map((row) =>
                (row !== "" ?
                  <p key={Math.random()}>{row}</p> :
                  <br key={Math.random()} />)
                )}
              </Box>
            }
          </Box >
          <Box
            component="button"
            sx={pageSyles.addBlockButton}
            onClick={() => { setAddBlockActive(!addBlockActive) }}>
            <Box sx={{ display: "block", paddingTop: "9px" }}>{plusIcon}</Box>
            <Typography sx={{ marginLeft: "10px" }}>
              {addBlock}
            </Typography>
          </Box>
          {(addBlockActive) &&
            <Box ref={addBlockRef} style={{ paddingTop: "36px" }}>{itemIconsBlock()}</Box>
          }
        </Box>
      }
      {addDescriptionModal(
        openDescriptionModal,
        closeDescriptionModalHandler,
        addDescription,
        descriptionCaption,
        descriptionText,
        description,
        myContinue
      )}
      <Box style={{ display: "block", marginBottom: "45px", width: "28%" }}>
        <Box sx={{ width: "100%" }}>
          {/* project name */}
          <CommonLabel htmlFor="projectNameLabel">
            {project}
          </CommonLabel>
          <CommonInput
            sx={{
              width: "100%",
              color: colors.violet,
              fontWeight: title ? 700 : 400,
              borderColor: title ? colors.violet : colors.grey
            }}
            color="primary"
            height="bg"
            title="projectNameLabel"
            id="projectNameLabel"
            name="projectNameLabel"
            placeholder={addTitle}
            aria-label={addTitle}
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
        </Box>
        {/* NEW tags */}
        <Box sx={pageSyles.inputBox}>
          <CommonLabel htmlFor="">
            {tags}<span style={{ fontWeight: 400 }}> {upTo}</span>
          </CommonLabel>
          <Box sx={{ position: "relative" }}>
            <Box id="tagBox"
              sx={pageSyles.tagBox}
              style={tagsMenuVisible ? {
                position: "absolute",
                left: "0",
                top: "0",
                borderColor: selectedTags.length > 0 ? colors.violet : colors.grey
              } : {
                borderColor: selectedTags.length > 0 ? colors.violet : colors.grey
              }}>
              {selectedTags.map((tag) => (
                <Box key={tag}
                  sx={pageSyles.selectedTag}>
                  <Typography sx={{
                    display: "inline",
                    lineHeight: "19px",
                    marginRight: "4px"
                  }}>
                    {tag}
                  </Typography>
                  <Box
                    id={tag}
                    sx={{ height: "19px" }}
                    onClick={removeTag2ClickHandler}>
                    <CrossIcon />
                  </Box>
                </Box>
              ))}
              <input
                type="text"
                placeholder={addTags}
                value={tagInputValue}
                style={{
                  padding: 0,
                  outline: "none",
                  border: "none",
                  lineHeight: "35px",
                  marginLeft: "14px",
                  fontFamily: "Nunito",
                  fontSize: "1rem"
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setVisibilityMenuVisible(false);
                  setTagsMenuVisible(true);
                  setTagInputValue(e.target.value);
                  filterTags(e);
                }}
                onFocus={() => {
                  setTagsMenuVisible(true);
                }}
                onKeyDown={tagInputKeyDownHandler}
              />
              {tagsDropdown(
                availableTags,
                "tagsMenu",
                tagsMenuVisible,
                setTagsMenuVisible,
                tagItemClickHandler
              )}
            </Box>
          </Box>
          {selectedTags.length === 0 && (
            <Box sx={{ padding: "0 0 12px 24px", marginTop: "8px" }}>
              <Typography sx={{ display: "inline", color: colors.grey }}>{suggested}: </Typography>
              {existedTags.map((tag) => (
                <Typography key={tag}
                  sx={{ display: "inline", color: colors.darkViolet }}>{tag}; </Typography>
              ))}
            </Box>
          )}
        </Box>
        {/* visibility */}
        <Box sx={pageSyles.inputBox}>
          <CommonLabel htmlFor="">
            {visibility}
          </CommonLabel>
          <Box sx={{ position: "relative" }}>
            <Box id="visibilityBox"
              sx={pageSyles.tagBox}
              style={visibilityMenuVisible ? {
                position: "absolute",
                left: "0",
                top: "0",
                borderColor: colors.violet
              } : { borderColor: colors.violet }}
              onClick={() => {
                setVisibilityMenuVisible(!visibilityMenuVisible);
                setTagsMenuVisible(false);
              }}>
              <Typography
                sx={{ color: colors.violet, fontWeight: 700, lineHeight: "35px", marginLeft: "14px" }}>
                {visibylity.option}
              </Typography>
              {visibilityDropDown(
                visibilityOptions,
                "visibilityMenu",
                visibilityMenuVisible,
                setVisibilityMenuVisible,
                visibilityOptionClickHandler
              )}
            </Box>
          </Box>
        </Box>
        {/* price */}
        <Box sx={pageSyles.inputBox}>
          <CommonLabel htmlFor="priceLabel">
            {priceTitle}
          </CommonLabel>
          <CommonInput
            sx={{
              width: "100%",
              color: price > 0 ? colors.violet : "grey",
              fontWeight: price > 0 ? 700 : 400,
              borderColor: price > 0 ? colors.violet : colors.grey,
              "&:hover": {
                boxShadow: effects.shadowVioletHover
              },
              "&:active": {
                boxShadow: effects.shadowVioletActive
              }
            }}
            type="number"
            min="0.00"
            step=".01"
            color="primary"
            height="bg"
            title="priceLabel"
            id="priceLabel"
            name="priceLabel"
            aria-label="price"
            placeholder="0.00"
            value={price}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPrice(parseFloat(e.target.value));
            }}
          />
        </Box>
        {/* gap */}
        <Box style={{ display: "flex", marginTop: "45px", justifyContent: "space-between" }}>
          <CommonLabel htmlFor="gap">
            {blocksGap}
          </CommonLabel>
          <Box sx={{ padding: "0 24px 12px 0" }}>
            <CommonInput
              sx={{
                width: "4rem",
                height: "1.5rem",
                backgroundColor: colors.grey,
                borderColor: colors.grey,
                padding: "0 0.75rem",
                textAlign: "center"
              }}
              readOnly
              id="gap"
              name="gap"
              aria-label="gap"
              value={gap}
            />
            <Typography sx={{ marginLeft: "5px", display: "inline" }}>px</Typography>
          </Box>
        </Box>
        {/* gap slider */}
        <Slider
          sx={{
            color: colors.violet,
            width: "calc(100% - 20px)",
            margin: "36px 0 0 10px"
          }}
          aria-label="gap"
          value={gap}
          max={64}
          onChange={(e: Event, newValue: number | number[]) => setInterval(newValue as number)} />
        <Box sx={{ marginTop: "36px" }}>
          <CustomButton height="bg"
            sx={BtnStyles.greyBtn}
            style={{ width: "100%" }}
            onClick={() => postData()}>
            {saveAsDraft}
          </CustomButton>
          <CustomButton height="bg"
            sx={BtnStyles.violetBtn}
            style={{ width: "100%", marginTop: "12px" }}
            onClick={() => openPublicateModalHandler()}>
            {myContinue}
          </CustomButton>
          {PublicateModal(
            t,
            selectedFiles,
            openPublicateModal,
            closePublicateModalHandler,
            addImageHandler,
            setCover,
            cover,
          )}
        </Box>
      </Box>
    </Box>
    {/* hidden input to get image files for upload */}
    <input
      multiple
      id="loadFileInput"
      style={{ display: "none" }}
      type="file"
      name="profileImage"
      onChange={loadInputChangeHandler}
    />
  </>
};
export default SharePage;

