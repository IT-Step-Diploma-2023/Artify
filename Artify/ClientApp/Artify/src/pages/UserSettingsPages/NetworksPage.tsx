/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsMenu from '../../components/UI/UserSettingsComponents/SettingsMenu';
import { colors } from '../../assets/defaults/colors';
import CommonButton from '../../components/UI/CommonButton';
import CommonLabel from '../../components/UI/UserSettingsComponents/CommonLabel';
import CommonInput from '../../components/UI/CommonInput';
import useSocialProfiles from '../../hooks/useSocialProfiles';
import InputErrorMessage from '../../components/UI/InputErrorMessage';


const NetworksPage: FunctionComponent = () => {

    /* #region localization */

    const { t } = useTranslation();

    const inputErrorMessage = t('accountPage.socialNetworksErrors.socialNetworkError');
    const formErrorMessage = t('common.formError');

    /* #endregion */

    const { getData, postData, loadData, } = useSocialProfiles();
       
    useEffect(() => { void getData() });

    const [formData, setFormData] = useState(loadData);

    /* #region validation */
    // ^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$

    const errors: string[] = [];
    const states: boolean[] = [];
    formData.forEach(() => {
        errors.push('');
        states.push(false);
    });

    const [inputErrors, setInputError] = useState(errors);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        inputErrors.find((error) => error !== '') !== undefined ?
            setFormValid(false) :
            setFormValid(true);
    }, [inputErrors]);

    const validate = (id: number, name: string, value: string) => {
        const re = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
        setInputError((prevData) => {
            const newData = [...prevData]
            re.test(String(value)) && value.includes('.' + name + '.') || value === '' ?
                newData[id] = '' :
                newData[id] = inputErrorMessage;
            return newData;
        });
    }

    /* #endregion */

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const id = parseInt(event.target.id);
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prevData) => {
            const newData = [...prevData];
            newData[id].address = value;
            return newData;
        });
        validate(id, name, value);
    };

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formValid) {
            alert(formErrorMessage);
            return;
        }
        postData(formData);
    }

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: '0', margin: '0' }}>
                <SettingsMenu translation={t}></SettingsMenu>
            </Box>
            <Box
                component='form'
                onSubmit={submitHandler}
                sx={{ width: '100%', padding: '0 275px', marginBottom: '130px' }}>
                {formData.map((profile) => (
                    <Box key={formData.indexOf(profile)}>
                        <CommonLabel htmlFor={profile.name}
                            sx={{ marginTop: formData.indexOf(profile) !== 0 ? '1.5rem' : '0' }}>
                            {profile.name}
                        </CommonLabel>
                        <CommonInput
                            isValid={inputErrors[formData.indexOf(profile)] === '' || profile.address.length === 0}
                            sx={{ width: '100%' }}
                            color='primary'
                            height='bg'
                            title={profile.name}
                            id={formData.indexOf(profile).toString()}
                            name={profile.name}
                            placeholder={profile.name}
                            aria-label={profile.name}
                            value={profile.address}
                            onChange={changeHandler}
                        />
                        {(inputErrors[formData.indexOf(profile)]) &&
                            <InputErrorMessage message={inputErrorMessage + profile.name} />
                        }
                    </Box>
                ))}

                <CommonButton
                    type='submit'
                    color='primary'
                    height='bg'
                    sx={{
                        padding: '0 48px',
                        display: 'block',
                        margin: '4rem auto 0',
                        backgroundColor: ((formValid) ? colors.darkViolet : colors.grey)
                    }}
                >
                    {t('common.saveLong')}
                </CommonButton>
            </Box>
        </Box>
    </>
};

export default NetworksPage;