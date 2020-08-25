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
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginDialog,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 

    
    
  ],
  entryComponents:[LoginDialog],
  providers:[HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
