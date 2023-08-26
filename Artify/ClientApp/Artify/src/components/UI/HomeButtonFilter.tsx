import { Button } from '@mui/base/Button';
import FilterList from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';
import { colors } from '../../assets/defaults/colors'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
//


export default function HomeButtonFilter() {
  const { t } = useTranslation();


  return (<>
    <Button className='button button-border-dark button-m'
      style={{
        display: 'inline',
        width: '200px',
      }}>
      <Typography component='div' sx={{}}>
        {t('фільтр')}
      </Typography>
      <FilterList style={{ width: '20px', height: '20px' }} />
    </Button>
  </>
  );

}


