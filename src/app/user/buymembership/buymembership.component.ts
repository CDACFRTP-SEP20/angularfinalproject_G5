import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Buymembership } from 'src/app/models/buymembership';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubSink } from 'subsink'
@Component({
  selector: 'app-buymembership',
  templateUrl: './buymembership.component.html',
  styleUrls: ['./buymembership.component.scss']
})
export class BuymembershipComponent implements OnInit,OnDestroy {
  animal: string;
  name: string;
  user:User;
  data:any;
  buyMembership:Buymembership;
  snackBarDuration: number = 2000;

  /**The subscription sink object that stores all subscriptions */
  private sub=new SubSink();

  constructor(public dialog: MatDialog,private userSrv:UserService,private snackBar: MatSnackBar) {
    this.buyMembership=new Buymembership(0,0,0);
   }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user') || '');

  }


  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      if(result)
      {
        this.buyMembership.fees=result.fees;
        this.buyMembership.months=result.validity;
        this.buyMembership.userId=this.user.userId
        console.log(this.buyMembership);
        this.userSrv.buyMembership(this.buyMembership).subscribe(
         result1=>{
                this.snackBar.open('Thank you for your purchase','',{duration: this.snackBarDuration})
         }
        )
      }
      console.log(this.data);

    });
  }

  //unsubscribes all subscriptions when the component / object gets destroyed
  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
