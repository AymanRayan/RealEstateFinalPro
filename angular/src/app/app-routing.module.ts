import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/project/add/add.component';
import { AllpropertiesComponent } from './pages/project/allproperties/allproperties.component';
import { SinglepropComponent } from './pages/project/singleprop/singleprop.component';
import { AdminRegisterComponent } from './pages/user/admin-register/admin-register.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"addnewprop",component:AddComponent},
  {path:"singleprop/:id",component:SinglepropComponent},
  {path:"register",component:RegisterComponent},
  {path:"Addnewadmin",component:AdminRegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"allproperties",component:AllpropertiesComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"allusers",component:AllusersComponent},
  {path:"**",component:Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
