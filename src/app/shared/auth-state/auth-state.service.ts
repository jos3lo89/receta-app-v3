import { inject, Injectable } from '@angular/core';
import { Auth, authState, getAuth, signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private _auth = inject(Auth);

  get authState$(): Observable<any> {
    return authState(this._auth);
  }

  get usuarioActivo() {
    return getAuth().currentUser;
  }

  async logOut() {
     await signOut(this._auth);
  }

  constructor() {}
}
