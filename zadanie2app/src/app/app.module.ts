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
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';

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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
