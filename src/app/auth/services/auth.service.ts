import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { AuthStoreService } from 'src/app/shared/auth-state/auht-store.service';

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
  private _authStore = inject(AuthStoreService);

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

  async loginService(user: Omit<User, 'nombre' | 'rol'>) {
    const authUser = await signInWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    );

    const userDocRef = doc(this._firestore, `users/${authUser.user.uid}`);
    const userDocSnapshot = await getDoc(userDocRef);

    const { email, photoURL } = authUser.user;
    const data = userDocSnapshot.data() as { nombre: string; rol: string };

    const allData = {
      nombre: data.nombre,
      rol: data.rol,
      email,
      photoURL,
    };

    this._authStore.setUserData(allData);

    console.log('all data', allData);

    return allData;
  }

  async signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: 'select_account' });
    const www = await signInWithPopup(this._auth, googleProvider);

    console.log(www);

    return www;
  }
}
