import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/providers/data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any
  loaded=false
  constructor(private _router:ActivatedRoute, private _data:DataService) { }

  ngOnInit(): void {
    this.getUserData()
  }
 getUserData(){
   this._data.singleUser(this._router.snapshot.paramMap.get("id")).subscribe(
     res => this.user = res.data,
     e => {},
     () => this.loaded=true
   )
 }
}
