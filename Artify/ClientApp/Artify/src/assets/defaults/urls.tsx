//on dev
// const REACT_APP_BASE_URL= "";

//on dev 
const REACT_APP_BASE_URL= "https://localhost:5000/";

//on build
// const REACT_APP_BASE_URL= "https://my-designo.azurewebsites.net/"

export const urls = {
    authentication: `${REACT_APP_BASE_URL}api/Authentication/Authentication`,
    registration: `${REACT_APP_BASE_URL}api/Authentication/Registration`,
    getCurrentUserData: `${REACT_APP_BASE_URL}api/users/UsersApi/GetCurrentUserData`,
    getUserSocialProfiles: `${REACT_APP_BASE_URL}api/UsersApi/GetUserSocialProfiles`,
    uploadShot: `${REACT_APP_BASE_URL}api/ShotsApi/UploadShot`,
    getShot: `${REACT_APP_BASE_URL}api/ShotsApi/GetShot`,
    getShots: `${REACT_APP_BASE_URL}api/ShotsApi/GetShots`,
    setLike: `${REACT_APP_BASE_URL}api/ShotsApi/likeShot`,
    setMark: `${REACT_APP_BASE_URL}api/ShotsApi/markShot`,
}