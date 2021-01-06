import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ViewPlan } from 'src/app/models/view-plan';
import { Buyplan } from 'src/app/models/buyplan';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink'

@Component({
  selector: 'app-buycurrent',
  templateUrl: './buycurrent.component.html',
  styleUrls: ['./buycurrent.component.scss']
})
export class BuycurrentComponent implements OnInit,OnDestroy {

  user:User;
  plan:ViewPlan;
  buyPlan:Buyplan;
  errorMsg:any;
  allReview:Observable<any>;
  avgRating:number;
  color: string = 'accent';
  like:string;
  icon:string="favorite_border"

  /**The subscription sink object that stores all subscriptions */
  private sub=new SubSink();



  constructor(private userSrv:UserService,private snackBar: MatSnackBar,
    private router:Router) {
    this.buyPlan=new Buyplan(0,0,0,0);
  }



  ngOnInit(): void {
    this.plan=JSON.parse(sessionStorage.getItem('plan') || '{}')
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
    console.log(this.plan);
    this.allReview=this.userSrv.getUserReviewBySportId(this.plan.sportId);
    this.userSrv.getSportAvgRating(this.plan.sportId).subscribe(
      result=>{
        this.avgRating=result;
      },erro=>{
        this.errorMsg="No Review"
      }
    );
    this.userSrv.isLike(this.user.userId,this.plan.sportId).subscribe(
      result=>{
        this.like=result;
        if(result)
        {
          this.icon='favorite'
          this.like='true';
        }
        else
        {
          this.icon='favorite_border';
          this.like='false';


        }

        console.log(result);

      }
    )


  }
  buyCurrentPlan()
  {
  this.buyPlan.planId=this.plan.planId;
  this.buyPlan.sportId=this.plan.sportId;
  this.buyPlan.userId=this.user.userId;
  this.buyPlan.months=this.plan.duration

  console.log(this.buyPlan);
  this.userSrv.buyPlan(this.buyPlan).subscribe(
    result=>{
      if(result)
      {
        this.snackBar.open("Thank you for buying Plan",'',{duration: 3000})
        this.router.navigate(['user']);

      }
      console.log(result);
    },
    err=>{
      console.log(err);
      if(err.status === 500)
      {
      this.errorMsg=JSON.parse(err.error)
      }else
      {
       // this.errorMsg=JSON.parse(err.error).message
        this.snackBar.open(JSON.parse(err.error).message,'',{duration: 3000})
      }
    }
  )
  }

  changeLike(){
    if(this.like === 'false')
    {
      this.like='true';
      this.icon="favorite"

    }
    else{
      this.like='false';
      this.icon="favorite_border"
    }
    console.log(this.like);

    this.userSrv.updateUsersLike(this.user.userId,this.plan.sportId,this.plan.planId,this.like).subscribe(
      result=>{
        console.log(result);
      }
    )

  }

  //unsubscribes all subscriptions when the component / object gets destroyed
  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }

}
