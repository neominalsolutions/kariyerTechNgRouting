import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
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

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
