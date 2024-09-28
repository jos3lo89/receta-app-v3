import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonBackButton,
  IonList,
  IonText,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../components/google-button/google-button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonList,
    IonBackButton,
    IonButtons,
    IonButton,
    IonLabel,
    IonItem,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    GoogleButtonComponent,
  ],
})
export default class LoginPage implements OnInit {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  constructor() {}

  ngOnInit() {}

  async login() {
    const user = {
      email: 'test3@test.com',
      password: '123456',
    };

    try {
      const userr = await this._authService.loginService(user);
      console.log('inicio de sesion exito wadafa', userr);
    } catch (error) {
      console.log(error);
    }
  }

  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      this._router.navigateByUrl('/pages/home');
    } catch (error) {
      console.log(error);
    }
  }
}
