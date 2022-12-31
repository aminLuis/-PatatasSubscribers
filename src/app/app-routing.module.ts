import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatSusbcriberComponent } from './pages/creat-susbcriber/creat-susbcriber.component';
import { ListSubscribersComponent } from './pages/list-subscribers/list-subscribers.component';

const routes: Routes = [
  {path: 'subscribers', component: ListSubscribersComponent},
  {path: 'subscribers-creat', component: CreatSusbcriberComponent},
  {path: 'login', component: LoginComponent, outlet:'log'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
