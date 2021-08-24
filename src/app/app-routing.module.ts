import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/shared/homepage/homepage.component';
import { AdminloginComponent } from './components/login/adminlogin/adminlogin.component';
import { CustomerloginComponent } from './components/login/customerlogin/customerlogin.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { AdminregisterComponent } from './components/register/adminregister/adminregister.component';
import { CustomerregisterComponent } from './components/register/customerregister/customerregister.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customerlogin', component: CustomerloginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customerregister', component: CustomerregisterComponent },
  { path: 'adminregister', component: AdminregisterComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
