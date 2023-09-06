/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from '../../components/UI/UserProfilePages/ProfileMenu';
import { colors } from '../../assets/defaults/colors';
import CommonButton from '../../components/UI/CommonButton';
import CommonLabel from '../../components/UI/UserProfilePages/CommonLabel';
import InputSub from '../../components/UI/UserProfilePages/InputSub';
import CommonInput from '../../components/UI/CommonInput';



const NetworksPage: FunctionComponent = () => {

    const { t } = useTranslation();

    const networks = [
        'instagram',
        'behance',
        'facebook',
        'pinterest'
    ];

    const placeholders = [
        'instagram',
        'behance',
        'facebook',
        'pinterest'
    ];

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: '0', margin: '0' }}>
                <ProfileMenu translation={t}></ProfileMenu>
            </Box>
            <Box
                component='form'
                onSubmit={() => { console.log('submit') }}
                sx={{ width: '100%', padding: '0 275px', marginBottom: '130px' }}>
                {networks.map((network) => (
                    <Box key={networks.indexOf(network)}>
                        <CommonLabel htmlFor={network}
                            sx={{ marginTop: networks.indexOf(network) !== 0 ? '1.5rem' : '0' }}>
                            {network}
                        </CommonLabel>
                        <CommonInput
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={network}
                            id={network}
                            name={network}
                            placeholder={placeholders[networks.indexOf(network)]}
                            autoFocus
                            aria-label={'input ' + network}
                            onChange={() => { console.log(`${network} input changed`) }}
                        />
                    </Box>
                ))}
                <CommonButton
                    type='submit'
                    color='primary'
                    height='bg'
                    sx={{
                        padding: '0 48px',
                        display: 'block',
                        margin: '4rem auto 0'
                    }}
                >
                    {t('common.saveLong')}
                </CommonButton>


            </Box>
        </Box>
    </>
};

export default NetworksPage;