import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../interface/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  
  getUsers(){

    return this._http.get<Users[]> ('http://localhost:8080/api/user');
  }
}
