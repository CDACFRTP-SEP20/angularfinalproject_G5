import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Sport } from 'src/app/models/sport';

@Component({
  selector: 'app-addsport',
  templateUrl: './addsport.component.html',
  styleUrls: ['./addsport.component.scss']
})
export class AddsportComponent implements OnInit {

  constructor(private adminService:AdminService,private router: Router) { }

  ngOnInit(): void { }

  //Add Sport
  submit(addForm:any) {
    this.adminService.addSports(addForm.value).subscribe((data) => {
      console.log(data);
    this.router.navigate(["sportlist"])
    });
  }

}
