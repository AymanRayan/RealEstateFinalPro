import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { DataService } from 'src/app/providers/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm:FormGroup=
  new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(2)]),
    price:new FormControl(),
  })

  constructor(private _data:DataService,private router:Router ,private _auth:AuthService) { }

  ngOnInit(): void {
  }
  handelSubmmit(){
     this._data.addNewProp(this.addForm.value).subscribe(
       () => {
        this.router.navigateByUrl('/allproperties')
       }
     )
  }

}
