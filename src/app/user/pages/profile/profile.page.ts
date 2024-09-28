import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSpinner,
} from '@ionic/angular/standalone';
import { AuthStateService } from 'src/app/shared/auth-state/auth-state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export default class ProfilePage implements OnInit {
  private _authState = inject(AuthStateService);

  loading = true;

  email: string | null = '';
  foto: string | null = '';
  nombre: string | null = '';
  rol: string | null = '';

  constructor() {}

  async ngOnInit() {
    await this.getDAta();
  }

  async getDAta() {
    try {
      const userData = await this._authState.obtenerDatosUsuario();
      this.email = this._authState.usuarioActivo?.email || null;
      this.foto = this._authState.usuarioActivo?.photoURL || null;
      this.nombre =
        userData?.nombre || this._authState.usuarioActivo?.displayName || null;
      this.rol = userData?.rol || null;
    } catch (error) {
      console.error('Error fetching user data', error);
    } finally {
      this.loading = false;
    }
  }
}
