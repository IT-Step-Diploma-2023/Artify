/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsMenu from '../../components/UI/UserSettingsComponents/SettingsMenu';
import { colors } from '../../assets/defaults/colors';
import CommonButton from '../../components/UI/CommonButton';
import CommonLabel from '../../components/UI/UserSettingsComponents/CommonLabel';
import CommonInput from '../../components/UI/CommonInput';
import networksData from '../../assets/data/networksData.json'


interface SocialProfile {
    id: number
    name: string
    address: string
}

const NetworksPage: FunctionComponent = () => {

    const { t } = useTranslation();

    const networks = networksData;

    const [editFormData, setEditFormData] = useState({ ...networks });

    const handleFieldChange = (event: any) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        Object.keys(newFormData).forEach(element => {
            if (newFormData[parseInt(element)].name === fieldName)
                newFormData[parseInt(element)].address = fieldValue;
        });
        setEditFormData(newFormData);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userSocialProfiles: SocialProfile[] = [];
        Object.keys(editFormData).forEach(element => {
            userSocialProfiles.push(editFormData[parseInt(element)]);
        });
        ////
        // here will be fetch with PUT request
        ////
        console.log(userSocialProfiles);
    };

    const placeholders = [
        'instagram',
        'behance',
        'facebook',
        'pinterest'
    ];

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: '0', margin: '0' }}>
                <SettingsMenu translation={t}></SettingsMenu>
            </Box>
            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{ width: '100%', padding: '0 275px', marginBottom: '130px' }}>
                {networks.map((network) => (
                    <Box key={networks.indexOf(network)}>
                        <CommonLabel htmlFor={network.name}
                            sx={{ marginTop: networks.indexOf(network) !== 0 ? '1.5rem' : '0' }}>
                            {network.name}
                        </CommonLabel>
                        <CommonInput
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={network.name}
                            id={network.name}
                            name={network.name}
                            placeholder={network.address !== "" ? network.address : placeholders[networks.indexOf(network)]}
                            aria-label={network.name}
                            onChange={handleFieldChange}
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