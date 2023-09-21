import { getAuthToken } from '../hooks/useAuthorization';


const url = 'api/UsersApi/GetCurrentUserData';
const token = getAuthToken() ?? '';
const split = "_"

export interface BasicUserData {
    username: string,
    fullName: string,
    location: string,
    info: string,
    logoImage: string
}

export interface BasicUserFormData {
    username: string,
    fullName: string,
    country: string,
    address: string,
    info: string,
    logoImage: string
}


function useUserSettings() {

    const getCountry = (location: string): string => {
        return location.split(split)[0];
    }

    const getAddress = (location: string): string => {
        return location.split(split)[1];
    }

    const setLocation = (city: string, address: string): string => {
        return city + split + address;
    }

    const decodeData = (data: BasicUserData): BasicUserFormData => {
        return {
            username: data.username,
            fullName: data.fullName ?? '',
            country: getCountry(data.location) ?? '',
            address: getAddress(data.location) ?? '',
            info: data.info ?? '',
            logoImage: data.logoImage ?? ''
        }
    }

    const encodeData = (data: BasicUserFormData, image: Blob): FormData => {
        const udatedFormData = new FormData;
        udatedFormData.append('username', data.username);
        udatedFormData.append('fullName', data.fullName);
        udatedFormData.append('location', setLocation(data.country, data.address));
        udatedFormData.append('info', data.info);
        udatedFormData.append('logoImage', image);
        return udatedFormData;
    }

    const postData = (data: BasicUserFormData, image: Blob): void => {
        const formData = encodeData(data, image);
        console.log(formData);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1].toString());
        }
        sessionStorage.removeItem('basicUserFormData');
    }

    const saveData = (data: BasicUserFormData) => {
        sessionStorage.setItem('basicUserFormData', JSON.stringify(data));
    }

    const loadData = (): BasicUserFormData => {
        const data: BasicUserFormData = JSON.parse(sessionStorage.basicUserFormData as string)
        //sessionStorage.removeItem('basicUserFormData');
        return data;
    }

    const getData = async (): Promise<void> => {
        const response = await fetch(url, {
            headers: {
                "Authorization": "Bearer " + token,
            },
        });
        if (response.status !== 200) return;
        const responseJson: BasicUserData = await response.json();
        saveData(decodeData(responseJson));
    }

    return { getData, postData, saveData, loadData };
}

export default useUserSettings;

