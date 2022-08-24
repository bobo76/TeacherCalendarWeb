export class InformationsDto {
    environement: string;
}

export class DomainSearchDto {
    domNo: number;
    grpDomNo: number;
    domName: string;
}

export interface IDomainDto {
    domNo: number;
    grpDomNo: number;
    domName: string;
    optionMobile: boolean;
    domainGroup: IDomainGroupDto;
}

export interface IDomainGroupDto {
    grpDomNo: number;
    ramqUser: string;
    ramqSyncDate: Date;
    ramqSync: boolean;
}

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
}

export interface IUserSearchDto {
    useNo: string;
    groupNo: number;
    domNo: number;
    firstName: string;
    lastName: string;
    login: string;
    creationDate: Date;
    licence: string;
}

export interface IUserDto {
    useNo: string;
    groupNo: number;
    domNo: number;
    firstName: string;
    lastName: string;
    login: string;
    creationDate: Date;
    userLastUpdate: Date;
    lastLogin: Date;
    acountLocked: boolean;
    isActive: boolean;
    licence: string;
    email: string;
    activationDate: Date | null;
    resetPassword: boolean;
    deletedDate: Date | null;
    deletedByUseNo: string;
    deletedBy: IUserSearchDto;
}

export class MenuItem {
    route: string;
    icon: string;
    title: string;
}
