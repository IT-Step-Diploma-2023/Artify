// import { IBasicUserFormData } from "../assets/interfaces/usersInterfaces";

import { IBasicUserFormData } from "../assets/interfaces/usersInterfaces";


const useStorage = () => {

    function setTargetUserId(id: number): void {
        localStorage.setItem("targetUserId", id.toString())
    }

    function getTargetUserId(): number {
        const idString = localStorage.getItem("targetUserId");
        if (idString === null) return -1;
        return parseInt(idString);
    }

    function setTargetUser(
        fullName: string,
        location: string,
        info: string,
        logoImage: string
    ) {
        localStorage.setItem("targetUserFullName", fullName)
        const country = location.split('_')[0];
        const address = location.split('_')[1];
        localStorage.setItem("targetUserCountry", country);
        localStorage.setItem("targetUserAddress", address);
        localStorage.setItem("targetUserInfo", info);
        localStorage.setItem("targetUserLogoImage", logoImage);
    }

    function getTargetUser(): IBasicUserFormData {

        const username = localStorage.getItem("targetUserFullName") ?? "";
        const fullName = localStorage.getItem("targetUserFullName") ?? "";
        const country = localStorage.getItem("targetUserCountry") ?? "";
        const address = localStorage.getItem("targetUserAddress") ?? "";
        const info = localStorage.getItem("targetUserInfo") ?? "";
        const logoImage = localStorage.getItem("targetUserLogoImage") ?? "";

        const user = {
            username: username,
            fullName: fullName,
            country: country,
            address: address,
            info: info,
            logoImage: logoImage
        };

        return user;
    }

    return { setTargetUserId, getTargetUserId, setTargetUser, getTargetUser }
}

export default useStorage;