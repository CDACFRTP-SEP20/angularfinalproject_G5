import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Userboughtplans } from 'src/app/models/userboughtplans';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-myplans',
  templateUrl: './myplans.component.html',
  styleUrls: ['./myplans.component.scss']
})
export class MyplansComponent implements OnInit,OnDestroy {
  rating=2;
  starCount: number = 5;
  color: string = 'accent';
  ratingUpdated = new EventEmitter();
   snackBarDuration: number = 2000;
   ratingArr:number[] = [];
   index=0
   errMsg:any;
  user:User;
  usersAllPlan:Userboughtplans[];
  /**The subscription sink object that stores all subscriptions */
  private sub=new SubSink();
  constructor(private userSrv:UserService,private router:Router) { }

  ngOnInit(): void {
    //get user from session
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');

    //get all plan
    this.userSrv.getAllUsersPlan(this.user.userId).subscribe(
      result=>{
        this.usersAllPlan=result;
      },
      err=>{
        this.errMsg=err.error.message;
      }
    );
  }

  // navigate to review page
  addReview(sportId:number){

    this.router.navigate(['addreview',sportId])
  }

  //if no plan then navigate to buyplan
  buyPlan(){
    this.router.navigate(['buyplan']);
  }

   //unsubscribes all subscriptions when the component / object gets destroyed
   ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
