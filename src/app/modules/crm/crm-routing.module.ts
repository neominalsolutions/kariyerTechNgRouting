import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { 
    path: '', component: CrmComponent, // Crm Layout Component
    children: [
      {
        path:'customers',
        component:CustomerComponent
      },
      {
        path:'employees',
        component:EmployeeComponent
      }
    ] 
   },


  //  { 
  //   path: '', component: CrmComponent,
  //  },
  //  {
  //    path:'customers',
  //    component:CustomerComponent
  //  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
