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
  IonSpinner,
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
    IonSpinner,
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

  isloading = false;
  isLoadingGoogleBtn = false;

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
    this.isloading = true;

    if (this.form.invalid) {
      this.isloading = false;
      return;
    }

    const { email, password } = this.form.value;

    if (!email || !password) {
      this.isloading = false;
      return;
    }

    try {
      await this._authService.loginService({
        email,
        password,
      });

      this._toastService.getToast('Hola nuevamente', 'top', 'success');
      this._router.navigateByUrl('/pages/home');
      this.isloading = false;
    } catch (error) {
      this._toastService.getToast('Ocurrio un error', 'top', 'danger');
      console.log(error);
      this.isloading = false;
    }
  }

  async submitWithGoogle() {
    this.isLoadingGoogleBtn = true;

    try {
      await this._authService.signInWithGoogle();
      this._toastService.getToast('Hola nuevamente', 'top', 'success');
      this._router.navigateByUrl('/pages/home');
      this.isLoadingGoogleBtn = false;
    } catch (error) {
      this._toastService.getToast('Ocurrio un error', 'middle', 'danger');
      console.log(error);
      this.isLoadingGoogleBtn = false;
    }
  }


  // async submitWithGoogle() {
  //   this.isLoadingGoogleBtn = true;
  //   try {
  //     console.log('Iniciando proceso de login con Google');
  //     const user = await this._authService.signInWithGoogle();
  //     console.log('Usuario autenticado:', user);

  //     if (user) {
  //       this._toastService.getToast('Hola nuevamente', 'top', 'success');
  //       console.log('Navegando a la página de inicio');
  //       await this._router.navigateByUrl('/pages/home');
  //     } else {
  //       throw new Error('No se recibió información del usuario');
  //     }
  //   } catch (error) {
  //     console.error('Error en el proceso de login:', error);
  //     this._toastService.getToast('Ocurrió un error', 'middle', 'danger');
  //   } finally {
  //     this.isLoadingGoogleBtn = false;
  //   }
  // }
}
