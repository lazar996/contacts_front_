import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contactslist } from '../interface/contactslist'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactslistService {

  constructor(private _http: HttpClient) { }


  getContacts(){

    return this._http.get<Contactslist[]>('http://localhost:8080/api/ContactsList')
  }
}
