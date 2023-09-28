import { colors } from "../../assets/defaults/colors"
import { effects } from "../../assets/defaults/effects"
import { sizes } from "../../assets/defaults/sizes"

export const TAG_BOX_STYLE = {
  width: '100%',
  display: 'inline-block',
  boxSizing: 'border-box',
  color: colors.darkViolet,
  border: '1px solid',
  borderColor: colors.grey,
  backgroundColor: 'white',
  caretColor: 'transparent',
  cursor: 'arrow',
  padding: '7.5px 10px',
  transition: 'all 0.15s ease-out',
  '&:hover': {
    boxShadow: '0px 4px 8px 0px rgba(39, 24, 70, 0.60)'
  },
  '&:active': {
    boxShadow: '0px 3px 8px 0px rgba(39, 24, 70, 0.60)'
  },
  borderRadius: sizes.radiusBg,
  zIndex: 1
}

export const DROPDOWN_STYLE = {
  width: 'calc(100% + 20px)',
  marginLeft: '-10px',
  padding: '7.5px 0 10px 0',
  backgroundColor: 'transparent',
  transition: 'all 0.15s ease-out',
  zIndex: 5
  // maxHeight: '240px',
  // overflow: 'auto',
}

export const DROPDOWN_HIDDEN_STYLE = {
  display: 'none',
  padding: '0'
}

export const DROPDOWN_ITEM_STYLE = {
  cursor: 'pointer',
  color: colors.darkViolet,
  lineHeight: '42px',
  padding: '0 24px',
  '&:hover': {
    backgroundColor: colors.darkViolet,
    color: 'white'
  }
}

export const SELECTED_TAG_STYLE = {
  textAlign: 'left',
  backgroundColor: colors.darkViolet,
  width: 'fit-content',
  padding: '4px 14px 4px 14px',
  borderRadius: '14px',
  color: 'white',
  display: 'inline-flex',
  margin: '4px'
}

