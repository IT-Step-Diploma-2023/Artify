import { getAuthToken } from './useAuthorization';
import availableProfiles from '../assets/data/availableSocialProfiles.json'
import { urls, corsMod } from '../assets/defaults/urls';
import { ISocialProfiles, ISocialProfile } from '../assets/interfaces/socialProfilesInterfaces';


const token = getAuthToken() ?? '';


function useISocialProfiles() {

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
        })
        return updatedData;
    }

    const postData = (data: ISocialProfile[]): void => {
        const jsonData = encodeData(data);
        console.log(jsonData);
        sessionStorage.removeItem('socialProfiles');
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
                "Authorization": "Bearer " + token,
            },
        });
        if (response.status !== 200) return;
        const responseJson: ISocialProfiles = await response.json();
        saveData(decodeData(responseJson));
    }

    return { getData, postData, saveData, loadData };
}

export default useISocialProfiles;

