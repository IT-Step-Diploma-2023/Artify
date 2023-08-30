import { FunctionComponent, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Paper } from '@mui/material';
import { colors } from '../../assets/defaults/colors';
import FormPanelBackground from '../../components/UI/FormPanelBackground';
import FormTitle from '../../components/UI/FormTitle';
import FormPanel from '../../components/UI/FormPanel';


interface PageContentProps {
  title?: string;
  children?: ReactNode;
}

const images = [
  '/images/auth_bg_img_01.png',
  '/images/auth_bg_img_02.png',
  '/images/auth_bg_img_03.png'
];


const RegLogPageContent: FunctionComponent<PageContentProps> = ({ title, children }) => {

  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  setTimeout(() => {
    setIndex((index + 1) % images.length);
  }, 10000);

  return (
    <>
      <FormPanel sx={{ backgroundColor: colors.lightGrey }}>
        <Container sx={{ margin: 'auto'
         }}>
          <Box sx={{ 
            width: '460px', 
            margin: 'auto', 
            backgroundColor: 'transparent', 
            boxShadow: 'none' }}>
            <FormTitle sx={{ color: colors.violet }}>
              {title}
            </FormTitle>
            {children}
          </Box>
        </Container>
      </FormPanel >
      <FormPanelBackground sx={{ backgroundImage: `url(${images[index]})` }} />
    </>
  )
};

export default RegLogPageContent;