import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ViewPlan } from 'src/app/models/view-plan';
import { Observable } from 'rxjs';
import { Buyplan } from 'src/app/models/buyplan';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-buyplan',
  templateUrl: './buyplan.component.html',
  styleUrls: ['./buyplan.component.scss']
})
export class BuyplanComponent implements OnInit,OnDestroy {

  user:User;
  color: string = 'accent';
  like:number=0;
  icon:string="favorite_border";

  /**The subscription sink object that stores all subscriptions */
  private sub=new SubSink();


  viewAllPlans:Observable<ViewPlan[]>
  errorMsg:any;


  constructor(private userSrv:UserService,private snackBar: MatSnackBar,private route:Router) {

  }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
    console.log(this.user);

    this.viewAllPlans=this.userSrv.getAllPlans();
  }

  buyMembership(plan:ViewPlan){
    sessionStorage.setItem('plan',JSON.stringify(plan))
   this.route.navigate(['buycurrent'])
  }
  changeLike(){
    if(this.like === 0)
    {
      this.like=1;
      this.icon="favorite"

    }
    else{
      this.like=0;
      this.icon="favorite_border"
    }

  }

  //unsubscribes all subscriptions when the component / object gets destroyed
  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
