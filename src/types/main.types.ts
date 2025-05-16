export interface IMainStd {
    name:string,
    age:number,
    rollNo:number,
    gender:EMainGender
}

export enum EMainGender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}


export interface  IMainStdDB{
    id:string,
    name:string,
    age:number,
    rollNo:number,
    gender:EMainGender
}