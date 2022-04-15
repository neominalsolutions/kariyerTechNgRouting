import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AngularPipesComponent } from './pipes/angular-pipes/angular-pipes.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: TodoDetailComponent,
    path: 'todo-detail/:id',
    data: {
      title: 'Todo Detay Sayfası',
      metaTags: 'angular'
    },

  },
  {
    component:AngularPipesComponent,
    path:'pipes'
  },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'crm', loadChildren: () => import('./modules/crm/crm.module').then(m => m.CrmModule) }, // Lazy Loaded Page Module
  // avantajları admin ile ilgili sayfalara gittiğimizde sadece admin componentleri tarayıcıda yüklenir.
  // crm ile ilgili kısımlarda ise sadece crm componentleri yüklenir. dinamik olarak yapar. aynı zamanda daha önceden açılan bir module istek varsa o ilgili modulü önce request de cachelediğinden dolayı daha hızlı yükleme işlemi yapar.
  // modülden başka bir modüle geçişte ilgili componentleri domdan kendisi temizler.
  // App Module içerisinde tüm sayfalarınızı page componentlerinizi tanımlamak zorunda kalmazsınız. merge ihtimaliniz düşer.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
