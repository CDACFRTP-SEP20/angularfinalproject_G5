import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Otp } from 'src/app/models/otp';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  otp:Otp
  email:string
  user:User
  password:any
  cpassword:any
  flag:number=0
  isreadonly:boolean=true
  constructor(private userservice:UserService,
    private route:Router) {
      this.otp=new Otp("",0,new Date());
      this.user=new User(0,"","","","","");
     }

  ngOnInit(): void {
  }

  sendOtp(){
    this.userservice.sendotp(this.otp.email).subscribe(
      result=>{
        console.log(result);
        if(result)
        {
          alert('OTP has been sent to your email')
          this.isreadonly=false
          this.route.navigate(['forgotpassword'])

        }
      }
    )
  }

  verifyOtp(){
    this.userservice.verifyotp(this.otp).subscribe(
      result=>{
        console.log(result);
        if(result==="otp verified")
        {
          this.flag=1
          alert('OTP verified')
          this.route.navigate(['forgotpassword'])
        }
        else
        {
          alert('Please enter correct OTP')
          this.route.navigate(['forgotpassword'])
        }
      }
    )
  }

  onSubmit()
  {
     this.user.email=this.otp.email;
     this.user.newpwd=this.user.password;
     this.user.confirmpwd=this.user.cpassword;
     console.log(this.user);

    this.userservice.resetPassword(this.user).subscribe(
      result=>{
        console.log(result);
        if(result)
        {
          alert('Password has been changed')
         this.route.navigate(['login'])
        }
      }
    )
  }

}
