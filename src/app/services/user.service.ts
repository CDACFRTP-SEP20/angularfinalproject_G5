import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Buymembership } from '../models/buymembership';
import { ViewPlan } from '../models/view-plan';
import { Buyplan } from '../models/buyplan';
import { Userboughtplans } from '../models/userboughtplans';
import { Otp } from '../models/otp';
import { Enrolluser } from '../models/enrolluser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //add user
  addUser(user:User)
  {
    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');
    return this.http.post("http://localhost:8008/user/adduser",user,{responseType:'text' as 'json',headers: headerOptions});
  }

  //get all batches for user
  getBatchesForUser(userId:number)
  {
    return this.http.get("http://localhost:8008/user/displaybatches/"+userId);
  }

  //get batch status for user
  getBatcheStatusForUser(userId:number)
  {
    return this.http.get("http://localhost:8008/user/displaybatchstatus/"+userId);
  }

  //enroll user
  enrolluser(enrolluser:Enrolluser)
  {
    return this.http.post("http://localhost:8008/user/enroll",enrolluser,{responseType:'text' as 'json'});
  }

  //get user
  getuser(userId:number)
  {
    return this.http.get("http://localhost:8008/user/"+userId);
  }
  //edit user info
  editUserInfo(userId:number,user:any):Observable<Object>
  {
    return this.http.put("http://localhost:8008/user/updateuser/"+userId,user,{responseType:'text' as 'json'});
  }


  //get all membership type
  getMembershiptype():Observable<any>
  {
    return this.http.get("http://localhost:8008/user/getallmembershipdetails");
  }

  //getallusers
  getAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>("http://localhost:8008/user/alluser");
  }

  //buy membership
  buyMembership(membership:Buymembership)
  {
    return this.http.post("http://localhost:8008/user/buymembership",membership,{responseType:'text' as 'json'});


  }

  //get all plans with sport name
  getAllPlans():Observable<ViewPlan[]>
  {
    return this.http.get<ViewPlan[]>("http://localhost:8008/user/allplans");
  }

  //buy plan
  buyPlan(plan:Buyplan)
  {
    return this.http.post("http://localhost:8008/user/userplans",plan,{responseType:'text' as 'json'});
  }

  //get user's plan by user id
  getAllUsersPlan(userId:number):Observable<Userboughtplans[]>
  {
    return this.http.get<Userboughtplans[]>("http://localhost:8008/user/getusersplaninfo/"+userId);
  }


  //forgotpassword
  sendotp(email:String):Observable<any>
  {
    console.log(email);
    return this.http.post("http://localhost:8008/user/forgotpassword",email,{responseType:'text' as 'json'});
  }

  //verify otp
  verifyotp(otp:Otp):Observable<any>
  {
    return this.http.post("http://localhost:8008/user/verifyotp",otp,{responseType:'text' as 'json'});
  }

  //reset password
  resetPassword(user:User):Observable<any>
  {
    return this.http.post("http://localhost:8008/user/resetpassword",user,{responseType:'text' as 'json'});
  }


  //change password
  changePassword(user:User,userId:number):Observable<any>
  {
    return this.http.post("http://localhost:8008/user/updatepassword/"+userId,user,{responseType:'text' as 'json'});
  }



  //getuserbyemail
  getUserByEmail(email:string):Observable<User>
  {
    return this.http.get<User>("http://localhost:8008/user/getuserbyemail?email="+email);
  }


  //get count for the login
  getCountsForLogin(email:string){
    return this.http.post("http://localhost:8008/user/count/"+email,{responseType:'text' });
  }

  //update rating
  updateUsersRating(userId:number,sportId:number,rating:number):Observable<any>
  {
    return this.http.post("http://localhost:8008/user/updaterating?userId="+userId+"&sportId="+sportId,rating,{responseType:'text' as 'json'})
  }

  //user is present with email
  isUserPresent(email:string):Observable<any>
  {
    return this.http.get("http://localhost:8008/user/checkuserpresent?email="+email)
  }

  //get user membership details
  getUserMembership(userId:number):Observable<any>
  {
    return this.http.get("http://localhost:8008/user/getusermembershipdetails?userid="+userId);
  }
  //update Comment
  updateUsersComment(userId:number,sportId:number,comment:any):Observable<any>
  {

    return this.http.post("http://localhost:8008/user/updateuserscomment?userId="+userId+"&sportId="+sportId,comment,{responseType:'text' as 'json'})
  }

  //get user reviews by sport id
  getUserReviewBySportId(sportId:number):Observable<any>
  {
    return this.http.get("http://localhost:8008/user/getallreviewbysportid?sportid="+sportId);
  }

  //get sport avg rating
  getSportAvgRating(sportId:number):Observable<any>
  {
    return this.http.get("http://localhost:8008/user/getsportavgrating?sportid="+sportId);

  }

  //update like
  updateUsersLike(userId:number,sportId:number,planId:number,like:any):Observable<any>
  {

    return this.http.post("http://localhost:8008/user/updatelikes?userId="+userId+"&sportId="+sportId+"&planId="+planId,like,{responseType:'text' as 'json'})
  }

  //is like
  isLike(userId:number,sportId:number):Observable<string>
  {
    return this.http.get<string>("http://localhost:8008/user/islike?userid="+userId+"&sportid="+sportId);

  }


}

