import { Button } from '@mui/base/Button';
import FilterList from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import Context from '../../utils/Context';
import CustomButton from './CustomButton';
import * as BtnStyles from './CustomButtonStyles';

const filterButton = {
  width: '119px',
  height: '42px',
  top: '161px',
  left: '100px',
  border: '1px solid #271846',
  borderRadius: '30px',
  gap: '10px',
  padding: '10px, 22px, 10px, 22px'
}

const filterListIcon = {
  width: '20px',
  height: '20px',
  marginRight: '10px',
  display: 'inline-flex',
  float: 'right',
  padding: '4px',

}

export default function HomeButtonFilter() {

  const { t } = useTranslation();

  const { filterActive } = useContext(Context);
  const { setFilterActive } = useContext(Context);

  return (<>
    <CustomButton height="md"
      sx={BtnStyles.darkVioletBtn}
      style={{ width: "120px" }}
      onClick={() => {
        setFilterActive && setFilterActive(!filterActive);
        
      }}>
      <FilterList
        sx={filterListIcon}
        style={{ transform: filterActive ? "scale(1, -1)" : "scale(1, 1)" }} />
      <Typography component='div' sx={{ display: 'inline-block', float: 'right', padding: '1px 6px' }}>
        {t('фільтр')}
      </Typography>
    </CustomButton>
  </>
  );

}

