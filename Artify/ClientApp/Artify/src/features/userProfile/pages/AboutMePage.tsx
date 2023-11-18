/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@mui/base/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Input } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from '../components/layout/ProfileMenu';
import ProfileTopComponent from '../components/layout/ProfileTopComponent';


const AboutMePage: FunctionComponent = () => {

  const { t } = useTranslation();
  
  const aboutMe = t('aboutMe.aboutMe');
  const inWeb = t('aboutMe.inWeb');
  const tags = t('aboutMe.tags');

  return <>
    <ProfileTopComponent />
    <ProfileMenu translation={t}></ProfileMenu>
    <Grid container spacing={{ xs: 2, md: 3 }} style={{ marginLeft: '50px' }}>
      <Grid item xs={6} md={6}>
        <div style={{ display: 'block', marginBottom: '45px' }}>
          <Typography component='div' sx={{ display: 'block', fontSize: '20px', marginTop: '26px' }}>
            {aboutMe}
          </Typography>
          <Input
            multiline
            rows={6}
            sx={{ display: 'block', padding: '10px, 30px, 10px, 30px', width: '600px', height: '205px', marginTop: '24px', borderRadius: '30px', border: '1px solid #CACACA' }}
          />
        </div>
        <div style={{ display: 'block', marginBottom: '45px' }}>
          <Typography component='div' sx={{ display: 'block', fontSize: '20px', marginTop: '24px', marginBottom: '24px' }}>
            {tags}
          </Typography>
          <Chip label="Clickable Link" component="a" href="#basic-chip" clickable className='tag'
            sx={{ backgroundColor: '#ECEAEF', borderRadius: '50px', border: '1px solid #CACACA' }} />
          <Chip label="Clickable Link" component="a" href="#basic-chip" clickable className='tag'
            sx={{ backgroundColor: '#ECEAEF', borderRadius: '50px', border: '1px solid #CACACA' }} />
          <Chip label="Clickable Link" component="a" href="#basic-chip" clickable className='tag'
            sx={{ backgroundColor: '#ECEAEF', borderRadius: '50px', border: '1px solid #CACACA' }} />
        </div>
      </Grid>
      <Grid item xs={2} md={2}>

      </Grid>
      <Grid item xs={4} md={4}>
        <div style={{ display: 'block', marginBottom: '45px' }}>
          <Typography component='div' sx={{ display: 'block', fontSize: '20px', marginTop: '26px' }}>
            {inWeb}
          </Typography>
          <Button className='tag1'
            style={{ display: 'block', width: '280px', height: '42px', marginTop: '24px', left: '100px', border: '1px solid #CACACA', borderRadius: '30px', gap: '10px', padding: '10px, 22px, 10px, 22px' }}>
            <svg style={{ verticalAlign: 'middle' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00322 3.95684C5.76729 3.95684 3.96377 5.76035 3.96377 7.99629C3.96377 10.2322 5.76729 12.0357 8.00322 12.0357C10.2392 12.0357 12.0427 10.2322 12.0427 7.99629C12.0427 5.76035 10.2392 3.95684 8.00322 3.95684ZM8.00322 10.6225C6.5583 10.6225 5.37705 9.44473 5.37705 7.99629C5.37705 6.54785 6.55479 5.37012 8.00322 5.37012C9.45166 5.37012 10.6294 6.54785 10.6294 7.99629C10.6294 9.44473 9.44814 10.6225 8.00322 10.6225ZM13.1501 3.7916C13.1501 4.31543 12.7282 4.73379 12.2079 4.73379C11.6841 4.73379 11.2657 4.31191 11.2657 3.7916C11.2657 3.27129 11.6876 2.84941 12.2079 2.84941C12.7282 2.84941 13.1501 3.27129 13.1501 3.7916ZM15.8255 4.74785C15.7657 3.48574 15.4774 2.36777 14.5528 1.44668C13.6317 0.525586 12.5138 0.237305 11.2517 0.174023C9.95088 0.100195 6.05205 0.100195 4.75127 0.174023C3.49268 0.233789 2.37471 0.52207 1.4501 1.44316C0.525488 2.36426 0.240723 3.48223 0.177441 4.74434C0.103613 6.04512 0.103613 9.94394 0.177441 11.2447C0.237207 12.5068 0.525488 13.6248 1.4501 14.5459C2.37471 15.467 3.48916 15.7553 4.75127 15.8186C6.05205 15.8924 9.95088 15.8924 11.2517 15.8186C12.5138 15.7588 13.6317 15.4705 14.5528 14.5459C15.4739 13.6248 15.7622 12.5068 15.8255 11.2447C15.8993 9.94394 15.8993 6.04863 15.8255 4.74785ZM14.145 12.6404C13.8708 13.3295 13.3399 13.8604 12.6474 14.1381C11.6103 14.5494 9.14932 14.4545 8.00322 14.4545C6.85713 14.4545 4.39268 14.5459 3.35908 14.1381C2.67002 13.8639 2.13916 13.333 1.86143 12.6404C1.4501 11.6033 1.54502 9.14238 1.54502 7.99629C1.54502 6.8502 1.45361 4.38574 1.86143 3.35215C2.13564 2.66309 2.6665 2.13223 3.35908 1.85449C4.39619 1.44316 6.85713 1.53809 8.00322 1.53809C9.14932 1.53809 11.6138 1.44668 12.6474 1.85449C13.3364 2.12871 13.8673 2.65957 14.145 3.35215C14.5563 4.38926 14.4614 6.8502 14.4614 7.99629C14.4614 9.14238 14.5563 11.6068 14.145 12.6404Z" fill="#271846" />
            </svg>
            <Typography component='div' sx={{ float: 'center', padding: '1px 6px', display: 'inline-block' }}>
              instagram
            </Typography>
          </Button>
          <Button className='tag1'
            style={{ display: 'block', width: '280px', height: '42px', marginTop: '22px', left: '100px', border: '1px solid #CACACA', borderRadius: '30px', gap: '10px', padding: '10px, 22px, 10px, 22px' }}>

            <svg style={{ verticalAlign: 'middle' }} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_583_1717)">
                <path d="M18.5 9C18.5 4.02891 14.4711 0 9.5 0C4.52891 0 0.5 4.02891 0.5 9C0.5 13.4926 3.78922 17.216 8.09445 17.8914V11.6037H5.81106V9H8.09445V7.01754C8.09445 4.76367 9.43566 3.51633 11.4923 3.51633C12.4784 3.51633 13.5092 3.69387 13.5092 3.69387V5.90801H12.3751C11.2557 5.90801 10.9105 6.6034 10.9105 7.31355V9H13.4059L13.0065 11.6037H10.9105V17.8914C15.2108 17.216 18.5 13.4926 18.5 9Z" fill="#271846" />
                <path d="M13.0007 11.6035L13.4005 8.99979H10.9051V7.31334C10.9051 6.60318 11.2552 5.90779 12.3697 5.90779H13.5038V3.69365C13.5038 3.69365 12.473 3.51611 11.4869 3.51611C9.43063 3.51611 8.08906 4.76381 8.08906 7.01732V8.99979H5.80566V11.6035H8.08906V17.8912C8.54785 17.965 9.01613 17.9998 9.49461 17.9998C9.97309 17.9998 10.4414 17.9604 10.9002 17.8912V11.6035H13.0007Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_583_1717">
                  <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <Typography component='div' sx={{ float: 'center', padding: '1px 6px', display: 'inline-block' }}>
              facebook
            </Typography>
          </Button>
          <Button className='tag1'
            style={{ display: 'block', width: '280px', height: '42px', marginTop: '22px', left: '100px', border: '1px solid #CACACA', borderRadius: '30px', gap: '10px', padding: '10px, 22px, 10px, 22px' }}>
            <svg style={{ verticalAlign: 'middle' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_583_1723)">
                <path d="M0 9.0009C0.0468047 6.44645 0.948695 4.31323 2.70747 2.60306C4.46625 0.892889 6.56346 0.0234023 9.0009 0C11.6256 0.0468047 13.7768 0.943294 15.4527 2.68947C17.1287 4.43564 17.9784 6.54005 18.0018 9.0009C17.955 11.532 17.0531 13.6598 15.2943 15.3825C13.5356 17.1035 11.4383 17.9766 9.0009 18C8.15662 18 7.31413 17.8704 6.46985 17.613C6.63366 17.3555 6.79748 17.0621 6.9613 16.7345C7.14851 16.3366 7.38254 15.586 7.66517 14.4843C7.73537 14.18 7.84158 13.7696 7.982 13.2529C8.14581 13.5338 8.42664 13.7912 8.82628 14.027C9.88119 14.5185 10.9937 14.4716 12.1656 13.8866C13.3843 13.1827 14.2286 12.0936 14.6967 10.6175C15.1179 9.07111 15.0657 7.63456 14.5383 6.31143C14.0108 4.9865 13.0675 4.0324 11.7084 3.44554C9.9982 2.9541 8.33303 3.0063 6.71647 3.60396C5.09991 4.20162 3.9748 5.22772 3.34113 6.68047C3.17732 7.21872 3.07831 7.75338 3.0423 8.28083C3.0063 8.80828 3.0243 9.32313 3.09451 9.82718C3.16472 10.3312 3.34113 10.7831 3.62196 11.1809C3.90279 11.5788 4.27903 11.8848 4.74707 12.0954C4.86409 12.1422 4.9577 12.1422 5.0279 12.0954C5.12151 12.0486 5.21512 11.8614 5.30873 11.5338C5.40234 11.2061 5.43834 10.9829 5.41494 10.8659C5.39154 10.8191 5.34473 10.7363 5.27453 10.6193C4.78308 9.82178 4.61746 8.9847 4.78308 8.10621C4.94689 7.22772 5.31053 6.48245 5.87219 5.87399C6.73987 5.09991 7.75337 4.67867 8.91269 4.60846C10.072 4.53825 11.0639 4.85509 11.883 5.55716C12.3276 6.07201 12.6157 6.69307 12.7435 7.42034C12.8713 8.14762 12.8731 8.84429 12.7435 9.51215C12.6139 10.18 12.3852 10.8065 12.0576 11.3933C11.4707 12.3078 10.7795 12.7759 9.9838 12.7993C9.51575 12.7759 9.13411 12.5941 8.84068 12.2538C8.54725 11.9136 8.45905 11.5212 8.57786 11.0765C8.62466 10.8191 8.76508 10.315 8.9991 9.56436C9.23312 8.81368 9.36274 8.25203 9.38614 7.87759C9.31593 6.9865 8.90549 6.52925 8.15481 6.50585C7.56796 6.57606 7.13591 6.84068 6.85328 7.29613C6.57066 7.75158 6.41944 8.27543 6.39604 8.86049C6.46625 9.54096 6.57246 10.009 6.71287 10.2664C6.45544 11.3213 6.25563 12.1656 6.11521 12.7975C6.06841 12.9613 5.93879 13.4653 5.72817 14.3096C5.51755 15.1539 5.40054 15.7984 5.37714 16.243V17.2277C3.71377 16.4536 2.39964 15.3357 1.44014 13.8704C0.480648 12.405 0 10.7813 0 9.0009Z" fill="#271846" />
              </g>
              <defs>
                <clipPath id="clip0_583_1723">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Typography component='div' sx={{ padding: '1px 6px', display: 'inline-block' }}>
              pinterest
            </Typography>
          </Button>
        </div>
      </Grid>
    </Grid>


  </>
};
export default AboutMePage;

