export interface IShot {
    title: string,
    description: string,
    tags?: string[]
    isPublic: boolean,
    isDraft: boolean,
    price: number;
    gap: number,
    cover: string,

    thumbnailsPaths: string[],
    id: number,
    createdDateTime: string,
    userId: number,
    username: number,
    userFullName: string,
    logoImage: string,
    appreciationsCount: number,
    appreciatedByCurrentUser: boolean
}

export interface IAppreciation {
    Id: number,
    UserId: number,
    ShotId: number
}

export interface IPortfolioShot {
    id: number,
    cover: string
}

export interface IShotDetails {
    id: number,
    title?: string,
    description?: string,
    createdDateTime: string,
    authorId: number,
    authorUsername: string,
    authorFullName?: string,
    authorLogoImage: string,
    isPublic: boolean,
    blocksGap: number,
    cover: string,
    images: string[],
    appreciations: IAppreciation[],
    tags: string[]
    appreciatedByCurrentUser?: boolean
}

export interface IShotAppreciations {
    shotId: number,
    count: number
}

export interface IVisibilityOption {
    index: number,
    option: string
}

export interface IUploadedData {
    title?: string,
    description?: string,
    tags?: string[],
    isPublic?: boolean,
    isDraft?: boolean,
    price?: number,
    blocksGap?: number,
    cover?: string
}

export interface ShotsFilter {
    filter: string,
    parameter: string
}

