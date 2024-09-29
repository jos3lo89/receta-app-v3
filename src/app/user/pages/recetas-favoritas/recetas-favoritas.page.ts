import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AuthStoreService } from 'src/app/shared/auth-state/auht-store.service';

@Component({
  selector: 'app-recetas-favoritas',
  templateUrl: './recetas-favoritas.page.html',
  styleUrls: ['./recetas-favoritas.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export default class RecetasFavoritasPage implements OnInit {
  userDataSignal = this.auhtStoreService.getUserDataSignal();

  constructor(private auhtStoreService: AuthStoreService) {
    effect(() => {
      console.log('User role is:', this.userDataSignal());
    });
  }

  ngOnInit() {}
}
