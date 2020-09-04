import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactslistComponent } from './contactslist/contactslist.component';

const routes: Routes = [

  {path: 'users', component: UsersComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contactslist', component: ContactslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
