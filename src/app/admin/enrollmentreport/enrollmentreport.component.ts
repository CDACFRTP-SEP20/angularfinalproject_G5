import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Batchreport } from 'src/app/models/batchreport';
import { Enrollmentreport } from 'src/app/models/enrollmentreport';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-enrollmentreport',
  templateUrl: './enrollmentreport.component.html',
  styleUrls: ['./enrollmentreport.component.scss']
})
export class EnrollmentreportComponent implements OnInit {
  //Mat Table Header Display Def.
  displayedColumns:String[]=['userName','address','email','mobileNumber','sportName','batchName','startDate','planName','fees','status'];

  @ViewChild(MatSort) sort: MatSort;  //sorting
  @ViewChild(MatPaginator) paginator: MatPaginator; //pagination

  datasource:any;
  searchKey:String;
  data:Enrollmentreport[]=[];

  constructor(private service:AdminService) { }

  //Enrollment Report For Admin
  ngOnInit() {
    this.service.getEnrollmentReport().subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Enrollmentreport>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
      }
    )
}

}
