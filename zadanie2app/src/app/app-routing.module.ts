import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './mainComponents/contact/contact.component';
import { DatabaseListComponent } from './mainComponents/database-list/database-list.component';
import { HomeComponent } from './mainComponents/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'database-list',
    component: DatabaseListComponent,
    children: [],
  },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
