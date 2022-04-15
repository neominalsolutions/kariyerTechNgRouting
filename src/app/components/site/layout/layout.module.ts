import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiteLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SiteLayoutComponent
  ]
})
export class LayoutModule { }

// RouterModule router-outlet ile layout oluşturabilmek için ekledik.
