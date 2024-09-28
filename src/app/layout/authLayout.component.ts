import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonFooter,
} from '@ionic/angular/standalone';
import { NavigationComponent } from '../auth/components/navigation/navigation.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    IonRouterOutlet,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonFooter,
    NavigationComponent,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button>atras</ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <app-navigation-auth></app-navigation-auth>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: `
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  ion-content {
    --overflow: auto;
  }
`,
  selector: 'app-auth-layout',
})
export default class AuthLayoutComponent {}
