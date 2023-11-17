// import { IBasicUserFormData } from "../assets/interfaces/usersInterfaces";

import { IBasicUserData, IBasicUserFormData } from "../assets/interfaces/usersInterfaces";
import * as location from "../utils/location";


const useTargetUser = () => {

    function setTargetUserId(id: number): void {
        localStorage.setItem("targetUserId", id.toString())
    }

    function getTargetUserId(): number {
        const idString = localStorage.getItem("targetUserId");
        if (idString === null) return -1;
        return parseInt(idString);
    }

    function setTargetUser(data: IBasicUserData) {
        const targetUser: IBasicUserFormData = {
            id: data.id,
            username: data.username,
            fullName: data.fullName,
            country: location.getCountry(data.location),
            address: location.getAddress(data.location),
            info: data.info,
            logoImage: data.logoImage
        };
        localStorage.setItem("targetUserData", JSON.stringify(targetUser));
    }

    function getTargetUser(): IBasicUserFormData | null {
        if (localStorage.targetUserData === undefined) return null
        const data: IBasicUserFormData = JSON.parse(localStorage["targetUserData"] as string)
        return data;
    }

    return { setTargetUserId, getTargetUserId, setTargetUser, getTargetUser }
}

export default useTargetUser;