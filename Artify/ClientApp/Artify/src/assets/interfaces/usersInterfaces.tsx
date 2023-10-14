export interface IBasicUserData {
    username: string,
    fullName: string,
    location: string,
    info: string,
    logoImage: string
}

export interface IBasicUserFormData {
    username: string,
    fullName: string,
    country: string,
    address: string,
    info: string,
    logoImage: string
}

export interface IPortfolioUserData {
    id: number,
    username: string,
    fullName: string,
    email: string,
    roleId: number,
    location: string,
    info: string,
    webSite: string,
    biography: string,
    logoImage: string
}
