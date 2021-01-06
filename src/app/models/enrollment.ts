import { Time } from '@angular/common';

export class Enrollment {
    enrollmentId:number;
    batchId:number;
    batchName:String;
    sportName:String;
    batchSize:number;
    startDate:Date;
    startTime:Time;
    userId:number;
    sportId:number;
    userName:String;
    availability:number;
    status:String;

    constructor(
      enrollmentId:number,
      batchId:number,
      batchName:String,
      sportName:String,
      batchSize:number,
      startDate:Date,
      startTime:Time,
      userId:number,
      sportId:number,
      userName:String,
      availability:number,
      status:String
  ){}
}
