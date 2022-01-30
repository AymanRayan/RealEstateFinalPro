import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { DataService } from 'src/app/providers/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
    registerUser:FormGroup=
  new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(2)]),
    age:new FormControl(),
    password:new FormControl(""),
    email:new FormControl(""),
    gender:new FormControl(""),
    status:new FormControl("")
    // type: new FormControl("admin")
  })
    constructor(private _data:DataService,private router:Router ,private _auth:AuthService) { }
  
    ngOnInit(): void {
    }
    // get name(){ return this.registerUser.get('name')}
    handleRegister(){
      this._data.addNewAdmin(this.registerUser.value).subscribe(
        ()=>{
          this._auth.flag=true
          this._auth.islogedin=true
          this.router.navigateByUrl('home')
        }
      )
    }
}
