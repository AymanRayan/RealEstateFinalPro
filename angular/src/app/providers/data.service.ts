import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
userdata:any[] =[]
propdata:any[] =[]
  constructor(private _http:HttpClient)  { }
  getAllUser():Observable<any>{
    return this._http.get(`${environment.commonUrl}/admin/allusers`)
  }
  getAllProp():Observable<any>{
    return this._http.get(`${environment.commonUrl}/user/properties`)
  }
}
