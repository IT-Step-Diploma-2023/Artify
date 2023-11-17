
/* #region outdated version */

//on dev NOT USED
// const REACT_APP_BASE_URL= "";
//on dev 
// const REACT_APP_BASE_URL= "https://localhost:3000/";
//on build
// const REACT_APP_BASE_URL= "https://my-designo.azurewebsites.net/"

// export const corsMod = "cors"; // dev
// export const corsMod = "no-cors"; // build
// export const corsMod = "same-origin"; // NOT USED

/* #endregion */

// eslint-disable-next-line prefer-const
let context = 0; // 0 - dev, 1 - build

const setBaseUrl = () => {
    if (context === 0) return "https://localhost:3000/";
    return "https://my-designo.azurewebsites.net/";
}

export const baseUrl: string = setBaseUrl();
export const baseUrlApi: string = baseUrl + "api/";

export const urls = {
    // user
    authentication: `${baseUrl}api/Authentication/Authentication`,
    registration: `${baseUrl}api/Authentication/Registration`,
    getCurrentUserData: `${baseUrl}api/UsersApi/GetCurrentUserData`,
    getTargetUserData: `${baseUrl}api/UsersApi/GetTargetUserData`,
    updateCurrentUser: `${baseUrl}api/UsersApi/UpdateCurrentUser`, // no cntroller now
    getUserSocialProfiles: `${baseUrl}api/UsersApi/GetUserSocialProfiles`,
    // shot
    uploadShot: `${baseUrl}api/ShotsApi/UploadShot`,
    getShot: `${baseUrl}api/ShotsApi/GetShot`,
    getShots: `${baseUrl}api/ShotsApi/GetShots`,
    appreciateShot: `${baseUrl}api/ShotsApi/AppreciateShot`,
    isAppreciatedByCurrnetUser: `${baseUrl}api/ShotsApi/IsAppreciatedByCurrnetUser`,
    setMark: `${baseUrl}api/ShotsApi/markShot`,
}


const setCors = () => {
    if (context === 0) return "cors";
    return "no-cors";
}

export const corsMod = setCors();

