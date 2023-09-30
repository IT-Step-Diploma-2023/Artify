import { colors } from "../../assets/defaults/colors"
import { effects } from "../../assets/defaults/effects"
import { sizes } from "../../assets/defaults/sizes"

export const tagBox = {
  width: "100%",
  display: "inline-block",
  boxSizing: "border-box",
  color: colors.darkViolet,
  border: "1px solid",
  borderColor: colors.grey,
  backgroundColor: "white",
  caretColor: "transparent",
  cursor: "arrow",
  padding: "7.5px 10px",
  transition: "all 0.15s ease-out",
  "&:hover": {
    boxShadow: "0px 4px 8px 0px rgba(39, 24, 70, 0.60)"
  },
  "&:active": {
    boxShadow: "0px 3px 8px 0px rgba(39, 24, 70, 0.60)"
  },
  borderRadius: sizes.radiusBg,
  zIndex: 1
}

export const dropdown = {
  width: "calc(100% + 20px)",
  marginLeft: "-10px",
  padding: "7.5px 0 10px 0",
  backgroundColor: "transparent",
  transition: "all 0.15s ease-out",
  zIndex: 5
  // maxHeight: "240px",
  // overflow: "auto",
}

export const dropdownHidden = {
  display: "none",
  padding: "0"
}

export const dropdownItem = {
  cursor: "pointer",
  color: colors.darkViolet,
  lineHeight: "42px",
  padding: "0 24px",
  "&:hover": {
    backgroundColor: colors.darkViolet,
    color: "white"
  }
}

export const selectedTag = {
  textAlign: "left",
  backgroundColor: colors.darkViolet,
  width: "fit-content",
  padding: "4px 14px 4px 14px",
  borderRadius: "14px",
  color: "white",
  display: "inline-flex",
  margin: "4px"
}

export const addImageBox = {
  aspectRatio: 1.43,
  boxSizing: "border-box",
  color: colors.violet,
  border: "2px solid",
  borderColor: colors.grey,
  backgroundColor: "white",
  caretColor: "transparent",
  cursor: "arrow",
  padding: 0, 
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.15s ease-out",
  "&:hover": {
    borderColor: colors.violet,
    boxShadow: effects.shadowVioletHover,
  },
  "&:active": {
    boxShadow: effects.shadowVioletActive,
  },
}

export const imageBox = {
  aspectRatio: 1.43,
  boxSizing: "border-box",
  caretColor: "transparent",
  padding: 0, 
  // borderRadius: "30px",
  // transition: "all 0.15s ease-out",
  // "&:hover": {
  //   borderColor: colors.violet,
  //   boxShadow: effects.shadowVioletHover,
  // },
  // "&:active": {
  //   boxShadow: effects.shadowVioletActive,
  // },
}

export const addItemButton = {
  padding: "0 5px",
  border: 0,
  borderRadius: "20px",
  background: "white",
  color: colors.violet,
  width: "100px",
  height: "100px",
  margin: "0 18px",
  cursor: "pointer",
  transition: "all 0.15s ease-out",
  "&:hover": {
    color: colors.white,
    backgroundColor: colors.violet
  },
  "&:active": {
    color: colors.white,
    backgroundColor: colors.violet
  }
}

