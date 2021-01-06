import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Sport } from 'src/app/models/sport';
import { DialogService } from 'src/app/services/dialog.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.scss']
})
export class SportlistComponent implements OnInit {

  //Table Header Def
  displayedColumns:String[]=['sportId','sportName','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
  data1:any
  searchKey:String;
  data:Sport[]=[];

  constructor(private adminService:AdminService, private dialogService: DialogService, private route:Router) {

   }

//Display Sport List
  ngOnInit() {
      this.adminService.getAllSports().subscribe((response) => {
      //this.data=response;
      this.datasource = new MatTableDataSource<Sport>(this.data);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

  //Add New Sport
addsport(){
  this.route.navigate(['addsport'])
}

//Update Sport
updateSport(sportId:number){
  this.route.navigate(['updatesport',sportId])
}

//Delete Sport
  deleteSport(sportId:number){
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if(res){
        this.adminService.deleteSport(sportId).subscribe(
          result=>{
            this.ngOnInit();
          }
        );
      }

    });
  }


}
