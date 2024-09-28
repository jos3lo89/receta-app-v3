import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonToolbar,
  IonButton,
  IonAvatar,
  IonTabButton,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline, logOutOutline } from 'ionicons/icons';
import { AuthStateService } from 'src/app/shared/auth-state/auth-state.service';

interface UserDataI {
  email: string | null | undefined;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonIcon,
    IonTabButton,
    IonAvatar,
    IonButton,
    IonToolbar,
    RouterLink,
  ],
})
export class HeaderComponent implements OnInit {
  // private _auhtStateService = inject(AuthStateService);

  constructor() {
    addIcons({ logInOutline, logOutOutline });
  }

  // logout() {
  //   this._auhtStateService.logOut();
  // }

  ngOnInit() {}

  // isAuthenticated() {
  //   return this._auhtStateService.isAuthenticated();
  // }
}
