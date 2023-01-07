import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './mainComponents/contact/contact.component';
import { AllMembersListComponent } from './mainComponents/database-list/all-members-list/all-members-list.component';
import { DatabaseListComponent } from './mainComponents/database-list/database-list.component';
import { NewMemberFormComponent } from './mainComponents/database-list/new-member-form/new-member-form.component';
import { HomeComponent } from './mainComponents/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'database-list',
    component: DatabaseListComponent,
    children: [
      { path: '', component: AllMembersListComponent },
      { path: 'list', component: AllMembersListComponent },
      { path: 'form', component: NewMemberFormComponent },
      { path: 'form/:id', component: NewMemberFormComponent },
    ],
  },

  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
