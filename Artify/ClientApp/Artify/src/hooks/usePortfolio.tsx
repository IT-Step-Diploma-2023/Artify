import { corseMode, urls } from "../assets/defaults/urls";
import { IPortfolioUserData } from "../assets/interfaces/usersInterfaces";
import { getAuthToken } from "./useAuthorization";
import { Dispatch, SetStateAction } from "react";

const token = getAuthToken() ?? '';

export const getUserData = async (
    id: number,
    setItem: Dispatch<SetStateAction<IPortfolioUserData>>
): Promise<void> => {
    const response = await fetch(urls.getCurrentUserData, {
        method: "get",
        mode: corseMode,
        headers: {
            "Authorization": "Bearer " + token,
        },
    });
    if (response.status !== 200) return;
    const responseJson: IPortfolioUserData = await response.json();
    setItem(responseJson);
}