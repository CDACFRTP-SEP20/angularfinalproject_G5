import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch } from 'src/app/models/batch';

@Component({
  selector: 'app-updatebatch',
  templateUrl: './updatebatch.component.html',
  styleUrls: ['./updatebatch.component.scss']
})
export class UpdatebatchComponent implements OnInit {
  batch:Batch;
  batchId:number;
  constructor(private managerSrv:ManagerService,
         private route:ActivatedRoute,private router:Router) {
          this.batch=new Batch("",0,new Date(),new Date().toTimeString.prototype,0,0,0,0,0);
   }

  ngOnInit(): void {
    this.batchId=this.route.snapshot.params['id'];
    this.managerSrv.getBatch(this.batchId).subscribe((data: any)=>{
      this.batch=data[0];
      console.log(this.batch)
    });
  }

  updateBatch()
{
  this.managerSrv.updateBatch(this.batchId,this.batch)
  .subscribe(data=>{

})
  this.router.navigate(['batchlist']);
}
}
