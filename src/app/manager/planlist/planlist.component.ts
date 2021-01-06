import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-planlist',
  templateUrl: './planlist.component.html',
  styleUrls: ['./planlist.component.scss']
})
export class PlanlistComponent implements OnInit {

  constructor(private planservice:ManagerService ,private route: Router) { }
  displayedColumns:String[]=['planId','planName','fees','startDate','endDate','duration','discount','isActive','sportname','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
  plans:any
  ngOnInit(): void {
    this.planservice.getAllPlans().subscribe(
      result=>{
        this.plans=result
        this.datasource=new MatTableDataSource<Plan>(this.plans);
        this.datasource.sort=this.sort;
        this.datasource.paginator=this.paginator;
        console.log(this.plans);

     }
    )
  }
  addplan(){
    this.route.navigate(['addplan'])
  }

  deletePlan(planid:number){

    alert("Do you really want to delete the plan?")
      this.planservice.deletePlan(planid).subscribe((res:any)=>{
        console.log(res)
        this.ngOnInit()

      })
  }

  updatePlan(planID:number){
    this.route.navigate(['updateplan',planID])
  }

}
