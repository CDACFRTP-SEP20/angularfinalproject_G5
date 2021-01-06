import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Batch } from 'src/app/models/batch';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.scss']
})
export class BatchlistComponent implements OnInit {
  displayedColumns:String[]=['batchName','sportName','startDate','startTime','duration','batchSize','availability','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource:any;
  batch:Batch;
  constructor(private batchservice:ManagerService,  private route:ActivatedRoute,
    private router: Router) {}
  data:any
  userId:number
  ngOnInit(): void {

    this.batch=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.batchservice.getBatches().subscribe(
      result=>{
        this.data=result;
        this.datasource = new MatTableDataSource<Batch>(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
        console.log(this.data);
      }
    )

  }
  addbatch()
  {
    this.router.navigate(['addbatch']);
  }

 updatebatch(batchId:number){
   this.router.navigate(['updatebatch',batchId])
 }

  deleteBatch(batchId:number){
      this.batchservice.deleteBatch(batchId).subscribe((res:any)=>{
       this.ngOnInit()
      })
  }
}
