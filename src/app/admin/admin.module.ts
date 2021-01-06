import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManagerlistComponent } from './managerlist/managerlist.component';
import { ManagerregistrationComponent } from './managerregistration/managerregistration.component';
import { MaterialModule} from '../material/material.module'
import { FormsModule} from '@angular/forms'
import { SportlistComponent } from './sportlist/sportlist.component';
import { AddsportComponent } from './addsport/addsport.component';
import { UpdatesportComponent } from './updatesport/updatesport.component';
import { SportreportComponent } from './sportreport/sportreport.component';
import { BatchreportComponent } from './batchreport/batchreport.component';
import { EnrollmentreportComponent } from './enrollmentreport/enrollmentreport.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { UpdatemanagerComponent } from './updatemanager/updatemanager.component';
import { BlockaccountsComponent } from './blockaccounts/blockaccounts.component';
import { ActiveaccountsComponent } from './activeaccounts/activeaccounts.component';
import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [ManagerregistrationComponent,ManagerlistComponent,AdminhomeComponent, SportlistComponent, AddsportComponent, UpdatesportComponent, SportreportComponent, BatchreportComponent, EnrollmentreportComponent, MatConfirmDialogComponent, UpdatemanagerComponent, BlockaccountsComponent, ActiveaccountsComponent, ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ChartsModule
  ]
})
export class AdminModule { }
