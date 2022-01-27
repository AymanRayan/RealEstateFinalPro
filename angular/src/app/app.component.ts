import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngproject';
  constructor(public _auth:AuthService){}
}
