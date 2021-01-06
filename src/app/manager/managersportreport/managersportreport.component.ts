import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Enrollment } from 'src/app/models/enrollment';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';
import { Sport } from 'src/app/models/sport';
import { Sportdto } from 'src/app/models/sportdto';

@Component({
  selector: 'app-managersportreport',
  templateUrl: './managersportreport.component.html',
  styleUrls: ['./managersportreport.component.scss']
})
export class ManagersportreportComponent implements OnInit {
  displayedColumns:String[]=[ 'sportName','plancount','batchcount','usercount'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
  sport:Sportdto;
  constructor(private enrollmentservice:ManagerService,private route: Router) {}
  data:any
  userId:number
  ngOnInit(): void {
    this.sport=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.enrollmentservice.sportReportForManager(this.sport.userId).subscribe(
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
