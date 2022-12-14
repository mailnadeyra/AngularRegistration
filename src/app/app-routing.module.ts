import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'otp',component:OtpComponent},
  {path:'userList',component:UserListComponent},
  {path:'login',component:LoginComponent},
  {path:'regSuccess',component:RegSuccessComponent},
  {path:'',redirectTo:'register',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
