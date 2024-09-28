import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, albumsOutline, search, person } from 'ionicons/icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, RouterLink],
})
export class NavigationComponent implements OnInit {
  constructor() {
    addIcons({ homeOutline, albumsOutline, search, person });
  }

  navigationRoutes = [
    {
      path: '/pages/home',
      name: 'Inicio',
      icon: 'home-outline',
    },
    {
      path: '/recetas/categories',
      name: 'Catergorias',
      icon: 'albums-outline',
    },
    {
      path: '/recetas/search',
      name: 'Buscar',
      icon: 'search',
    },
    {
      path: '/user/profile',
      name: 'Mi Perfil',
      icon: 'person',
    },
  ];

  ngOnInit() {}
}
