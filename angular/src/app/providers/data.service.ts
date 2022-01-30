import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
// userdata:any[] =[]
propdata:any[] =[]
  constructor(private _http:HttpClient)  { }
  getAllUser():Observable<any>{
    return this._http.get(`${environment.commonUrl}/admin/allusers`)
  }
  getAllProp():Observable<any>{
    return this._http.get(`${environment.commonUrl}/user/properties`)
  }
  addNewUser(userData:any):Observable<any>{
       return this._http.post(`${environment.commonUrl}/user/signOut`,userData)
  }
  addNewAdmin(adminData:any):Observable<any>{
    return this._http.post(`${environment.commonUrl}/admin/newadmin`,adminData)
  }
  singleUser(id:any):Observable<any>{
    return this._http.get(`${environment.commonUrl}/user/${id}`)
  }
}
