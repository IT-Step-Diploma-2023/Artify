import { getAuthToken } from './useAuthorization';
import { corsMod, urls } from '../assets/defaults/urls';
import { IBasicUserData, IBasicUserFormData } from '../assets/interfaces/usersInterfaces';
import { Dispatch, SetStateAction } from 'react';
import * as location from "../utils/location"

const token = () => {
    return getAuthToken() ?? ""
};

const decodeData = (data: IBasicUserData): IBasicUserFormData => {
    return {
        id: data.id,
        username: data.username,
        fullName: data.fullName ?? '',
        country: location.getCountry(data.location) ?? '',
        address: location.getAddress(data.location) ?? '',
        info: data.info ?? '',
        logoImage: data.logoImage ?? ''
    }
}

const encodeData = (data: IBasicUserFormData, image: Blob): FormData => {
    const updatedFormData = new FormData;
    const value = {
        id: data.id.toString(),
        username: data.username,
        fullName: data.fullName,
        location: location.setLocation(data.country, data.address),
        info: data.info,
        logoImage: data.logoImage
    }
    updatedFormData.append("value", JSON.stringify(value));
    updatedFormData.append('logoImage', image);
    return updatedFormData;
}

function useCurrentUser() {

    const postData = async (
        data: IBasicUserFormData,
        image: Blob,
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setUser: React.Dispatch<React.SetStateAction<IBasicUserFormData | undefined>> | undefined
    ): Promise<void> => {
        const formData = encodeData(data, image);
        await fetch(urls.updateCurrentUser, {
            method: "PUT",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token(),
            },
            body: formData
        }).then(response=>
            response.json()
        ).then(responseJson=>{
            saveData(decodeData(responseJson as IBasicUserData));
            setUser && setUser(decodeData(responseJson as IBasicUserData));
            setIsLoading(false);
            alert("Дані оновлені успішно!");
        }).catch(error => {
            console.log("Error: ", error);
            setIsLoading(false);
        });
    }

    const saveData = (data: IBasicUserFormData) => {
        localStorage.setItem('currentUserData', JSON.stringify(data));
    }

    const loadData = (): IBasicUserFormData | null => {
        if (localStorage.currentUserData === undefined) return null
        const data: IBasicUserFormData = JSON.parse(localStorage.currentUserData as string)
        return data;
    }

    const getShownName = (): string => {
        const currentUserData = loadData();
        if (currentUserData == null) return "";
        if (currentUserData.fullName != "") return currentUserData.fullName
        return currentUserData.username;
    }

    const getLogoImage = (): string => {
        //alert("getLogoImage");
        const currentUserData = loadData();
        if (currentUserData == null) return "";
        if (currentUserData.logoImage != "") return currentUserData.logoImage;
        return "";
    }

    const clearData = () => {
        localStorage.removeItem("currentUserData");
    }

    const getData = async (): Promise<void> => {
        const response = await fetch(urls.getCurrentUserData, {
            method: "GET",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token(),
            },
        });
        if (response.status !== 200) return;
        const responseJson: IBasicUserData = await response.json();
        saveData(decodeData(responseJson));
    }
    return { getData, postData, saveData, loadData, clearData, getShownName, getLogoImage };
}
export default useCurrentUser;

export const retriveData = async (setUser: Dispatch<SetStateAction<IBasicUserFormData | undefined>>, ignore: boolean): Promise<void> => {
    const response = await fetch(urls.getCurrentUserData, {
        method: "GET",
        mode: corsMod,
        headers: {
            "Authorization": "Bearer " + token(),
        },
    });
    if (ignore) return;
    if (response.status !== 200) return;
    const responseJson: IBasicUserData = await response.json();
    setUser(decodeData(responseJson));
}

