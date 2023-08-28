import { createTheme } from '@mui/material';
import {colors} from './colors'

const theme = createTheme({
    typography: {
      fontFamily: 'Nunito'
    },
    palette: {
      primary: {
        main: colors.darkViolet,
      },
      secondary: {
        main: colors.lightGrey
      },
      info: {
        main: colors.violet
      },
      background: {
        default: colors.lightGrey
      }
    }
  });

  export default theme