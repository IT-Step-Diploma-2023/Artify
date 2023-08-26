import { Button } from '@mui/base/Button';
import FilterList from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
//

export default function HomeButtonFilter() {
  const { t } = useTranslation();


  return (<>
    <Button className='button button-border-dark button-m'
      style={{ width: '120px' }}>
      <Typography component='div' sx={{display: 'inline-block'}}>
        {t('фільтр')}
      </Typography>
        <FilterList style={{ width: '20px', height: '20px', marginLeft:'10px', display: 'inline' }} />
    </Button>
  </>
  );

}


