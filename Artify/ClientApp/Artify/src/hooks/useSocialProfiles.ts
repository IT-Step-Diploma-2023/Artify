import { getAuthToken } from './useAuthorization';
import availableProfiles from '../assets/data/availableSocialProfiles.json'
import { urls, corseMode } from '../assets/defaults/urls';


const token = getAuthToken() ?? '';

export interface SocialProfile {
    name: string,
    address: string
}

export interface SocialProfiles {
    socialProfiles: SocialProfile[]
}

function useSocialProfiles() {


    const decodeData = (data: SocialProfiles): SocialProfile[] => {
        const decodedData: SocialProfile[] = [];
        availableProfiles.forEach((profile) => {
            const item = data.socialProfiles.find((profileItem) => profileItem.name === profile.name);
            if (item !== undefined) profile.address = item.address;
            decodedData.push(profile)
        });
        return decodedData;
    }


    const encodeData = (data: SocialProfile[]) => {
        const updatedData: SocialProfiles = { socialProfiles: [] };
        data.forEach((profile) => {
            if (profile.address !== '')
                updatedData.socialProfiles.push(profile);
        })
        return updatedData;
    }

    const postData = (data: SocialProfile[]): void => {
        const jsonData = encodeData(data);
        console.log(jsonData);
        sessionStorage.removeItem('socialProfiles');
    }

    const saveData = (data: SocialProfile[]) => {
        sessionStorage.setItem('socialProfiles', JSON.stringify(data));
    }

    const loadData = (): SocialProfile[] => {
        const data: SocialProfile[] = JSON.parse(sessionStorage.socialProfiles as string)
        return data;
    }

    const getData = async (): Promise<void> => {
        const response = await fetch(urls.getUserSocialProfiles, {
            method: "GET",
            mode: corseMode,
            headers: {
                "Authorization": "Bearer " + token,
            },
        });
        if (response.status !== 200) return;
        const responseJson: SocialProfiles = await response.json();
        saveData(decodeData(responseJson));
    }

    return { getData, postData, saveData, loadData };
}

export default useSocialProfiles;

