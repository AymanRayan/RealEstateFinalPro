import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AddComponent } from './pages/project/add/add.component';
import { SinglepropComponent } from './pages/project/singleprop/singleprop.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './pages/error404/error404.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AdminRegisterComponent } from './pages/user/admin-register/admin-register.component';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SinglepropComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    Error404Component,
    ProfileComponent,
    AdminRegisterComponent,
    HomeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
