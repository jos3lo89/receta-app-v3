import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

export interface User {
  nombre: string;
  rol: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = inject(Auth);
  private _firestore = inject(Firestore);

  constructor() {}

  async registerService(user: User) {
    try {
      const newUser = await createUserWithEmailAndPassword(
        this._auth,
        user.email,
        user.password
      );

      await this.saveUserData(newUser.user.uid, {
        nombre: user.nombre,
        rol: user.rol,
      });
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }

  private async saveUserData(
    userId: string,
    data: Omit<User, 'password' | 'email'>
  ) {
    try {
      const userRef = doc(this._firestore, `users/${userId}`);
      await setDoc(userRef, data);
    } catch (error) {
      console.error('Error al guardar los datos en Firestore:', error);
    }
  }

  loginService(user: Omit<User, 'nombre' | 'rol'>) {
    return signInWithEmailAndPassword(this._auth, user.email, user.password);
  }

  signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: 'select_account' });
    return signInWithPopup(this._auth, googleProvider);
  }
}
