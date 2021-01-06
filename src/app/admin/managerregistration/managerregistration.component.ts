import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Manager } from 'src/app/models/manager';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-managerregistration',
  templateUrl: './managerregistration.component.html',
  styleUrls: ['./managerregistration.component.scss']
})
export class ManagerregistrationComponent implements OnInit {

  manager:Manager;
  sportav: any;
  sport:any[];

  constructor(private adminService:AdminService, private route:Router, private snackBar: MatSnackBar) {
    this.manager=new Manager(0,"","","","","",[]);
  }

  //get available sport which is not assigned to any manager
  ngOnInit(): void {
    this.adminService.availableSport().subscribe(
      result=>{
        this.sportav=result;
      }
    )
  }

  //register new manager
  onSubmit() {
    this.manager.sport=this.sport
    this.adminService.addManager(this.manager).subscribe(
      result => {
        if(result){
          this.snackBar.open("Manager Credential Send On Mail",'',{duration: 3000})
          this.route.navigate(['managerlist']);
        }
      }
    )
  }

}
