import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonFooter,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HeaderComponent } from '../components/header/header.component';

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
  ],
  selector: 'app-layout',
  template: `
    <ion-header>
      <app-header />
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <app-navigation />
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
