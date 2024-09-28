import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { logInOutline, personAddOutline } from 'ionicons/icons';
import { IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-auth',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, RouterLink],
})
export class NavigationComponent implements OnInit {
  constructor() {
    addIcons({ logInOutline, personAddOutline });
  }

  navigationRoutes = [
    {
      path: '/auth/login',
      name: 'Iniciar sesión',
      icon: 'log-in-outline',
    },
    {
      path: '/auth/register',
      name: 'Registrate',
      icon: 'person-add-outline',
    },
  ];

  ngOnInit() {}
}
