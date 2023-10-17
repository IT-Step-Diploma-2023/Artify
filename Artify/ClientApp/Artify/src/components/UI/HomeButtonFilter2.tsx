import { Button } from '@mui/base/Button';
import FilterList from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';


export default function HomeButtonFilter() {

  const { t } = useTranslation();

  return (<>
    <Button className='button button-border-dark button-m'
      style={{ width: '119px', height: '42px', top: '161px', left: '100px', border: '1px solid #271846', borderRadius: '30px', gap: '10px', padding: '10px, 22px, 10px, 22px', backgroundColor: '#271846', color: '#ECEAEF' }}>
      <FilterList style={{ width: '20px', height: '20px', marginRight: '10px', display: 'inline-flex', float: 'right', padding: '4px' }} />
      <Typography component='div' sx={{ display: 'inline-block', float: 'right', padding: '1px 6px' }}>
        {t('фільтр')}
      </Typography>

    </Button>
  </>
  );

}

