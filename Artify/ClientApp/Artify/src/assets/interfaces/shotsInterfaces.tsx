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
    appreciationsCount: number
}

export interface IAppreciation {
    Id: number,
    UserId: number,
    ShotId: number
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
  }
