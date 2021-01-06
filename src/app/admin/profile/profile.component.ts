import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId:number
  user:User

  constructor(private adminService:AdminService,private route:ActivatedRoute,private router: Router) {
    this.user = new User(0,"","","","","");
  }

  ngOnInit(): void {
      this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
      console.log(this.user.userId)
      this.adminService.getadmin(this.user.userId).subscribe(data=>{
      this.user=data[0];
      console.log(this.user)
    });
  }

  updateprofile(){
    this.adminService.updateprofile(this.user.userId, this.user).subscribe(
      data=>{

      })
      alert("Profile Updated");
      this.router.navigate(['/adminhome']);
  }
}
