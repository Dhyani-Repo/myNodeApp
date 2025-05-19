export interface IMainStd {
    name:string,
    age:number,
    rollNo:number,
    gender:EMainGender,
    email:string,
    password:string
}

export enum EMainGender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}


export interface ILoginBody {
    email:string
    password:string
}

// declare namespace Express {
//   export interface Request {
//     user: any;
//   }
// }

declare global {
  namespace Express {
    interface Request {
      user?: any ; 
    }
  }
}


export enum ROLLBACK_ACCESS {
  ADMIN,
  USER,
  SUPER_ADMIN
}