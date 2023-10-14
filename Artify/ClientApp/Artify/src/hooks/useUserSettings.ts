import { getAuthToken } from '../hooks/useAuthorization';
import { corseMode, urls } from '../assets/defaults/urls';
import { Dispatch, SetStateAction } from "react";
import { IBasicUserData, IBasicUserFormData } from '../assets/interfaces/usersInterfaces';


const token = getAuthToken() ?? '';
const separator = "_"


function useUserSettings() {

    const getCountry = (location: string): string => {
        // if(location === undefined) return "";
        if (location && location.indexOf(separator) !== 0)
            return location.split(separator)[0];
        return "";
    }

    const getAddress = (location: string): string => {
        // if(location === undefined) return "";
        if (location && location.indexOf(separator) !== -1)
            return location.split(separator)[1];
        return location;
    }

    const setLocation = (city: string, address: string): string => {
        return city + separator + address;
    }

    const decodeData = (data: IBasicUserData): IBasicUserFormData => {
        console.log(data)
        return {
            username: data.username,
            fullName: data.fullName ?? '',
            country: getCountry(data.location) ?? '',
            address: getAddress(data.location) ?? '',
            info: data.info ?? '',
            logoImage: data.logoImage ?? ''
        }
    }

    const encodeData = (data: IBasicUserFormData, image: Blob): FormData => {
        const udatedFormData = new FormData;
        udatedFormData.append('username', data.username);
        udatedFormData.append('fullName', data.fullName);
        udatedFormData.append('location', setLocation(data.country, data.address));
        udatedFormData.append('info', data.info);
        udatedFormData.append('logoImage', image);
        return udatedFormData;
    }

    const postData = (data: IBasicUserFormData, image: Blob): void => {
        const formData = encodeData(data, image);
        console.log(formData);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1].toString());
        }
        sessionStorage.removeItem('basicUserFormData');
    }

    const saveData = (data: IBasicUserFormData) => {
        sessionStorage.setItem('basicUserFormData', JSON.stringify(data));
    }

    const loadData = (): IBasicUserFormData => {
        const data: IBasicUserFormData = JSON.parse(sessionStorage.basicUserFormData as string)
        //sessionStorage.removeItem('basicUserFormData');
        return data;
    }

    const getData = async (): Promise<void> => {
        const response = await fetch(urls.getCurrentUserData, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
            },
        });
        if (response.status !== 200) return;
        const responseJson: IBasicUserData = await response.json();
        saveData(decodeData(responseJson));
    }

    const getData2 = async (setItem: Dispatch<SetStateAction<IBasicUserFormData>>): Promise<void> => {
        const response = await fetch(urls.getCurrentUserData, {
            method: "GET",
            mode: corseMode,
            headers: {
                "Authorization": "Bearer " + token,
            },
        });
        if (response.status !== 200) return;
        const responseJson: IBasicUserData = await response.json();
        
        setItem(decodeData(responseJson));
    }



    return { getData, postData, saveData, loadData, getData2 };
}

export default useUserSettings;

