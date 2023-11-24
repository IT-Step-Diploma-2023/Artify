import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { corsMod, urls } from "../assets/defaults/urls";
import { IShot, IShotDetails, IUploadedData, ShotsFilter } from "../assets/interfaces/shotsInterfaces";
import { getAuthToken } from "./useAuthorization";


const token = () => {
    return getAuthToken() ?? ""
};

export const getShotsData = async (
    setItem: Dispatch<SetStateAction<IShot[]>>, filters?: ShotsFilter[]
): Promise<void> => {
    let outputJson = null;
    if (filters !== undefined) {
        let outputFilter = "";
        filters.forEach((value: ShotsFilter) => {
            // outputFilter += "\"" + value.filter + "\"" + "=" + "\"" + value.parameter + "\"";
            outputFilter += `"${value.filter}"="${value.parameter}"`;
        })
        outputJson = { "output": outputFilter };
    }
    let response;
    if (outputJson !== null) {
        response = await fetch(urls.getShots, {
            method: "get",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token(),
            },
            body: JSON.stringify(outputJson),
        });
    }
    else {
        response = await fetch(urls.getShots, {
            method: "get",
            mode: corsMod,
            headers: {
                "Authorization": "Bearer " + token(),
            }
        });
    }
    if (response.status !== 200) return;
    const responseJson: IShot[] = await response.json();
    responseJson.forEach(shot => {
        if (shot.appreciatedByCurrentUser === undefined)
            shot.appreciatedByCurrentUser = false;
    })
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
            "Authorization": "Bearer " + token(),
        }
    });
    if (response.status !== 200) return;
    const responseJson: IShot[] = await response.json();
    setItem(responseJson);
}

export const getShotData = async (
    id: number,
    setItem: Dispatch<SetStateAction<IShotDetails | undefined>>
): Promise<void> => {
    // console.log("in getShotData // " + id.toString());
    const response = await fetch(`${urls.getShot}?id=${id}`, {
        method: "get",
        mode: corsMod,
        headers: {
            "Authorization": "Bearer " + token(),
        }
    });
    if (response.status !== 200) return;
    const responseJson: IShotDetails = await response.json();
    if (responseJson.appreciatedByCurrentUser === undefined)
        responseJson.appreciatedByCurrentUser = false;
    setItem(responseJson);
}

export const getShotDataRef = async (
    id: number,
    ref: MutableRefObject<IShotDetails | undefined>
): Promise<void> => {
    const response = await fetch(`${urls.getShot}?id=${id}`, {
        method: "get",
        mode: corsMod,
        headers: {
            "Authorization": "Bearer " + token(),
        }
    });
    if (response.status !== 200) return;
    const responseJson: IShotDetails = await response.json();
    if (responseJson.appreciatedByCurrentUser === undefined)
        responseJson.appreciatedByCurrentUser = false;
    ref.current = responseJson;
}

export const appreciateShot = async (
    id: number,
    setAppreciated: Dispatch<SetStateAction<boolean | undefined>>
): Promise<void> => {
    const shotId = id;
    const response = await fetch(urls.appreciateShot, {
        method: "POST",
        body: JSON.stringify({
            shotId
        }),
        mode: corsMod,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token(),
        },
    });
    if (response.status !== 200) return;
    if (setAppreciated === undefined) return;
    setAppreciated((prev) => { return !prev; }
    )
}

export const isAppreciated = async (
    shotId: number
): Promise<void> => {
    const response = await fetch(`${urls.isAppreciatedByCurrnetUser}?shotId=${shotId}`, {
        method: "GET",
        mode: corsMod,
        headers: {
            "Authorization": "Bearer " + token(),
        },
    });
    if (response.status !== 200) return;
    const result = await response.text();
    console.log(result);
    return;
}

export const postData = async (
    uploadedData: IUploadedData,
    selectedFiles: File[]): Promise<boolean> => {
    const formData = new FormData;
    formData.append("value", JSON.stringify(uploadedData));
    selectedFiles.forEach((file) => formData.append("images", file));

    const response = await fetch(urls.uploadShot, {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": "Bearer " + token(),
        }
    });
    if (response.status !== 200) return false;
    return true;
    // navigate("/");
};






