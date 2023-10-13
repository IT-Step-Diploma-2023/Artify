import { Box, Checkbox, Divider, Typography } from "@mui/material"
import { colors } from "../../../assets/defaults/colors"
import { TFunction } from "i18next"

const FilterParamlist = ({ t, title, filterParams }:
    {
      t: TFunction<"translation", undefined>,
      title: string,
      filterParams: string[]
    }
  ) => {
  
    /* #region styles */
    const titleStyle = {
      fontSize: '1.25rem',
      fontWeight: '700',
      margin: "24px 0 12px"
    }
  
    const checkboxStyle = {
      marginLeft: "-9px",
      color: '#271846',
      '&.Mui-checked': {
        color: '#271846',
      }
    }
  
    const paramNameStyle = {
      display: 'inline-block',
      marginTop: '8px',
      marginLeft: '0px',
      color: colors.darkViolet,
      fontWeight: '400'
    }
    /* #endregion */
  
    return <Box sx={{ marginBottom: "36px" }}>
      <Divider sx={{ color: colors.darkViolet, borderColor: colors.darkViolet, marginTop: "10px" }} />
      <Typography sx={titleStyle}>{title}</Typography>
      <div style={{ display: 'block' }}>
        <div style={{ display: 'inline-block' }}>
          <Checkbox disableRipple
            sx={checkboxStyle} />
        </div>
        <Typography component='div'
          sx={paramNameStyle}>
          {t("homePage.params.selectAll")}
        </Typography>
      </div>
      {filterParams.map((param) => (
        <div style={{ display: 'block' }} key={filterParams.indexOf(param)}>
          <div style={{ display: 'inline-block' }}>
            <Checkbox disableRipple
              sx={checkboxStyle} />
          </div>
          <Typography component='div'
            sx={paramNameStyle}>
            {param}
          </Typography>
        </div>
      ))}
    </Box>
  };

  export default FilterParamlist;