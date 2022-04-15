import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { LayoutModule } from 'src/app/components/site/layout/layout.module';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ]
})
export class AdminModule { }
