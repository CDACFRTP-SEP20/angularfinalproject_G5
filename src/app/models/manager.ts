import { Sport } from './sport';

export class Manager {
        userId:number;
        userName:string;
        address:string;
        mobileNumber:string;
        email:string;
        password:string;
        sport: Sport[]

        constructor(
            userId:number,
            userName:string,
            address:string,
            mobileNumber:string,
            email:string,
            password:string,
            sport: Sport[]
        ){}

}
