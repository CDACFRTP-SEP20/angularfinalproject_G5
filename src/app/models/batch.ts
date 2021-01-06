import { Time } from '@angular/common';
import { Sport } from './sport';

export class Batch {
    batchId:number;
    batchName:String;
    batchSize:number;
    startDate:Date;
    startTime:Time;
    duration:number;
    availability:number;
    userId:number;
    sportId:number;
    userCount:number;
    sport:Sport;
    sportName:string;


    constructor(
        batchName:String,
        batchSize:number,
        startDate:Date,
        startTime:Time,
        duration:number,
        availability:number,
        userId:number,
        sportId:number,
        userCount:number

        //sport:Sport

  ){}
}
