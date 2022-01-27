import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

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
    malStatus:new FormControl(""),
    isAdmin: new FormControl(false)
  })
    constructor() { }
  
    ngOnInit(): void {
    }
    get name(){ return this.registerUser.get('name')}
    handleRegister(){
      console.log(this.registerUser.value)
  }

}
