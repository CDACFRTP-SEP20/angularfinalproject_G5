export class Sportenrollment {


  sportName:String;
 userCount:number;


    constructor(

      sportName:String,
      userCount:number


  ){}

  public get SportName():String{
    return this.sportName;
}
public get UserCount():number{
    return this.userCount;
}
}
