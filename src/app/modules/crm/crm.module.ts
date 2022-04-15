import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';
import { CustomerComponent } from './customer/customer.component';
import { LayoutModule } from 'src/app/components/site/layout/layout.module';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    CrmComponent,
    CustomerComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    LayoutModule
  ]
})
export class CrmModule { }
