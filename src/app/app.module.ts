import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { LayoutModule } from './components/site/layout/layout.module';
import { AngularPipesComponent } from './pipes/angular-pipes/angular-pipes.component';
import { OrderstatusPipe } from './pipes/orderstatus.pipe';

// http api işlemleri gerçekleştirebiliriz.
// http service barındırır.

// custom pipelar component gibi declarations kısmına tanımlanmalıdır.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodoDetailComponent,
    AngularPipesComponent,
    OrderstatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Not: Eğer Lazy Loaded Page Module özelliği kullanırsak AppModule içerisinde bir module import'a gerek kalmaz. Routing üzerinden ilgili modüller yüklenir.