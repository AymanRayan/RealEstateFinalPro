import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/providers/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : any ={email:"aymanrayan12@gmail.com",password:"123456"}
msg : string =""
x : boolean = false
  constructor(private _auth:AuthService ,private router:Router ,private _dataser:DataService) { 
    _auth.flag=false
  }
  // aymanrayan12@gmail.com
  ngOnInit(): void { }
  onBlur() : void { this.x=true}
  handleLogin(loginForm:NgForm):void {
    if(loginForm.valid){
      this._auth.login(this.user).subscribe(
        (data) => {
          localStorage.setItem("theToken",data.data.token)
          this._auth.userData = data.data
        },
        (e)=> {this.msg = e.error.data},
        ()=> {
          this.msg=""
          this.x=false
          loginForm.resetForm()
          this.home()
        }
      ) 
      
    }
  }
  home(){
    this._auth.me().subscribe(
      (result) => {this._auth.userData = result.data},
      (e) => {},
      () => {
        this._auth.flag=true
        this._auth.islogedin=true
        this.router.navigateByUrl('home')
      }
    )  
  }
  handleReg(){
    this._auth.flag=true
    this._auth.islogedin=false
    this.router.navigateByUrl('register')
  }
}
