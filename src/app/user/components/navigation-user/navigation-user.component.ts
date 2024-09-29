import { Component, effect, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline, personAddOutline, personOutline } from 'ionicons/icons';
import { AuthStoreService } from 'src/app/shared/auth-state/auht-store.service';

interface UserData {
  email: string;
  nombre: string;
  rol: string;
  photoURL: string | null;
}

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, RouterLink],
})
export class NavigationUserComponent implements OnInit {
  dataUser = this.authStoreService.getUserDataSignal();
  userRole?: UserData;

  navigationRoutes = [
    {
      path: '/user/receta/add-receta',
      name: 'Agregar Receta',
      icon: 'log-in-outline',
      restrictedToAdmin: true,
    },
    {
      path: '/user/favorities',
      name: 'Favoritos',
      icon: 'person-add-outline',
      restrictedToAdmin: false,
    },
    {
      path: '/user/profile',
      name: 'Mi perfil',
      icon: 'person-outline',
      restrictedToAdmin: false,
    },
  ];

  constructor(private authStoreService: AuthStoreService) {
    addIcons({ logInOutline, personAddOutline, personOutline });

    effect(() => {
      const data = this.dataUser();
      if (data) {
        this.userRole = data as UserData;
        this.updateNavigationRoutes();
      }
    });
  }

  ngOnInit(): void {}

  updateNavigationRoutes() {
    if (this.userRole?.rol !== 'admin') {
      this.navigationRoutes = this.navigationRoutes.filter(
        (route) => !route.restrictedToAdmin
      );
    }
  }
}
