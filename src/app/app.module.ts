import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { LoginDialog } from './dialog/login.dialog';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ContactslistComponent } from './contactslist/contactslist.component'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginDialog,
    ContactsComponent,
    ContactslistComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 

    
    
  ],
  entryComponents:[LoginDialog,ContactsComponent,ContactslistComponent],
  providers:[ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }, HttpClient],
  bootstrap: [AppComponent,]
})
export class AppModule { }
