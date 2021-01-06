import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Manager } from 'src/app/models/manager';
import { Sport } from 'src/app/models/sport';

@Component({
  selector: 'app-activeaccounts',
  templateUrl: './activeaccounts.component.html',
  styleUrls: ['./activeaccounts.component.scss']
})
export class ActiveaccountsComponent implements OnInit {

  displayedColumns:String[]=['userId','userName','email','mobileNumber','action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ActiveUserAccount : User[]
  ActiveManagerAccount : User[]

  datasource:any;

  constructor(private route: ActivatedRoute,private router: Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.getActiveUser();
  }

  //Get Active User
  getActiveUser(){
    this.adminService.getActiveUser().subscribe(result=>{
      this.ActiveUserAccount=result;
      this.datasource = new MatTableDataSource<User>(this.ActiveUserAccount);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

    //Get Active Manager
  getActiveManager(){
    this.adminService.getActiveManager().subscribe(result=>{
      this.ActiveManagerAccount=result;
      this.datasource = new MatTableDataSource<User>(this.ActiveManagerAccount);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

  //Block Manager or User
  updateBlockStatus(userid:number){
    this.adminService.updateBlockStatus(userid, User).subscribe(res => {
      //console.log(res);
    });
}
}
