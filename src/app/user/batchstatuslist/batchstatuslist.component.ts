import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Userbatch } from 'src/app/models/userbatch';
import { UserService } from 'src/app/services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-batchstatuslist',
  templateUrl: './batchstatuslist.component.html',
  styleUrls: ['./batchstatuslist.component.scss']
})
export class BatchstatuslistComponent implements OnInit {
  displayedColumns:String[]=['batchName','batchSize','startDate','startTime','duration','availability','sportName','status'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  datasource:any;

  constructor(private userservice:UserService,private route: Router) {}

  data:any; 
  user:User;

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.userservice.getBatcheStatusForUser(this.user.userId).subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Userbatch>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
        console.log(this.data);
      }
    );
  }

}
