import { colors } from "../../assets/defaults/colors"
import { effects } from "../../assets/defaults/effects"


export const disableBtn = {
    color: colors.white,
    border: '1px solid ' + colors.grey,
    backgroundColor: colors.grey
}

export const lightGreyBtn = {
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

export const greyBtn = {
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

export const violetBtn = {
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

export const darkVioletBtn = {
    color: colors.white,
    border: '1px solid ' + colors.darkViolet,
    backgroundColor: colors.darkViolet,
    '&:hover': {
        color: colors.white,
        backgroundColor: colors.darkViolet,
        border: '1px solid ' + colors.darkViolet,
        boxShadow: effects.shadowVioletHover,
    },
    '&:active': {
        boxShadow: effects.shadowVioletActive,
        border: '1px solid ' + colors.darkViolet,

        
    },
}
