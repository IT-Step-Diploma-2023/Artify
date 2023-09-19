import { useState } from 'react';
import { getAuthToken } from '../hooks/useAuthorization';

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

const split = "_"

const token = getAuthToken() ?? '';

export const userData: BasicUserData = await fetch(`api/UsersApi/GetCurrentUserData`, {
    headers: {
        "Authorization": "Bearer " + token,
    },
})
    .then((response) => {
        if (response.status === 200)
            return response.json();
    })
    .catch((error) => {
        console.error("Error: ", error);
    });

export const getCountry = (location: string): string => {
    return location.split(split)[0];
}

export const getAddress = (location: string): string => {
    return location.split(split)[1];
}

export const setLocation = (city: string, address: string): string => {
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


function useUserSettings() {

    const [exchangeData, setExchangeData] = useState<BasicUserFormData>();

    const saveData = (data: BasicUserFormData) => {
        sessionStorage.setItem('basicUserFormData', JSON.stringify(data));
    }

    const loadData = (): BasicUserFormData => {
        const data: BasicUserFormData = JSON.parse(sessionStorage.basicUserFormData as string)
        //sessionStorage.removeItem('basicUserFormData');
        return data;

    }

    const getData = async (): Promise<void> => {
        const response = await fetch(`api/UsersApi/GetCurrentUserData`, {
            headers: {
                "Authorization": "Bearer " + token,
            },
        });
        if (response.status !== 200) return;
        const responseJson: BasicUserData = await response.json();
        saveData(decodeData(responseJson));
    }

    const postData = (data: BasicUserFormData, image: Blob): void => {
        const formData = encodeData(data, image);
        console.log(formData);
        for (const pair of formData.entries()) {
            console.log(pair[0]+': '+pair[1].toString()); 
        }
    }
    return { getData, postData, saveData, loadData };

}

export default useUserSettings;

