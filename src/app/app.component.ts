import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import LayoutComponent from './layout/layout.component';
import { Platform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // template: ` <ion-app><ion-router-outlet></ion-router-outlet></ion-app>`,
  standalone: true,
  imports: [IonApp, IonRouterOutlet, LayoutComponent],
})
export class AppComponent {
  private _platform = inject(Platform);

  constructor() {}

  initializeApp() {
    this._platform.ready().then(() => {
      GoogleAuth.initialize({
        clientId: environment.clientId,
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });
    });
  }
}
