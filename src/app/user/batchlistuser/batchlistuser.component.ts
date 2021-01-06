import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Userbatch } from 'src/app/models/userbatch';
import { User } from 'src/app/models/user';
import { Enrolluser } from 'src/app/models/enrolluser';

@Component({
  selector: 'app-batchlistuser',
  templateUrl: './batchlistuser.component.html',
  styleUrls: ['./batchlistuser.component.scss']
})
export class BatchlistuserComponent implements OnInit {
  displayedColumns:String[]=['batchName','batchSize','startDate','startTime','duration','availability','sportName','action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  datasource:any;

  data:any;
  user:User;
  enrolluser:Enrolluser;
  allbatches:Userbatch;
  batch:Userbatch;


  constructor(private userservice:UserService,private route: Router) {

      this.enrolluser=new Enrolluser(0,0,0);
      this.batch=new Userbatch(0,"",new Date().toTimeString.prototype,new Date(),0,0,0,"",0,0,"",0);
  }



  /*ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.userservice.getBatchesForUser(this.user.userId).subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Userbatch>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
        console.log(this.data);
      }
    );
  }*/

   ngOnInit():void{
     this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.userservice.getBatchesForUser(this.user.userId).subscribe(
       result=>{
         this.data=result;
         console.log(this.data);
     }
     )
   }

  userenroll(batch:Userbatch){
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');

    this.enrolluser.userId=this.user.userId;
    this.enrolluser.batchId=batch.batchId;
    this.enrolluser.planId=batch.planId;

 this.userservice.enrolluser(this.enrolluser).subscribe(
      result=>{
        if(result=== false)
        {
          console.log(result);
          alert("You have enrolled for batch.You can check the status in My Batches.");
          this.route.navigate(['/home']);
        }
        else{
          alert("You have enrolled for this batch.");
          this.route.navigate(['/batchlistforuser']);
        }
      }
    )
  }

}
