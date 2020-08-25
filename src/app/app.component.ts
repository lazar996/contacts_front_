import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialog } from './dialog/login.dialog';
import { AuthenticationService } from './security/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contacts';
  constructor(public dialog:MatDialog,private authService:AuthenticationService){}

  loggedIn:boolean=false;
  currentUser;
  role:string;

  ngOnInit(): void {
    this.loggedIn=this.authService.isLoggedIn();
    if(this.loggedIn){
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
      this.role = this.authService.getRole();
    }
  }

  openLoginDialog():void{
    const dialogRef = this.dialog.open(LoginDialog,{
      width:'350px'
    });

    dialogRef.afterClosed().subscribe(resoult=>
      {
        if(resoult=="success"){
          this.loggedIn=true;
        }
      })
    
  }

  odjava(){
    localStorage.clear();
    this.loggedIn=false;
    location.reload();
  }

  
}
