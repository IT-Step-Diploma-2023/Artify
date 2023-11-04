import { getAuthToken } from './useAuthorization';
import { corsMod, urls } from '../assets/defaults/urls';
import { IBasicUserData, IBasicUserFormData } from '../assets/interfaces/usersInterfaces';
import useLocation from './useLocation';


function useCurrentUser() {

    const { getCountry, getAddress, setLocation } = useLocation();

    const decodeData = (data: IBasicUserData): IBasicUserFormData => {
        return {
            id: data.id,
            username: data.username,
            fullName: data.fullName ?? '',
            country: getCountry(data.location) ?? '',
            address: getAddress(data.location) ?? '',
            info: data.info ?? '',
            logoImage: data.logoImage ?? ''
        }
    }

    const encodeData = (data: IBasicUserFormData, image: Blob): FormData => {
        const updatedFormData = new FormData;
        updatedFormData.append("id", data.id.toString());
        updatedFormData.append('username', data.username);
        updatedFormData.append('fullName', data.fullName);
        updatedFormData.append('location', setLocation(data.country, data.address));
        updatedFormData.append('info', data.info);
        updatedFormData.append('logoImage', image);
        return updatedFormData;
    }

    const postData = (data: IBasicUserFormData, image: Blob): void => {
        const formData = encodeData(data, image);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1].toString());
        }
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

    const clearData = () => {
        localStorage.removeItem("currentUserData");
    }

    const getData = async (): Promise<void> => {
        const token = getAuthToken() ?? '';
        const response = await fetch(urls.getCurrentUserData, {
            method: "GET",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token,
            },
        });
        if (response.status !== 200) return;
        const responseJson: IBasicUserData = await response.json();
        saveData(decodeData(responseJson));
    }

    return { getData, postData, saveData, loadData, clearData, getShownName };
}

export default useCurrentUser;

