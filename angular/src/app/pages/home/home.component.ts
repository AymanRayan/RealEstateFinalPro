import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _data:DataService) { }
  propdata:any[] =[]
  ngOnInit(): void {
    this._data.getAllProp().subscribe((result) => {
      this.propdata = result.data
    })
  }

}
