import { Component, inject, OnInit } from '@angular/core';
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
import { logInOutline } from 'ionicons/icons';
import { AuthStateService } from 'src/app/shared/auth-state/auth-state.service';

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
  private _auhtStateService = inject(AuthStateService);
  constructor() {
    addIcons({ logInOutline });
  }

  logout() {
    this._auhtStateService.logOut();
  }

  ngOnInit() {}
}
