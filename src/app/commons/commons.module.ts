import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DschomeComponent } from './dschome/dschome.component';
import { LoginComponent } from './login/login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MaterialModule } from '../material/material.module'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DschomeComponent, LoginComponent, UserregisterComponent, LogoutComponent, ErrorpageComponent, ForgotpasswordComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CommonsModule { }
