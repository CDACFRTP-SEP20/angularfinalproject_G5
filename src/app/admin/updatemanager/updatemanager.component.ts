import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from 'src/app/models/manager';

@Component({
  selector: 'app-updatemanager',
  templateUrl: './updatemanager.component.html',
  styleUrls: ['./updatemanager.component.scss']
})
export class UpdatemanagerComponent implements OnInit {

  manager : Manager;
  userId : number;
  sportav: any;
  sport:any[];

  constructor(private adminService:AdminService,private route:ActivatedRoute,private router: Router) {
    this.manager=new Manager(0,"","","","","",[]);
   }

   //Get Manager By Id
  ngOnInit(): void {
    this.userId=this.route.snapshot.params['id'];
    this.adminService.getmanager(this.userId).subscribe(data=>{
      this.manager=data;
      this.sport=data.sport;

      console.log(this.manager)
    });
  }

  //Update Manager
  updatemanager(){
    this.adminService.updatemanager(this.userId,this.manager)
    .subscribe(data=>{

    });
    this.router.navigate(['managerlist']);
  }

}
