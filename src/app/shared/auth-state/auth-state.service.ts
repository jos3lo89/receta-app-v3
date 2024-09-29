import { inject, Injectable } from '@angular/core';
import { Auth, authState, getAuth, signOut } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthStoreService } from './auht-store.service';

interface USErDat {
  nombre: string;
  rol: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private _auth = inject(Auth);
  private _firestore = inject(Firestore);
  private _authStore = inject(AuthStoreService);

  get authState$(): Observable<any> {
    return authState(this._auth);
  }

  get usuarioActivo() {
    return getAuth().currentUser;
  }

  async logOut() {
    this._authStore.clearUserData();
    await signOut(this._auth);
  }

  async obtenerDatosUsuario(): Promise<USErDat | null> {
    const usuario = this.usuarioActivo;

    if (usuario) {
      try {
        const userDocRef = doc(this._firestore, `users/${usuario.uid}`);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          return userDocSnapshot.data() as USErDat;
        } else {
          console.error('No se encontró el documento del usuario');
          return null;
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    } else {
      return null;
    }
  }

  constructor() {}
}
