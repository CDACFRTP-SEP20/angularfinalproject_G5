import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-membershipdetails',
  templateUrl: './membershipdetails.component.html',
  styleUrls: ['./membershipdetails.component.scss']
})
export class MembershipdetailsComponent implements OnInit,OnDestroy {

  user:User;
  membership:any;
  errorMsg:any;

  /**The subscription sink object that stores all subscriptions */
  private sub=new SubSink();

  constructor(private userSrv:UserService,private snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {

    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');

    this.userSrv.getUserMembership(this.user.userId).subscribe(
      result=>{
        this.membership=result;
      },
      err=>{

        this.errorMsg=err.error.message;
        this.snackBar.open(this.errorMsg,'',{duration: 3000})
      }
    )

  }
  buyMembership(){
    this.router.navigate(['buymembership']);
  }

  //unsubscribes all subscriptions when the component / object gets destroyed
  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
