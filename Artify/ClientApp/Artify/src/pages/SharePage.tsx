/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from 'react';
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';

import {  Grid,  IconButton,  Input,  ListItemButton,  ListItemText,  Menu,  MenuItem,  Paper,  Select,  Slider, Stack} from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import {  AutorenewRounded, DeleteForeverRounded, North, South } from '@mui/icons-material';


interface Lngs {
  ua: string
  en: string
}

const lngs: Lngs = {
  ua: 'UA',
  en: 'EN'
}
  
  const SharePage: FunctionComponent = () => {   

    const { t, i18n } = useTranslation();  

    const addToGetStarted=t('share.addToGetStarted');
    const text=t('share.text');
    const image=t('share.image');
    const video=t('share.video');
    const projectName=t('share.projectName');
    const addProjectName=t('share.addProjectName')
    const tags=t('share.tags');
    const addTags=t('share.addTags');
    const until=t('share.until');
    const suggested=t('share.suggested');
    const visibilityOfTheProject=t('share.visibilityOfTheProject');
    const intervalsBetweenBlocks=t('share.intervalsBetweenBlocks');
    const saveAsDraft=t('share.saveAsDraft');
    const myContinue=t('share.myContinue');
    const addBlock=t('share.addBlock');

    
    const pathes = [
      '/text',
      '/image',
      '/video'
    ]

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return <>

  <Grid container spacing={{ xs: 2, md: 3 }} style={{marginLeft:'50px',marginTop:'10px'}}>         
    <Grid item xs={6} md={6}>
    <Paper className='paper' elevation={0} 
    sx={{display:'block',padding:'10px, 30px, 10px, 30px',width:'600px',height:'410px',marginTop:'7px',borderRadius:'30px',border:'1px solid #CACACA'}}>  
     
     <div>
              
              <Menu         
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="up" sx={{color:'#271846'}}>
                    <North />
                  </IconButton>    
                </MenuItem> 
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="down" sx={{color:'#271846'}}>
                    <South />
                  </IconButton>    
                </MenuItem> 
                <div className="separator-line1" style={{marginLeft:'5px',color:'#CACACA',width:'62px',height:'1.5px'}}></div>
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="update" sx={{color:'#6A4BD9'}}>
                    <AutorenewRounded />
                  </IconButton>    
                </MenuItem> 
                <div className="separator-line1" style={{marginLeft:'5px',color:'#CACACA',width:'62px',height:'1.5px'}}></div>
                <MenuItem onClick={handleClose}>
                  <IconButton aria-label="delete" sx={{color:'#D65353'}}>
                    <DeleteForeverRounded />
                  </IconButton>    
                </MenuItem>                                            
              </Menu>
            </div>
            <Button className='button4'
                style={{color:'#6A4BD9',fontSize:'16px',marginTop:'135px',marginLeft:'218px'}}
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {addToGetStarted}
              </Button>

      <div style={{display:'flex',marginTop:'45px'}}>
      <Button className='button1 button-border-dark button-m'      
      style={{ width: '100px',height:'100px',marginLeft:'114px',borderRadius: '20px',gap:'4px',padding:'19px, 14px, 19px, 14px'}}>
      <div style={{display:'block'}}>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 5.5C6 5.23478 6.10536 4.98043 6.29289 4.79289C6.48043 4.60536 6.73478 4.5 7 4.5H23C23.2652 4.5 23.5196 4.60536 23.7071 4.79289C23.8946 4.98043 24 5.23478 24 5.5V9.5C24 9.76522 23.8946 10.0196 23.7071 10.2071C23.5196 10.3946 23.2652 10.5 23 10.5C22.7348 10.5 22.4804 10.3946 22.2929 10.2071C22.1054 10.0196 22 9.76522 22 9.5V6.5H16V26.5H18C18.2652 26.5 18.5196 26.6054 18.7071 26.7929C18.8946 26.9804 19 27.2348 19 27.5C19 27.7652 18.8946 28.0196 18.7071 28.2071C18.5196 28.3946 18.2652 28.5 18 28.5H12C11.7348 28.5 11.4804 28.3946 11.2929 28.2071C11.1054 28.0196 11 27.7652 11 27.5C11 27.2348 11.1054 26.9804 11.2929 26.7929C11.4804 26.6054 11.7348 26.5 12 26.5H14V6.5H8V9.5C8 9.76522 7.89464 10.0196 7.70711 10.2071C7.51957 10.3946 7.26522 10.5 7 10.5C6.73478 10.5 6.48043 10.3946 6.29289 10.2071C6.10536 10.0196 6 9.76522 6 9.5V5.5Z" fill="#6A4BD9"/>
      </svg>
      <Typography component='div' sx={{display:'block',float:'center',padding:'1px 6px'}}>
        {text}
      </Typography>
      </div>
    </Button>
    <Button className='button1 button-border-dark button-m'
      style={{ width: '100px',height:'100px',marginLeft:'31px',borderRadius: '20px',gap:'4px',padding:'19px, 9px, 19px, 9px'}}>
      <div style={{display:'block'}}>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6667 4.5C24.8159 4.5 25.9181 4.95655 26.7308 5.7692C27.5435 6.58186 28 7.68406 28 8.83333V24.1667C28 25.3159 27.5435 26.4181 26.7308 27.2308C25.9181 28.0435 24.8159 28.5 23.6667 28.5H8.33333C7.18406 28.5 6.08186 28.0435 5.2692 27.2308C4.45655 26.4181 4 25.3159 4 24.1667V8.83333C4 7.68406 4.45655 6.58186 5.2692 5.7692C6.08186 4.95655 7.18406 4.5 8.33333 4.5H23.6667ZM24.44 26.368L16.7 18.7867C16.5311 18.6212 16.3091 18.5209 16.0733 18.5035C15.8375 18.4862 15.6032 18.553 15.412 18.692L15.3 18.7853L7.55733 26.368C7.8 26.4533 8.06133 26.5 8.33333 26.5H23.6667C23.9373 26.5 24.1987 26.4533 24.44 26.368ZM23.6667 6.5H8.33333C7.71449 6.5 7.121 6.74583 6.68342 7.18342C6.24583 7.621 6 8.21449 6 8.83333V24.1667C6 24.444 6.048 24.7107 6.13733 24.9587L13.9013 17.3573C14.4336 16.8363 15.1406 16.5319 15.8848 16.5033C16.6291 16.4747 17.3574 16.724 17.928 17.2027L18.0987 17.3573L25.8613 24.96C25.9507 24.712 26 24.4453 26 24.1667V8.83333C26 8.21449 25.7542 7.621 25.3166 7.18342C24.879 6.74583 24.2855 6.5 23.6667 6.5ZM20.336 9.16667C21.1324 9.16667 21.8961 9.48302 22.4592 10.0461C23.0223 10.6092 23.3387 11.373 23.3387 12.1693C23.3387 12.9657 23.0223 13.7294 22.4592 14.2925C21.8961 14.8556 21.1324 15.172 20.336 15.172C19.5396 15.172 18.7759 14.8556 18.2128 14.2925C17.6497 13.7294 17.3333 12.9657 17.3333 12.1693C17.3333 11.373 17.6497 10.6092 18.2128 10.0461C18.7759 9.48302 19.5396 9.16667 20.336 9.16667ZM20.336 11.1667C20.0701 11.1667 19.815 11.2723 19.627 11.4603C19.439 11.6484 19.3333 11.9034 19.3333 12.1693C19.3333 12.4353 19.439 12.6903 19.627 12.8783C19.815 13.0664 20.0701 13.172 20.336 13.172C20.6019 13.172 20.857 13.0664 21.045 12.8783C21.233 12.6903 21.3387 12.4353 21.3387 12.1693C21.3387 11.9034 21.233 11.6484 21.045 11.4603C20.857 11.2723 20.6019 11.1667 20.336 11.1667Z" fill="#6A4BD9"/>
      </svg> 
      <Typography component='div' sx={{display:'block',float:'center'}}>
        {image}
      </Typography>
      </div>
    </Button>
    <Button className='button1 button-border-dark button-m'
      style={{ width: '100px',height:'100px',marginLeft:'36px',borderRadius: '20px',gap:'4px',padding:'19px, 9px, 19px, 9px'}}>
      <div style={{display:'block'}}>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10.5C4 9.70435 4.31607 8.94129 4.87868 8.37868C5.44129 7.81607 6.20435 7.5 7 7.5H19C19.7956 7.5 20.5587 7.81607 21.1213 8.37868C21.6839 8.94129 22 9.70435 22 10.5V22.5C22 23.2956 21.6839 24.0587 21.1213 24.6213C20.5587 25.1839 19.7956 25.5 19 25.5H7C6.20435 25.5 5.44129 25.1839 4.87868 24.6213C4.31607 24.0587 4 23.2956 4 22.5V10.5ZM7 5.5C5.67392 5.5 4.40215 6.02678 3.46447 6.96447C2.52678 7.90215 2 9.17392 2 10.5V22.5C2 23.8261 2.52678 25.0979 3.46447 26.0355C4.40215 26.9732 5.67392 27.5 7 27.5H19C19.6566 27.5 20.3068 27.3707 20.9134 27.1194C21.52 26.8681 22.0712 26.4998 22.5355 26.0355C22.9998 25.5712 23.3681 25.02 23.6194 24.4134C23.8707 23.8068 24 23.1566 24 22.5V21.5L27.6 24.2C27.8229 24.3671 28.0878 24.4689 28.3653 24.4939C28.6427 24.519 28.9217 24.4662 29.1708 24.3416C29.42 24.2171 29.6295 24.0256 29.776 23.7886C29.9224 23.5516 30 23.2786 30 23V10.01C30 9.73143 29.9224 9.45837 29.776 9.2214C29.6295 8.98444 29.42 8.79294 29.1708 8.66836C28.9217 8.54378 28.6427 8.49104 28.3653 8.51606C28.0878 8.54108 27.8229 8.64286 27.6 8.81L24 11.5V10.5C24 9.84339 23.8707 9.19321 23.6194 8.58658C23.3681 7.97996 22.9998 7.42876 22.5355 6.96447C22.0712 6.50017 21.52 6.13188 20.9134 5.8806C20.3068 5.62933 19.6566 5.5 19 5.5H7ZM24 14L28 11.008V22L24 19V14Z" fill="#6A4BD9"/>
      </svg> 
      <Typography component='div' sx={{display:'block',float:'center'}}>
        {video}
      </Typography>
      </div>
    </Button>
    </div>
    </Paper>     
              
    </Grid>
    <Grid item xs={1} md={1}>

    </Grid>
    <Grid item xs={5} md={5}>
      <div style={{display:'block',marginBottom:'45px'}}>

              <Typography sx={{color:'#6A4BD9', fontWeight:'bold',marginBottom:'10px'}}>{projectName}</Typography>
              <Input  className='input2'
                 placeholder={addProjectName}
                 style={{  width: '400px',height:'47px',display:'block',padding:'5px 14px' }}
                 required
              />
              <div style={{display:'flex',marginTop:'15px'}}>
              <Typography sx={{color:'#6A4BD9', fontWeight:'bold',marginBottom:'10px'}}>{tags}</Typography>
              <Typography sx={{marginLeft:'5px'}}>({until} 10)</Typography>
              </div>              
              <Input  className='input2'
                 placeholder={addTags}
                 style={{  width: '400px',height:'47px',display:'block',padding:'5px 14px' }}
                 sx={{backgroundColor:'#ECEAEF'}}
                 required
              />
              <div style={{display:'flex',marginBottom:'45px'}}>
              <Typography sx={{marginLeft:'15px',marginTop:'10px',color:'#CACACA'}}>{suggested}:</Typography>
              <Typography sx={{marginLeft:'5px',marginTop:'10px',color:'#6A4BD9'}}>design</Typography>
              </div> 
              <Typography sx={{color:'#6A4BD9', fontWeight:'bold'}}>{visibilityOfTheProject}</Typography>
              <Select className='select'
                        style={{ marginTop: '10px', width: '400px',height:'47px',display:'block' }}
                        sx={{color: '#6A4BD9',border: '1px solid #6A4BD9', borderRadius: '30px'}}
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
              
              <div style={{display:'flex',marginTop:'45px'}}>
              <Typography sx={{color:'#6A4BD9', fontWeight:'bold'}}>{intervalsBetweenBlocks}</Typography>
              <Input  className='input2'
                 placeholder="0"
                 style={{  width:'10%',height:'25px',display:'block',backgroundColor:'#CACACA',marginLeft: '130px' }}
                 required
              />
              <Typography sx={{marginLeft:'5px'}}>px</Typography>
              </div> 
              <Slider
                aria-label="Temperature"
                defaultValue={0}
                sx={{color:'#6A4BD9', width: '400px',marginLeft:'10px',marginTop:'30px'}}
              />
              <Button className='button2' 
              style={{width: '400px',height:'47px',padding:'18px, 72px, 18px, 72px',marginTop:'40px',color:'#FFFFFF',borderRadius:'50px'}}>
                {saveAsDraft}
              </Button>
              <Button
                type='submit'
                className='button3'
                style={{ width: '400px',height:'47px',padding:'18px, 72px, 18px, 72px', display: 'block', marginTop: '18px',color:'#FFFFFF',borderRadius:'50px' }}
                >
                  {myContinue}
              </Button>          
        </div>
    </Grid>
</Grid>


  </>
};
export default SharePage;


