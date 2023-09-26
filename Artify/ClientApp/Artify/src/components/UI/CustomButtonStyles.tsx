import { colors } from "../../assets/defaults/colors"
import { effects } from "../../assets/defaults/effects"


export const DISABLE_BTN_STYLE = {
    color: colors.white,
    border: '1px solid ' + colors.grey,
    backgroundColor: colors.grey
}

export const LIGHT_GREY_BTN_STYLE = {
    color: colors.darkViolet,
    border: '1px solid ' + colors.darkViolet,
    backgroundColor: colors.lightGrey,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.violet,
      border: '1px solid ' + colors.violet,
      boxShadow: effects.shadowVioletActive,
    },
    '&:active': {
      boxShadow: effects.shadowVioletHover,
    },
  }

export const GREY_BTN_STYLE = {
    color: colors.white,
    border: '1px solid ' + colors.grey,
    backgroundColor: colors.grey,
    '&:hover': {
        color: colors.white,
        backgroundColor: colors.darkViolet,
        border: '1px solid ' + colors.darkViolet,
        boxShadow: effects.shadowGreyHover,
    },
    '&:active': {
        boxShadow: effects.shadowGreyActive,
    },
}

export const VIOLET_BTN_STYLE = {
    color: colors.white,
    border: '1px solid ' + colors.violet,
    backgroundColor: colors.violet,
    '&:hover': {
        color: colors.white,
        backgroundColor: colors.violet,
        border: '1px solid ' + colors.violet,
        boxShadow: effects.shadowVioletHover,
    },
    '&:active': {
        boxShadow: effects.shadowVioletActive,
    },
}
