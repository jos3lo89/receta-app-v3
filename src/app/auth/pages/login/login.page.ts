import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { hasEmailError, isRequired } from '../../utils/validators';
import { ToastService } from 'src/app/shared/toast/toast.service';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

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
    ReactiveFormsModule,
  ],
})
export default class LoginPage implements OnInit {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _formBuild = inject(FormBuilder);
  private _toastService = inject(ToastService);

  constructor() {}

  ngOnInit() {}

  form = this._formBuild.group<FormSignUp>({
    email: this._formBuild.control('', [Validators.required, Validators.email]),
    password: this._formBuild.control('', [Validators.required]),
  });

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  isEmailRequired() {
    return hasEmailError(this.form);
  }

  async login() {
    if (this.form.invalid) return;
    const { email, password } = this.form.value;

    if (!email || !password) return;

    try {
      await this._authService.loginService({
        email,
        password,
      });

      this._toastService.getToast('Hola nuevamente', 'top', 'success');
      this._router.navigateByUrl('/pages/home');
    } catch (error) {
      this._toastService.getToast('Ocurrio un error', 'top', 'danger');
      console.log(error);
    }
  }

  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      this._toastService.getToast('Hola nuevamente', 'top', 'success');
      this._router.navigateByUrl('/pages/home');
    } catch (error) {
      this._toastService.getToast('Ocurrio un error', 'top', 'danger');
      console.log(error);
    }
  }
}
