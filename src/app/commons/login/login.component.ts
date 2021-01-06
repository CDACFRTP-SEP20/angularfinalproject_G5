
import { Component, OnInit, Input } from '@angular/core';
import { Otp } from 'src/app/models/otp';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { ManagerService } from 'src/app/services/manager.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  otp:Otp
  email:string
  user:User
  password:any
  cpassword:any
  flag:number=0
  manager1:User;
  isreadonly:boolean=true
  @Input() errorMessage = ""
  username:string
  constructor(private as : AuthenticationService,private userSrv:UserService, private router:Router,private managerserv:ManagerService,private adminservice:AdminService) {
      this.otp=new Otp("",0,new Date());
      this.user=new User(0,"","","","","");
     }


  ngOnInit(): void {
  }


  sendOtp(){
    console.log(this.otp.email);

    this.userSrv.sendotp(this.otp.email).subscribe(
      result=>{
        if(result)
        {
          this.flag=1
          alert('OTP has been sent to your email')

        }
      }
    )
  }

  verifyOtp(){
    this.userSrv.verifyotp(this.otp).subscribe(
      result=>{
        console.log(result);
        if(result==="otp verified")
        {
          this.flag=1
          alert('OTP verified')
          if(this.flag ===1)
        {
          console.log("in flag");

          this.as.loginWithAuthentication(this.otp.email).subscribe(
            data=>{
              console.log(this.otp.email);

              if(data.roles[0] === "ROLE_USER"){
                this.email=sessionStorage.getItem('email') || '';
                this.userSrv.getUserByEmail(this.email).subscribe(
                  one=>{
                  this.user=one;
                  console.log(one);
                  sessionStorage.setItem('user',JSON.stringify(this.user));
                  console.log(sessionStorage.getItem('user'));
                  this.router.navigate(['user'])

            }
          );
              }
            }
          )
        }
       }
        else
        {
          alert('Please enter correct OTP')
          this.router.navigate(['login'])
        }
        })
      }

      onLogin(){

        this.as.authenticate(this.otp.email, this.password)
        .subscribe(

          data => {
            console.log('inside login', data.roles[0])
            if(data.roles[0] === "ROLE_USER"){
              this.email=sessionStorage.getItem('username') || '';
              this.userSrv.getUserByEmail(this.email).subscribe(
                result=>{
                this.user=result;
                console.log(result);
                sessionStorage.setItem('user',JSON.stringify(this.user));
          }
        );

              this.router.navigate(['user'])
            }
            if(data.roles[0] === "ROLE_ADMIN"){
                this.email=sessionStorage.getItem('email') || '';
                this.adminservice.getUserByEmail(this.email).subscribe(
                  one=>{
                  this.user=one;
                  console.log(one);
                  sessionStorage.setItem('user',JSON.stringify(this.user));
                  this.router.navigate(['admin'])
                }
                );
                    }
            if(data.roles[0] === "ROLE_MANAGER"){
              this.email=sessionStorage.getItem('username') || '';
              this.managerserv.getUserByEmail(this.email).subscribe(
                result=>{
                this.manager1=result;
                console.log(result);
                sessionStorage.setItem('user',JSON.stringify(this.manager1));
          }
        );

        console.log(sessionStorage.getItem('user'));
              this.router.navigate(['manager'])
            }
          },
          error =>{
            this.userSrv.getCountsForLogin(this.otp.email).subscribe((res:any)=>
              {
                console.log("in count"+res)

                if(res>=3)
                  alert('Your account is blocked, please contact to admin department');
                else
                  alert(3-res+' attempts are remaining');
              })
              this.errorMessage= 'Login failure';

          }
        )
      }
}


     


