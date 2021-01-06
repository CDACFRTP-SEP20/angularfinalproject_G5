import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Sport } from 'src/app/models/sport';
import { DialogService } from 'src/app/services/dialog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Manager } from 'src/app/models/manager';

@Component({
  selector: 'app-managerlist',
  templateUrl: './managerlist.component.html',
  styleUrls: ['./managerlist.component.scss']
})
export class ManagerlistComponent implements OnInit {
  //Mat Table Header Display Def.
  displayedColumns:String[]=['userId','userName','email','mobileNumber','address','sport','actions'];

  @ViewChild(MatSort) sort: MatSort;  //sorting
  @ViewChild(MatPaginator) paginator: MatPaginator; //pagination

  datasource:any;
  data1:any[]=[];
  data:Manager[]=[];
  sport:Sport[]
  arr:any[]=[]
  sportName:any

  constructor(private adminService:AdminService,
    private dialogService: DialogService,
    private route:Router) { }

  //Display List Of Manager
  ngOnInit(): void {
    this.adminService.listManager().subscribe(
      result=>{
        this.data=result;
        this.data1=this.data
        //Display Sport
        this.arr=this.data1.map((ele)=>ele.sport)
        for(let i=0; i<this.data1.length; i++){
          //condition check the length
          let displaySports = this.data1[i].sport.map(function(elem:any){
             return elem.sportName;
            }).join(",");
            this.data1[i]['displaySport']=displaySports;
        }
        this.datasource = new MatTableDataSource<Manager>(this.data1);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
      });
  }

  /*Redirecting to register Manager Commponent*/
  registermanager(){
    this.route.navigate(['registermanager'])
  }

  /*Redirecting to Update Manager Commponent*/
  updatemanager(userId:number){
    this.route.navigate(['updatemanager',userId])
  }

  /*Delete Manager*/
  deletemanager(userId:number){
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if(res){
        this.adminService.deletemanager(userId).subscribe(
          result=>{
            this.ngOnInit();
          }
        );
      }
    });
  }

}
