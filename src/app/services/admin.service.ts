import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Sport } from '../models/sport';

import { Observable } from 'rxjs';
import { Sportreport } from '../models/sportreport';
import { Batchreport } from '../models/batchreport';
import { Enrollmentreport } from '../models/enrollmentreport';
import { Manager } from '../models/manager';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {}

  listManager():Observable<Manager[]>{
    return this.http.get<Manager[]>("http://localhost:8008/admin/list-manager");
  }

  addManager(manager:Manager){
    return this.http.post("http://localhost:8008/admin/add-manager",manager,{responseType:'text' as 'json'});
  }

  availableSport(){
    return this.http.get("//localhost:8008/admin/available-sports");
  }

  deletemanager(userId:number){
    return this.http.delete("http://localhost:8008/admin/delete-manager/"+userId);
  }

  getmanager(userId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8008/admin/edit-manager/"+userId);
  }

  updatemanager(userId:number, manager:any){
    return this.http.put("http://localhost:8008/admin/update-manager/"+userId,manager,{responseType:'text' as 'json'});
  }

  getActiveUser():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8008/admin/active-user");
  }

  getActiveManager():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8008/admin/active-manager");
  }

  getBlockUser():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8008/admin/blocked-user");
  }

  getBlockManager():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8008/admin/blocked-manager");
  }

  getAllSports(){
    return this.http.get("http://localhost:8008/admin/sportlist");
  }

  getSport(sportId:number){
    return this.http.get("http://localhost:8008/admin/editsport/"+sportId);
  }

   addSports(sport:Sport){
    return this.http.post("http://localhost:8008/admin/addsport",sport,{responseType:'text' as 'json'});
  }

  updateSport(sportId:number,sport:any):Observable<Object>{
    return this.http.put("http://localhost:8008/admin/updatesport/"+sportId,sport,{responseType:'text' as 'json'});
  }

  deleteSport(sportId: number):Observable<Object>{
    return this.http.delete("http://localhost:8008/admin/deletesport/"+sportId,{responseType:'text' as 'json'});
  }

  getSportReport(): Observable<Sportreport[]> {
    return this.http.get<Sportreport[]>("http://localhost:8008/admin/report/sportReport");
  }

  getBatchReport(): Observable<Batchreport[]> {
    return this.http.get<Batchreport[]>("http://localhost:8008/admin/report/batchReport");
  }

  getEnrollmentReport(): Observable<Enrollmentreport[]> {
    return this.http.get<Enrollmentreport[]>("http://localhost:8008/admin/report/enrollReport");
  }

  updateStatus(userId:number, user:any){
    return this.http.put("http://localhost:8008/admin/updatestatus/"+userId,user,{responseType:'text' as 'json'});
  }

  updateBlockStatus(userId:number, user:any){
    return this.http.put("http://localhost:8008/admin/updateblocked/"+userId,user,{responseType:'text' as 'json'});
  }

  getSportEnrollment():Observable<Object[]> {
    return this.http.get<Object[]>("http://localhost:8008/admin/sportEnrollReport");
  }

  numOfUser(){
    return this.http.get("http://localhost:8008/admin/num-users");
  }

  numOfManager(){
    return this.http.get("http://localhost:8008/admin/num-managers");
  }

  numOfSport(){
    return this.http.get("http://localhost:8008/admin/num-sports");
  }

  numOfPlan(){
    return this.http.get("http://localhost:8008/admin/num-plans");
  }

  numOfEnrollment(){
    return this.http.get("http://localhost:8008/admin/num-enroll");
  }

  getSportReview():Observable<Object[]> {
    return this.http.get<Object[]>("http://localhost:8008/admin/sportReviewReport");
  }

  getPlanReport():any {
    return this.http.get("http://localhost:8008/admin/planReport");
  }

  getadmin(userId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8008/admin/edit-admin/"+userId);
  }
    //getuserbyemail
    getUserByEmail(email:string):Observable<User>
    {
      return this.http.get<User>("http://localhost:8008/admin/getuserbyemail?email="+email);
    }

  updateprofile(userId:number, user:any){
    return this.http.put("http://localhost:8008/admin/update-admin/"+userId,user,{responseType:'text' as 'json'});
  }

}
