import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
<<<<<<< HEAD
import { ContactsComponent } from './contacts/contacts.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
=======
>>>>>>> 441d37ad60e26c0ca17bdf476e3074cfd4366fdb

const routes: Routes = [

  {path: 'users', component: UsersComponent},
<<<<<<< HEAD
  {path: 'contacts', component: ContactsComponent},
  {path: 'contactslist', component: ContactslistComponent}
=======
>>>>>>> 441d37ad60e26c0ca17bdf476e3074cfd4366fdb
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
