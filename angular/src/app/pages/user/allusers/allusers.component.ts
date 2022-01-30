import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/providers/data.service';
import { AuthService } from 'src/app/providers/auth.service';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(public _auth:AuthService,private _data:DataService, private router:Router) { }
  allUsers :any[] = []
  public type :any = this._auth.userType
  ngOnInit(): void {
    console.log(this.type)
    this.getAllUsers()
  }
  getAllUsers(){
      this._data.getAllUser().subscribe(
        (res) => {this.allUsers = res.data},
        (e) => {},
        () => {}
      )
  }
}
