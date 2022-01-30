import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { DataService } from 'src/app/providers/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproperties',
  templateUrl: './allproperties.component.html',
  styleUrls: ['./allproperties.component.css']
})
export class AllpropertiesComponent implements OnInit {
  allprop :any[] =[]
  constructor(public _auth:AuthService, private router:Router, private _data:DataService ) { }
  public type :any = this._auth.userType

  ngOnInit(): void {
    this.getallprop()
  }
  getallprop(){
    this._data.getPropForAdmin().subscribe(
      (res) => {this.allprop = res.data}
    )
  }
}
