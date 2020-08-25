import { Component, OnInit } from '@angular/core';
import { Users } from '../interface/users';
import { UsersService } from  '../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

 
  users: Users[];
  ngOnInit(): void {
  
    this.loadUsers();
  }

  loadUsers(){
    this.usersService.getUsers().subscribe(

        success => {

          this.users = success;
          console.log(this.users)
          
        },
        error=> console.error(error)
        
    )

  }
}
