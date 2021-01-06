import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Enrollment } from 'src/app/models/enrollment';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerenrollmentreport',
  templateUrl: './managerenrollmentreport.component.html',
  styleUrls: ['./managerenrollmentreport.component.scss']
})
export class ManagerenrollmentreportComponent implements OnInit {
  displayedColumns:String[]=['userName','batchName','sportName','startDate','availability','status'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
    enrollment:Enrollment;
  constructor(private enrollmentservice:ManagerService,private route: Router) {}
  data:any
  userId:number
  ngOnInit(): void {
    this.enrollment=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.enrollmentservice.enrollmentReportForManager(this.enrollment.userId).subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Enrollment>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
        console.log(this.data);
      }
    )
  }

}
