import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../models/plan';
import { Batch } from '../models/batch';

import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  //get all plans
  getAllPlans()
  {
    return this.http.get("http://localhost:8008/manager/allplans1");
  }

  //add plan
  addPlan(plan:Plan)
  {
    return this.http.post("http://localhost:8008/manager/addplan",plan,{responseType:'text' as 'json'});
  }

  //get plan for update
  getPlan(planId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8008/manager/"+planId);
  }

  getBatches()
  {
    return this.http.get("http://localhost:8008/manager/getallbatches");
  }

  getBatch(batchId:number):Observable<any>
  {
       return this.http.get("http://localhost:8008/manager/getsinglebatch/"+batchId);
  }

  addBatch(batch:Batch)
  {
    return this.http.post("http://localhost:8008/manager/batch",batch,{responseType:'text' as 'json'});
  }

  updateBatch(batchId:number,batch:any):Observable<Object>{
        return this.http.put("http://localhost:8008/manager/updatebatch/"+batchId,batch,{responseType:'text' as 'json'});
   }

  deleteBatch(batchId:number):Observable<Object>
  {
    return this.http.delete("http://localhost:8008/manager/deletebatch/"+batchId,{responseType:'text' as 'json'});
  }

  deleteSport(sportId: number):Observable<Object>
  {
    return this.http.delete("http://localhost:8008/admin/deletesport/"+sportId,{responseType:'text' as 'json'});
  }

  deletePlan(planId:number):Observable<Object>
  {
    return this.http.delete("http://localhost:8008/manager/deleteplan/"+planId,{responseType:'text' as 'json'});
  }

  getEnrollmentDtl(userId:number)
  {
       return this.http.get("http://localhost:8008/manager/enrollment/"+userId);
  }

  batchReportForManager(userId:number)
  {
       return this.http.get("http://localhost:8008/manager/batchReportForManager/"+userId);
  }

  enrollmentReportForManager(userId:number)
  {
       return this.http.get("http://localhost:8008/manager/enrollReportForManager/"+userId);
  }

  sportReportForManager(userId:number)
  {
       return this.http.get("http://localhost:8008/manager/sportReportForManager/"+userId);
  }

  approveuser(enrollmentId:number)
  {
    return this.http.put("http://localhost:8008/manager/approveuser/"+enrollmentId,{responseType:'text' as 'json'});
  }

  rejectuser(enrollmentId:number)
  {
    return this.http.put("http://localhost:8008/manager/rejectuser/"+enrollmentId,{responseType:'text' as 'json'});
  }

  getAssignedSportForManager(userId:number){
    return this.http.get("//localhost:8008/manager/getAssignedSportForManager/"+userId);
  }

   //getuserbyemail
   getUserByEmail(email:string):Observable<User>
   {
    return this.http.get<User>("http://localhost:8008/manager/getuserbyemail?email="+email);
   }

   updatePlan(planId:number,plan:any):Observable<object>{
    return this.http.put("http://localhost:8008/manager/updateplan/"+planId,plan,{responseType:'text' as 'json'});
  }

}
