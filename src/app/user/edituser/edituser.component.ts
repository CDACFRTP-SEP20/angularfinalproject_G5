import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  userId:number
  user:User

  constructor(private userservice:UserService,private route: Router) {
    this.user=new User(0,"","","","","");
   }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.userservice.getuser(this.user.userId).subscribe((data: any)=>{
      this.user=data[0];
      console.log(this.user)
    });
  }

  updateuser(){

    this.userservice.editUserInfo(this.user.userId,this.user).subscribe(
      data=>{

    })
    alert("Data updated succesfully");
    this.route.navigate(['/home']);
  }

}



