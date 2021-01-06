import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.scss']
})
export class ManagerhomeComponent implements OnInit {
data:any
  constructor(private planservice:ManagerService) { }

  ngOnInit(): void {
    this.planservice.getAllPlans().subscribe(
      result=>{
        this.data=result
        console.log(this.data);
        
      }
    )
  }

}
