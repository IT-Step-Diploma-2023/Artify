/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import { Grid, ImageListItem, Input, ListItemButton, ListItemText, Select, Slider, Stack } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';


const SharePage1: FunctionComponent = () => {

  const { t } = useTranslation();

  const projectName = t('share.projectName');
  const addProjectName = t('share.addProjectName')
  const tags = t('share.tags');
  const addTags = t('share.addTags');
  const until = t('share.until');
  const suggested = t('share.suggested');
  const visibilityOfTheProject = t('share.visibilityOfTheProject');
  const blocksGap = t('share.blocksGap');
  const saveAsDraft = t('share.saveAsDraft');
  const myContinue = t('share.myContinue');
  const addBlock = t('share.addBlock');


  // const pathes = [
  //   '/text',
  //   '/image',
  //   '/video'
  // ]

  return <>

    <Grid container spacing={{ xs: 2, md: 3 }} style={{ marginLeft: '50px', marginTop: '10px' }}>
      <Grid item xs={6} md={6}>
        <div style={{ display: 'block' }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} >
              <img
                style={{ width: '613px', height: '432px', borderRadius: '10px', boxShadow: '0px 4px 8px 0px #27184666' }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy">
              </img>
            </ImageListItem>
          ))}

          <Button className='button3'
            style={{ width: '187px', height: '54px', marginLeft: '200px', borderRadius: '30px', gap: '4px', padding: '16px 29px 16px 29px' }}>
            <div style={{ display: 'flex' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.416 10.0832H11.916V4.58317C11.916 4.34006 11.8194 4.1069 11.6475 3.93499C11.4756 3.76308 11.2425 3.6665 10.9993 3.6665C10.7562 3.6665 10.5231 3.76308 10.3512 3.93499C10.1793 4.1069 10.0827 4.34006 10.0827 4.58317V10.0832H4.58268C4.33957 10.0832 4.10641 10.1797 3.9345 10.3517C3.76259 10.5236 3.66602 10.7567 3.66602 10.9998C3.66602 11.243 3.76259 11.4761 3.9345 11.648C4.10641 11.8199 4.33957 11.9165 4.58268 11.9165H10.0827V17.4165C10.0827 17.6596 10.1793 17.8928 10.3512 18.0647C10.5231 18.2366 10.7562 18.3332 10.9993 18.3332C11.2425 18.3332 11.4756 18.2366 11.6475 18.0647C11.8194 17.8928 11.916 17.6596 11.916 17.4165V11.9165H17.416C17.6591 11.9165 17.8923 11.8199 18.0642 11.648C18.2361 11.4761 18.3327 11.243 18.3327 10.9998C18.3327 10.7567 18.2361 10.5236 18.0642 10.3517C17.8923 10.1797 17.6591 10.0832 17.416 10.0832Z" fill="white" />
              </svg>
              <Typography component='div' sx={{ display: 'block', float: 'center' }}>
                {addBlock}
              </Typography>
            </div>
          </Button>
        </div>
      </Grid>
      <Grid item xs={1} md={1}>

      </Grid>
      <Grid item xs={5} md={5}>
        <div style={{ display: 'block', marginBottom: '45px' }}>

          <Typography sx={{ color: '#6A4BD9', fontWeight: 'bold', marginBottom: '10px' }}>{projectName}</Typography>
          <Input className='input2'
            placeholder={addProjectName}
            style={{ width: '400px', height: '47px', display: 'block', padding: '5px 14px' }}
            required
          />
          <div style={{ display: 'flex', marginTop: '15px' }}>
            <Typography sx={{ color: '#6A4BD9', fontWeight: 'bold', marginBottom: '10px' }}>{tags}</Typography>
            <Typography sx={{ marginLeft: '5px' }}>({until} 10)</Typography>
          </div>
          <Input className='input2'
            placeholder={addTags}
            style={{ width: '400px', height: '47px', display: 'block', padding: '5px 14px' }}
            sx={{ backgroundColor: '#ECEAEF' }}
            required
          />
          <div style={{ display: 'flex', marginBottom: '45px' }}>
            <Typography sx={{ marginLeft: '15px', marginTop: '10px', color: '#CACACA' }}>{suggested}:</Typography>
            <Typography sx={{ marginLeft: '5px', marginTop: '10px', color: '#6A4BD9' }}>design</Typography>
          </div>
          <Typography sx={{ color: '#6A4BD9', fontWeight: 'bold' }}>{visibilityOfTheProject}</Typography>
          <Select className='select'
            style={{ marginTop: '10px', width: '400px', height: '47px', display: 'block' }}
            sx={{ color: '#6A4BD9', border: '1px solid #6A4BD9', borderRadius: '30px' }}
            required

          >
            <Stack direction="column" spacing={1}>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </Stack>

          </Select>

          <div style={{ display: 'flex', marginTop: '45px' }}>
            <Typography sx={{ color: '#6A4BD9', fontWeight: 'bold' }}>{blocksGap}</Typography>
            <Input className='input2'
              placeholder="0"
              style={{ width: '10%', height: '25px', display: 'block', backgroundColor: '#CACACA', marginLeft: '130px' }}
              required
            />
            <Typography sx={{ marginLeft: '5px' }}>px</Typography>
          </div>
          <Slider
            aria-label="Temperature"
            defaultValue={0}
            sx={{ color: '#6A4BD9', width: '400px', marginLeft: '10px', marginTop: '30px' }}
          />
          <Button className='button2'
            style={{ width: '400px', height: '47px', padding: '18px, 72px, 18px, 72px', marginTop: '40px', color: '#FFFFFF', borderRadius: '50px' }}>
            {saveAsDraft}
          </Button>
          <Button
            type='submit'
            className='button3'
            style={{ width: '400px', height: '47px', padding: '18px, 72px, 18px, 72px', display: 'block', marginTop: '18px', color: '#FFFFFF', borderRadius: '50px' }}
          >
            {myContinue}
          </Button>
        </div>
      </Grid>
    </Grid>


  </>
};
export default SharePage1;

const itemData = [
  {
    img: 'images/tree_img.jpg',
    title: 'tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  }
];