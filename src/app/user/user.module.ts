import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { BatchstatuslistComponent } from './batchstatuslist/batchstatuslist.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BuymembershipComponent } from './buymembership/buymembership.component';
import { DialogComponent } from './buymembership/dialog/dialog.component';
import { BuyplanComponent } from './buyplan/buyplan.component';
import { MyplansComponent } from './myplans/myplans.component';
import { ReviewComponent } from './review/review.component';
import { MembershipdetailsComponent } from './membershipdetails/membershipdetails.component';
import { BuycurrentComponent } from './buycurrent/buycurrent.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BatchlistuserComponent} from './batchlistuser/batchlistuser.component';
import {EdituserComponent} from './edituser/edituser.component'
@NgModule({
  declarations: [EdituserComponent,BatchlistuserComponent,UserhomeComponent,BatchstatuslistComponent, BuymembershipComponent, DialogComponent, BuyplanComponent, MyplansComponent,ReviewComponent, MembershipdetailsComponent, BuycurrentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ScrollingModule
  ]
})
export class UserModule { }
