import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Otp } from 'src/app/models/otp';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {

  user: User;
  registerForm:FormGroup;
  otp:Otp;
  otpemail:string;

  constructor(private userSrv: UserService, private route: Router,builder: FormBuilder,
    private snackBar: MatSnackBar) {
    this.user = new User(0,"", "", "", "", "");
    this.registerForm = builder.group({
      userName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      address:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5),Validators.maxLength(15)]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}$")]),
      password:new FormControl('',[Validators.required,Validators.pattern("")])

    });
  }

  get userName(){return this.registerForm.get('userName')}
  get email(){return this.registerForm.get('email')}
  get address(){return this.registerForm.get('address')}
  get mobileNumber(){return this.registerForm.get('mobileNumber')}
  get password(){return this.registerForm.get('password')}

  ngOnInit(): void {

  }

  onSubmit() {
    this.user=this.registerForm.value
    console.log(this.user);

    this.userSrv.addUser(this.user).subscribe(
      result => {
        console.log(result);
        this.route.navigate(['login']);
      }
    )
  }

  verifyEmail(){

    this.userSrv.isUserPresent(this.registerForm.get('email')?.value).subscribe(
      result=>{
        if(result)
        {
          this.snackBar.open("User is already present ",'',{duration: 3000})
        }
        else
        {
          console.log(this.registerForm.get('email')?.value);
          this.otpemail=this.registerForm.get('email')?.value;

          this.userSrv.sendotp(this.otpemail).subscribe(
            result=>{
              console.log(result);
              if(result)
              {
                alert('OTP has been sent to your email')
              }
            }
          )
        }
      }
    )
  }

  verifyOtp()
  {
    this.userSrv.verifyotp(this.otp).subscribe(
      result=>{
        console.log(result);
        if(result==="otp verified")
        {
          alert('OTP verified')
        }
      }
    );
  }
}

