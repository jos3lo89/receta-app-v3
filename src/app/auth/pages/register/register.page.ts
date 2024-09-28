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
import { hasEmailError, isRequired } from '../../utils/validators';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { Router } from '@angular/router';

interface FormRegister {
  nombre: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

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
    ReactiveFormsModule,
  ],
})
export default class RegisterPage implements OnInit {
  private _authService = inject(AuthService);
  private _formBuild = inject(FormBuilder);
  private _toastService = inject(ToastService);
  private _router = inject(Router);

  constructor() {}

  ngOnInit() {}

  form = this._formBuild.group<FormRegister>({
    nombre: this._formBuild.control('', [Validators.required]),
    email: this._formBuild.control('', [Validators.required, Validators.email]),
    password: this._formBuild.control('', [Validators.required]),
  });

  isRequired(field: 'email' | 'password' | 'nombre') {
    return isRequired(field, this.form);
  }

  isEmailRequired() {
    return hasEmailError(this.form);
  }

  async register() {
    if (this.form.invalid) return;
    const { email, password, nombre } = this.form.value;

    if (!email || !password || !nombre) return;

    try {
      await this._authService.registerService({
        email,
        nombre,
        password,
        rol: 'admin',
      });

      this._toastService.getToast('Hola nuevamente', 'top', 'success');
      this._router.navigateByUrl('/auth/login');
    } catch (error) {
      this._toastService.getToast('Ocurrio un error', 'top', 'danger');

      console.log(error);
    }
  }
}
