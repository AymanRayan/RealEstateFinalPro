import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl, NgForm } from '@angular/forms';
import { DataService } from 'src/app/providers/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser:FormGroup= new FormGroup({
    name:new FormControl("",
    [Validators.required, Validators.minLength(2)]),
    email:new FormControl(""),
    password:new FormControl(""),
    status:new FormControl(""),
    gender:new FormControl(""),
    age:new FormControl(""),
    type: new FormControl("user")

  })
  constructor(private _data:DataService,private router:Router ,private _auth:AuthService) { }

  ngOnInit(): void {
  }
  handleRegister(){
    this._data.addNewUser(this.registerUser.value).subscribe(
      ()=>{
        this._auth.flag=true
        this._auth.islogedin=true
        this.router.navigateByUrl('home')
      }
    )
  }

}
