import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonBackButton,
} from '@ionic/angular/standalone';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavigationUserComponent } from '../user/components/navigation-user/navigation-user.component';
import { LogOutComponent } from '../auth/components/log-out/log-out.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    IonRouterOutlet,
    IonContent,
    IonHeader,
    IonFooter,
    IonToolbar,
    IonTitle,
    NavigationComponent,
    HeaderComponent,
    IonButton,
    IonButtons,
    IonBackButton,
    NavigationUserComponent,
    LogOutComponent,
  ],
  selector: 'app-layout',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button>atras</ion-back-button>
        </ion-buttons>

        <app-log-out />
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <app-navigation-user />
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
})
export default class LayoutComponent {}
