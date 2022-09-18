export enum eSpeciality {
    'Music',
    'English',
    'Sport'
}

export interface CalendarDay {
    name: string;
    periodList: Periode[];
}

export interface Calendar {
    dayList: CalendarDay[];
    specialityClass: SpecialityClass;
}

export interface SpecialityClass {
    name: string;
}

export interface Periode {
    dayIx: number;
    periodIx: number;
    isOff: boolean;
    ClassGroup?: ClassGroup_Teacher;
}

export interface ClassGroup_Teacher {
    teacherName: string;
    classLevel: ClassLevel;
}

export interface ClassLevel {
    name: string;
    levelValue: number;
}

export class InformationsDto {
    environement: string;
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
