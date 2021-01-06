import { Sport } from './sport';

export class Plan {

	  planName:String;
	  fees:number;
	  startDate:Date;
	  endDate:Date	;
	  duration:number;
	  discount:number;
	 isActive:boolean;
	  userid:number;
      sportid:number;
      sport:Sport;
      sportName:string;



      constructor(

        planName:String,
	 	fees:number,
	  	startDate:Date,
	  	endDate:Date	,
	  	duration:number,
	  	discount:number,
	 	isActive:boolean,
	  	userid:number,
      	sportId:number,


    ){}
}
