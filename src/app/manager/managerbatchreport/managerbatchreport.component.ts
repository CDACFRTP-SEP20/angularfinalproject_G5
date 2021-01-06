import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';
import { Batch } from 'src/app/models/batch';

@Component({
  selector: 'app-managerbatchreport',
  templateUrl: './managerbatchreport.component.html',
  styleUrls: ['./managerbatchreport.component.scss']
})
export class ManagerbatchreportComponent implements OnInit {
  displayedColumns:String[]=['batchName','sportName','startDate','startTime','batchSize','availability','duration','userCount'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
    batch:Batch;

  constructor(private batchservice:ManagerService,private route: Router) {}
  data:any
  userId:number
  ngOnInit(): void {
    this.batch=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.batchservice.batchReportForManager(this.batch.userId).subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Batch>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
        console.log(this.data);
      }
    )
  }

}
