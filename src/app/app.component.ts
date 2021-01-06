import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'DeccanSportClub';
  user:User;
  userrole: Observable<String>;


  constructor(private as: AuthenticationService,private router:Router, public translate:TranslateService){


    translate.addLangs(['en','hi','mr','ml']);
    translate.setDefaultLang('en');
   const browserLang=translate.getBrowserLang();
   translate.use(browserLang.match(/en|hi|ml|mr/) ? browserLang : 'en');

  }
  ngOnInit(): void {
    console.log("in app component");


    this.userrole = this.as.userrole;
    if(this.userrole === null )
    {
      console.log("Hello");

    }
    else{
      console.log("Hello1 ");

    }
    console.log(this.userrole);


  }
  login(){

    this.router.navigate(['login']);

  }
  logout(){
    this.as.logout()
    sessionStorage.removeItem('user');
    this.router.navigate(['login'])
  }
  buyMembership(){
    this.router.navigate(['buymembership']);
  }
  myMembership(){
    this.router.navigate(['membershipdetails']);

  }

  allPlans(){

    this.router.navigate(['buyplan']);

  }

  myPlans(){
    this.router.navigate(['myplans']);
  }

  batchesForUser(){
    this.router.navigate(['batchlistforuser']);
  }

  batchStatusForUser(){
    this.router.navigate(['batchstatuslistforuser']);
  }

  editUser(){
    this.router.navigate(['edituser']);
  }

  activeaccount(){
    this.router.navigate(['activeaccounts']);
  }

  blockaccount(){
    this.router.navigate(['blockaccounts']);
  }

  sportReport(){
    this.router.navigate(['report/sport']);
  }

  batchReport(){
    this.router.navigate(['report/batch']);
  }

  enrollmentReport(){
    this.router.navigate(['report/enroll']);
  }

  planlist(){
    this.router.navigate(['planlist']);
  }

  batchlist(){
    this.router.navigate(['batchlist']);
  }

  managerBatchReport()
  {
    this.router.navigate(['managerbatchreport']);
  }

  managerSportReport()
  {
    this.router.navigate(['managersportreport']);
  }

  managerEnrollmentReport()
  {
    this.router.navigate(['managerenrollmentreport']);
  }
  changepassword()
  {
    this.router.navigate(['changepassword']);
  }




}
