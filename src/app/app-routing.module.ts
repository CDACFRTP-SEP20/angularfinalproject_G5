import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DschomeComponent } from './commons/dschome/dschome.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ManagerhomeComponent } from './manager/managerhome/managerhome.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';
import { CommonsModule } from './commons/commons.module';
import { ErrorpageComponent } from './commons/errorpage/errorpage.component';
import { UserregisterComponent } from './commons/userregister/userregister.component';
import { BatchstatuslistComponent } from './user/batchstatuslist/batchstatuslist.component';
import { ManagerlistComponent } from './admin/managerlist/managerlist.component';
import { ManagerregistrationComponent } from './admin/managerregistration/managerregistration.component';
import { SportlistComponent } from './admin/sportlist/sportlist.component';
import { AddsportComponent } from './admin/addsport/addsport.component';
import { UpdatesportComponent } from './admin/updatesport/updatesport.component';
import { SportreportComponent } from './admin/sportreport/sportreport.component';
import { BuymembershipComponent } from './user/buymembership/buymembership.component';
import { PlanlistComponent } from './manager/planlist/planlist.component';
import { AddplanComponent } from './manager/addplan/addplan.component';
import { BatchlistComponent } from './manager/batchlist/batchlist.component';
import { AddbatchComponent } from './manager/addbatch/addbatch.component';
import { UpdatebatchComponent } from './manager/updatebatch/updatebatch.component';
import { BuyplanComponent } from './user/buyplan/buyplan.component';
import { MyplansComponent } from './user/myplans/myplans.component';
import { BatchreportComponent } from './admin/batchreport/batchreport.component';
import { EnrollmentreportComponent } from './admin/enrollmentreport/enrollmentreport.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './commons/login/login.component';
import { ReviewComponent } from './user/review/review.component';
import { UpdatemanagerComponent } from './admin/updatemanager/updatemanager.component';
import { ActiveaccountsComponent } from './admin/activeaccounts/activeaccounts.component';
import { BlockaccountsComponent } from './admin/blockaccounts/blockaccounts.component';
import { EnrollmentlistComponent } from './manager/enrollmentlist/enrollmentlist.component';
import { ProfileComponent } from './admin/profile/profile.component';


import { ManagerbatchreportComponent } from './manager/managerbatchreport/managerbatchreport.component';
import { ManagerenrollmentreportComponent } from './manager/managerenrollmentreport/managerenrollmentreport.component';
import { ManagersportreportComponent } from './manager/managersportreport/managersportreport.component';
import { ForgotpasswordComponent } from './commons/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './commons/changepassword/changepassword.component';


import { EditplanComponent } from './manager/editplan/editplan.component';
import { MembershipdetailsComponent } from './user/membershipdetails/membershipdetails.component';
import { BuycurrentComponent } from './user/buycurrent/buycurrent.component';
import { BatchlistuserComponent } from './user/batchlistuser/batchlistuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';



const routes: Routes = [
  {path:'home',component:DschomeComponent},
  {
    path:'buymembership',
    component:BuymembershipComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'buyplan',
    component:BuyplanComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'myplans',
    component:MyplansComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'addreview/:id',
    component:ReviewComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'membershipdetails',
    component:MembershipdetailsComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'buycurrent',
    component:BuycurrentComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'user',
    component:UserhomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'batchlistforuser',
    component:BatchlistuserComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path:'batchstatuslistforuser',
    component:BatchstatuslistComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
{
    path:'edituser',
    component:EdituserComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },



  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'error',component:ErrorpageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:UserregisterComponent},
  {path:'managerbatchreport',component:ManagerbatchreportComponent},
  {path:'managerenrollmentreport',component:ManagerenrollmentreportComponent},
  {path:'managersportreport',component:ManagersportreportComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'login',component:LoginComponent},

  {path: 'planlist',
    component: PlanlistComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },
  {
    path: 'addplan',
    component: AddplanComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },
  {
    path: 'updateplan/:id',
    component: EditplanComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },

  {
    path:'manager',
    component: ManagerhomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },
  {
    path:'batchlist',
    component: BatchlistComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },
  {
    path:'addbatch',
    component: AddbatchComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },
  {
    path:'updatebatch/:id',
    component: UpdatebatchComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },
  {
    path: 'enrollmentlist',
    component: EnrollmentlistComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },

  //Admin
  {
    path: 'admin',
    component: AdminhomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
   {
    path: 'registermanager',
    component: ManagerregistrationComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
  {
    path: 'sportlist',
    component: SportlistComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },

  {
    path: 'addsport',
    component: AddsportComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
  {
    path: 'updatesport/:id',
    component: UpdatesportComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
  {
    path: 'report/sport',
    component: SportreportComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
  {
    path: 'report/batch',
    component: BatchreportComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },

  {
    path: 'updatemanager/:id',
    component: UpdatemanagerComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },

  {
    path: 'report/enroll',
    component: EnrollmentreportComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },

  {
    path: 'managerlist',
    component: ManagerlistComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },

  {
    path: 'activeaccounts',
    component: ActiveaccountsComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
  {
    path: 'blockaccounts',
    component: BlockaccountsComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
  {
    path: 'adminprofile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    UserModule,
    AdminModule,
    ManagerModule,
    CommonsModule
  ]
})
export class AppRoutingModule { }
