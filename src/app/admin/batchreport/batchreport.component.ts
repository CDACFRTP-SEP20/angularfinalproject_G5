import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Batchreport } from 'src/app/models/batchreport';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-batchreport',
  templateUrl: './batchreport.component.html',
  styleUrls: ['./batchreport.component.scss']
})
export class BatchreportComponent implements OnInit {
  displayedColumns:String[]=['batchName','batchSize','duration','startDate','availability','sportName','userCount'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
  searchKey:String;
  constructor(private service:AdminService) { }
  data:Batchreport[]=[];

  //Batch Report For Admin
  ngOnInit() {
     this.service.getBatchReport().subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Batchreport>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
      }
    )
}

}
