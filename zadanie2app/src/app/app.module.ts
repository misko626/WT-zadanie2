import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './mainComponents/home/home.component';
import { DatabaseListComponent } from './mainComponents/database-list/database-list.component';
import { ContactComponent } from './mainComponents/contact/contact.component';
import { HomeIntroComponent } from './mainComponents/home/home-intro/home-intro.component';
import { HomeContentComponent } from './mainComponents/home/home-content/home-content.component';
import { HomeFrameworksComponent } from './mainComponents/home/home-frameworks/home-frameworks.component';
import { ContactIntroComponent } from './mainComponents/contact/contact-intro/contact-intro.component';
import { ContactFormComponent } from './mainComponents/contact/contact-form/contact-form.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat';

import { ConfirmationService, MessageService } from 'primeng/api';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { NewMemberFormComponent } from './mainComponents/database-list/new-member-form/new-member-form.component';
import { AllMembersListComponent } from './mainComponents/database-list/all-members-list/all-members-list.component';
import { DatabaseIntroComponent } from './mainComponents/database-list/database-intro/database-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DatabaseListComponent,
    ContactComponent,
    HomeIntroComponent,
    HomeContentComponent,
    HomeFrameworksComponent,
    ContactIntroComponent,
    ContactFormComponent,
    NewMemberFormComponent,
    AllMembersListComponent,
    DatabaseIntroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    CardModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
