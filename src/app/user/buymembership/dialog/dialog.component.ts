import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit ,OnDestroy  {
  user:User;
  memdata:any;

   /**The subscription sink object that stores all subscriptions */
   private sub=new SubSink();

  memberShipData:any[];
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private userSrv:UserService) {
      this.user=new User(0,"","","","","");
     }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user') || '');
    console.log(this.user);

    this.userSrv.getMembershiptype().subscribe(
      result=>
      {
        this.memberShipData=result;
        console.log(result);
      }
    );
    console.log(this.memberShipData);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  //unsubscribes all subscriptions when the component / object gets destroyed
  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
