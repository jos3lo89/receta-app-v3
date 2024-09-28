import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonList,
  IonInput,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonText,
    IonInput,
    IonList,
    IonItem,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export default class RegisterPage implements OnInit {
  private _authService = inject(AuthService);

  constructor() {}

  ngOnInit() {}

  async login() {
    try {
      const user = await this._authService.registerService({
        email: 'test4@test.com',
        nombre: 'admincito',
        password: '123456',
        rol: 'admin',
      });

      console.log("todo ok");


    } catch (error) {
      console.log(error);
    }
  }
}
