import { Time } from '@angular/common';

export class Userbatch {
    batchId:number;
    batchName:String;
    startTime:Time;
    startDate:Date;
    duration:number;
    batchSize:number
    sportId:number;
    sportName:String;
    userId:number;
    availability:number;
    status:string;
    planId:number;

    constructor(
    batchId:number,
    batchName:String,
    startTime:Time,
    startDate:Date,
    duration:number,
    batchSize:number,
    sportId:number,
    sportName:String,
    userId:number,
    availability:number,
    status:string,
    planId:number
    ){}
}


