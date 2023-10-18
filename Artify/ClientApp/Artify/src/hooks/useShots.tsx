import { Dispatch, SetStateAction } from "react";
import { corsMod, urls } from "../assets/defaults/urls";
import { IShot, IShotDetails, ShotsFilter } from "../assets/interfaces/shotsInterfaces";
import { getAuthToken } from "./useAuthorization";

const token = getAuthToken() ?? '';

export const getShotsData = async (
    setItem: Dispatch<SetStateAction<IShot[]>>, filters?: ShotsFilter[]
): Promise<void> => {
    let outputJson = null;
    if (filters !== undefined) {
        let outputFilter = "";
        filters.forEach((value: ShotsFilter) => {
            // outputFilter += "\"" + value.filter + "\"" + "=" + "\"" + value.parameter + "\"";
            outputFilter += `"${value.filter}"="${value.parameter}`;
        })
        outputJson = { "output": outputFilter };
    }
    let response;
    if (outputJson !== null) {
        response = await fetch(urls.getShots, {
            method: "get",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify(outputJson),
        });
    }
    else {
        response = await fetch(urls.getShots, {
            method: "get",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token,
            }
        });
    }
    if (response.status !== 200) return;
    const responseJson: IShot[] = await response.json();
    setItem(responseJson);
}

export const getPortfolioShotsData = async (
    userId: number,
    setItem: Dispatch<SetStateAction<IShot[]>>
): Promise<void> => {
    const response = await fetch(`${urls.getShots}?filters=userId%3D${userId}`, {
        method: "get",
        mode: corsMod,
        headers: {
            "Authorization": "Bearer " + token,
        }
    });
    if (response.status !== 200) return;
    const responseJson: IShot[] = await response.json();
    console.log(responseJson);
    setItem(responseJson);
}

export const getShotData = async (
    shotId: number,
    setItem: Dispatch<SetStateAction<IShotDetails | undefined>>
): Promise<void> => {
    const response = await fetch(`${urls.getShot}?id=${shotId}`, {
        method: "get",
        mode: corsMod,
        headers: {
            "Authorization": "Bearer " + token,
        }
    });
    if (response.status !== 200) return;
    const responseJson: IShotDetails = await response.json();
    setItem(responseJson);
}

export const setLike = async (
    shotId: number,
    userId: number,
    liked: 0 | 1
): Promise<void> => {
    const response = await fetch(`${urls.setLike}?shotId=${shotId}&userId=${userId}&liked=${liked}`, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    });
    if (response.status !== 200) return;
}






