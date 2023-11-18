import { getAuthToken } from './useAuthorization';
import availableProfiles from '../assets/data/availableSocialProfiles.json'
import { urls, corsMod } from '../assets/defaults/urls';
import { ISocialProfiles, ISocialProfile } from '../assets/interfaces/socialProfilesInterfaces';
import { Dispatch, SetStateAction } from 'react';


const token = () => {
    return getAuthToken() ?? ""
};

const decodeData = (data: ISocialProfiles): ISocialProfile[] => {
    const decodedData: ISocialProfile[] = [];
    availableProfiles.forEach((profile) => {
        const item = data.socialProfiles.find((profileItem) => profileItem.name === profile.name);
        if (item !== undefined) profile.address = item.address;
        decodedData.push(profile)
    });
    return decodedData;
}

const encodeData = (data: ISocialProfile[]) => {
    const updatedData: ISocialProfiles = { socialProfiles: [] };
    data.forEach((profile) => {
        if (profile.address !== '')
            updatedData.socialProfiles.push(profile);
    });
    return updatedData;
}

function useSocialProfiles() {

    // const postData = (data: ISocialProfile[]): void => {
    //     const jsonData = encodeData(data);
    //     console.log(jsonData);
    //     sessionStorage.removeItem('socialProfiles');
    // }

    const postData = async (data: ISocialProfile[]): Promise<void> => {
        const formData = new FormData;
        formData.append("value", JSON.stringify(encodeData(data)));

        const response = await fetch(urls.updateUserSocialProfiles, {
            method: "POST",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token(),
            },
            body: formData
        });
        if (response.status !== 200) return;
        const responseJson: ISocialProfiles = await response.json();
        saveData(decodeData(responseJson));
        alert("Дані оновлені успішно!");
    }

    const saveData = (data: ISocialProfile[]) => {
        sessionStorage.setItem('socialProfiles', JSON.stringify(data));
    }

    const loadData = (): ISocialProfile[] => {
        const data: ISocialProfile[] = JSON.parse(sessionStorage.socialProfiles as string)
        return data;
    }

    const getData = async (): Promise<void> => {
        const response = await fetch(urls.getUserSocialProfiles, {
            method: "GET",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token(),
            },
        });
        if (response.status !== 200) return;
        const responseJson: ISocialProfiles = await response.json();
        saveData(decodeData(responseJson));
    }

    return { getData, postData, saveData, loadData };
}

export default useSocialProfiles;

export const retriveData = async (setFormData: Dispatch<SetStateAction<ISocialProfile[] | undefined>>): Promise<void> => {
    const response = await fetch(urls.getUserSocialProfiles, {
        method: "GET",
        mode: corsMod,
        headers: {
            "Authorization": "Bearer " + token(),
        },
    });
    if (response.status !== 200) return;
    const responseJson: ISocialProfiles = await response.json();
    setFormData(decodeData(responseJson));
}

