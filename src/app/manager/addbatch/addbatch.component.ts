import { Component, OnInit } from '@angular/core';
import { Batch } from 'src/app/models/batch';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';
import { Sport } from 'src/app/models/sport';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.scss']
})
export class AddbatchComponent implements OnInit {

  batch:Batch;
  assignedsport: any;
  sport:Sport;
  userId:number;
  sportId:number;

  constructor(private batchservice:ManagerService,private route:Router) {
    this.batch=new Batch("",0,new Date(),new Date().toTimeString.prototype,0,0,0,0,0);
   }

  ngOnInit(): void {
    this.batch=JSON.parse(sessionStorage.getItem('user') || '{}');

    this.batchservice.getAssignedSportForManager(this.batch.userId).subscribe(
      result=>{
        this.assignedsport=result;
        this.batch.sportId=this.assignedsport.sportId;
      }
    )

  }

  onSubmit(){
    this.batchservice.addBatch(this.batch).subscribe(
      result=>{
        if(result)
        {

          this.route.navigate(['batchlist'])
        }
      }
    )
  }
}
