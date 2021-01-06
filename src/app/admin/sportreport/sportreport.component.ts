import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sportreport } from 'src/app/models/sportreport';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sportreport',
  templateUrl: './sportreport.component.html',
  styleUrls: ['./sportreport.component.scss']
})
export class SportreportComponent implements OnInit {

  //Table Header Def.
  displayedColumns:String[]=['sportName','planCount','batchCount','enrollCount'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
  searchKey:String;
  data:Sportreport[]=[];

  constructor(private adminService:AdminService) { }

  //Sport Report For Admin
  ngOnInit(): void {
    this.adminService.getSportReport().subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Sportreport>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
      }
    )
  }

}
