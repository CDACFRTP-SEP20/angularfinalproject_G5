import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Plan } from 'src/app/models/plan';


@Component({
  selector: 'app-editplan',
  templateUrl: './editplan.component.html',
  styleUrls: ['./editplan.component.scss']
})
export class EditplanComponent implements OnInit {
  plan:Plan;
  planId:number;
  plan1:Plan;
  constructor(private planserv:ManagerService,private route:ActivatedRoute,private router:Router) {
    this.plan=new Plan("",0,new Date(),new Date(),0,0,true,0,0);
   }

  ngOnInit(): void {

      this.planId=this.route.snapshot.params['id'];
      this.planserv.getPlan(this.planId).subscribe(data=>{
        this.plan=data[0];

        console.log(this.plan);

      })
}

updatePlan()
{
  this.plan1
  console.log("updatePlan"+this.plan)
  this.planserv.updatePlan(this.planId,this.plan)
  .subscribe(data=>{

  })
  this.router.navigate(['/planlist']);

}
}
