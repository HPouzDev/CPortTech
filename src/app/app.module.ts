import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

//COMPONENTS
import { DashboardComponent } from './/components/dashboard/dashboard.component';
import { LoginComponent } from './/components/login/login.component';
import { RecoverpassComponent } from './/components/recoverpass/recoverpass.component';

const config = {
  apiKey: 'AIzaSyBsYE6BOjGkLsUNaRwzOcgQDXA6q7rOl6I',
  authDomain: 'oficinatallerbest.firebaseapp.com',
  databaseURL:
    'https://oficinatallerbest-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'oficinatallerbest',
  storageBucket: 'oficinatallerbest.appspot.com',
  messagingSenderId: '230783679721',
  appId: '1:230783679721:web:5f9cd5a4468983c9658478',
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RecoverpassComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
