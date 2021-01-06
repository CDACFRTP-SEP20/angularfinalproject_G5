import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Otp } from 'src/app/models/otp';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  email:string
  user:User
  password:any
  cpassword:any
  otp:Otp
  constructor(private as: AuthenticationService,private userservice:UserService,
    private route:Router) { }

  ngOnInit(): void {
    this.user=new User(0,"","","","","");
  }

  onSubmit()
  {
    this.user.oldpwd=this.user.oldpassword;
    this.user.newpwd=this.user.password;
    this.user.confirmpwd=this.user.cpassword;

    // this.user.userId=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.user.userId=(JSON.parse(sessionStorage.getItem('user') || '{}')).userId;
    console.log(this.user);
    this.userservice.changePassword(this.user,this.user.userId).subscribe(
      result=>{
        console.log(result);
        if(result)
        {
          alert('Password has been changed')
           this.as.logout()
          sessionStorage.removeItem('user');
            this.route.navigate(['login'])
        }
      }
    )
  }

}


