import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { PlanlistComponent } from './planlist/planlist.component';
import { AddplanComponent } from './addplan/addplan.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { AddbatchComponent } from './addbatch/addbatch.component';
import { UpdatebatchComponent } from './updatebatch/updatebatch.component';
import { EnrollmentlistComponent } from './enrollmentlist/enrollmentlist.component';

import { ManagerbatchreportComponent } from './managerbatchreport/managerbatchreport.component';
import { ManagerenrollmentreportComponent } from './managerenrollmentreport/managerenrollmentreport.component';
import { ManagersportreportComponent } from './managersportreport/managersportreport.component'
import { EditplanComponent } from './editplan/editplan.component'

@NgModule({
  declarations: [ManagerhomeComponent, PlanlistComponent, AddplanComponent, BatchlistComponent, AddbatchComponent, UpdatebatchComponent, EnrollmentlistComponent, ManagerbatchreportComponent, ManagerenrollmentreportComponent, ManagersportreportComponent,EditplanComponent],

  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
