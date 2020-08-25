import { Component, OnInit } from '@angular/core';
import { Contactslist } from '../interface/contactslist';
import { ContactslistService } from '../services/contactslist.service';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {

  constructor(private contactslistservice: ContactslistService) { }

 
  contactList: Contactslist[];
  ngOnInit(): void {
  
    this.loadContactsList();
  }

  loadContactsList(){
    this.contactslistservice.getContacts().subscribe(

        success => {

          this.contactList = success;
          console.log(this.contactList)
          
        },
        error=> console.error(error)
        
    )

  }
}