import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _loged:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  handlelogout(): void {
    this._loged.logOut(this._loged.userData).subscribe(
      (res) => {},
      (e) => {},
      ()=> {
        this._loged.islogedin=false
        this.router.navigateByUrl('home')
      }
    )

  }
}
