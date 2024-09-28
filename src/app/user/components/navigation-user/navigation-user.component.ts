import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline, personAddOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, RouterLink],
})
export class NavigationUserComponent implements OnInit {
  constructor() {
    addIcons({ logInOutline, personAddOutline, personOutline });
  }

  navigationRoutes = [
    {
      path: '/user/receta/add-receta',
      name: 'Agregar Receta',
      icon: 'log-in-outline',
    },
    {
      path: '/user/favorities',
      name: 'Favoritos',
      icon: 'person-add-outline',
    },
    {
      path: '/user/profile',
      name: 'Mi perfil',
      icon: 'person-outline',
    },
  ];

  ngOnInit() {}
}
