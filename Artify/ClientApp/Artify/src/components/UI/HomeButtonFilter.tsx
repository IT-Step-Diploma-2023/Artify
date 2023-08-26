import { Button } from '@mui/base/Button';
import FilterList from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';
import { colors } from '../../assets/defaults/colors'
import { styled } from '@mui/system';

//


export default function HomeButtonFilter() {
  const { t } = useTranslation();


  return (<>
    <Button className='button button-light button-m'
      style={{
        display: 'inline',
        border: `1px solid${colors.darkViolet}`,
        width: '200px',
        color: `${colors.darkViolet}`,
      }}>
      {t('фільтр')}
      <FilterList style={{ width: '20px', height: '20px' }} />
    </Button>
  </>
  );

}


