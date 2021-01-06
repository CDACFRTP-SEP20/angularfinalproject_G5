import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Enrollment } from 'src/app/models/enrollment';

@Component({
  selector: 'app-enrollmentlist',
  templateUrl: './enrollmentlist.component.html',
  styleUrls: ['./enrollmentlist.component.scss']
})
export class EnrollmentlistComponent implements OnInit {
  displayedColumns:String[]=['userName','sportName','batchName','startDate','startTime','batchSize','availability','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
    enrollment:Enrollment;
  constructor(private enrollmentservice:ManagerService,
       private route:ActivatedRoute,private router: Router) {}
  data:any
  userId:number
  enrollmentId:number
  ngOnInit(): void {
    this.enrollment=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.enrollmentservice.getEnrollmentDtl(this.enrollment.userId).subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Enrollment>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
        console.log(this.data);
      }
    )
  }

  approveUser(enrollmentId:number)
  {
     this.enrollmentservice.approveuser(enrollmentId)
    .subscribe(data=>{
  })
   this.router.navigate(['enrollmentlist']);
 }

 rejectUser(enrollmentId:number)
 {

   this.enrollmentservice.rejectuser(enrollmentId)
   .subscribe(data=>{
 })
  this.router.navigate(['enrollmentlist']);
}
}
