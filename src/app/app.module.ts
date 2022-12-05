import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

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
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
