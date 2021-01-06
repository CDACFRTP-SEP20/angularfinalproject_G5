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
  selector: 'app-blockaccounts',
  templateUrl: './blockaccounts.component.html',
  styleUrls: ['./blockaccounts.component.scss']
})
export class BlockaccountsComponent implements OnInit {

  //table header def
  displayedColumns:String[]=['userId','userName','email','mobileNumber','action'];

  @ViewChild(MatSort) sort: MatSort;  //for sorting
  @ViewChild(MatPaginator) paginator: MatPaginator; //for pagination

  BlockUserAccount : User[]
  BlockManagerAccount : User[]
  datasource:any;

  constructor(private route: ActivatedRoute,private router: Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.getBlockUser();
  }

  //Get Block User
  getBlockUser(){
    this.adminService.getBlockUser().subscribe(result=>{
      this.BlockUserAccount=result;
      this.datasource = new MatTableDataSource<User>(this.BlockUserAccount);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

  //Get Block Managers
  getBlockManager(){
    this.adminService.getBlockManager().subscribe(result=>{
      this.BlockManagerAccount=result;
      this.datasource = new MatTableDataSource<User>(this.BlockManagerAccount);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

  //Update activate status for manager or user
  updateStatus(userid:number){
      this.adminService.updateStatus(userid, User).subscribe(res => {

      });
  }

}
