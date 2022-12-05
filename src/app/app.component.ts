import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'AngularFire';

  constructor(public app: FirebaseApp) {}
}
