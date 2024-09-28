import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import LayoutComponent from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // template: ` <ion-app><ion-router-outlet></ion-router-outlet></ion-app>`,
  standalone: true,
  imports: [IonApp, IonRouterOutlet, LayoutComponent],
})
export class AppComponent {
  constructor() {}
}
