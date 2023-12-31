/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../assets/defaults/colors';
import CommonButton from '../../../components/UI/CommonButton';
import CommonInput from '../../../components/UI/CommonInput';
import InputErrorMessage from '../../../components/UI/InputErrorMessage';
import SettingsMenu from '../components/layout/SettingsMenu';
import CommonLabel from '../components/UI/CommonLabel';
import { ISocialProfile } from '../../../assets/interfaces/socialProfilesInterfaces';
import useSocialProfiles from '../../../hooks/useSocialProfiles';
import { retriveData } from '../../../hooks/useSocialProfiles';


const NetworksPage: FunctionComponent = () => {

    /* #region localization */

    const { t } = useTranslation();

    const inputErrorMessage = t('accountPage.socialNetworksErrors.socialNetworkError');
    const formErrorMessage = t('common.formError');

    /* #endregion */

    const { postData } = useSocialProfiles();


    const [formData, setFormData] = useState<ISocialProfile[] | undefined>();

    useEffect(() => { void retriveData(setFormData) }, []);

    /* #region validation */
    // ^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$

    const errors: string[] = [];
    const states: boolean[] = [];

    if (formData) {
        formData.forEach(() => {
            errors.push('');
            states.push(false);
        });
    }

    const [inputErrors, setInputError] = useState(errors);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        inputErrors.find((error) => error !== '') ?
            setFormValid(false) :
            setFormValid(true);
    }, [inputErrors]);

    const validate = (id: number, name: string, value: string) => {
        console.log("validation");
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
            if (prevData === undefined) return;
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
        if (formData === undefined) return;
        void postData(formData);
    }
    // if (formData) {
    //     formData.map((profile) => {
    //         console.log(formData.indexOf(profile).toString() + " invalid address: " + (inputErrors[formData.indexOf(profile)] === '').toString());
    //         console.log(formData.indexOf(profile).toString() + " address length=0: " + (profile.address.length === 0).toString());
    //     });
    //     console.log(inputErrors);
    // }

    const getValidity = (profile: ISocialProfile) => {
        //console.log(profile.address + "errorLength: " + inputErrors.length.toString())
        if (inputErrors.length === 0) return true;
        if (formData)
            return (inputErrors[formData.indexOf(profile)] === '' || profile.address.length === 0);
        return false;
    }

    return <>
        {formData && <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
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
                            isValid={getValidity(profile)}
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
        </Box>}

    </>
};

export default NetworksPage;