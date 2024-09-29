import { Injectable, signal } from '@angular/core';

interface userStore {
  nombre: string;
  email: string | null;
  rol: string;
  photoURL: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private userDataSignal = signal<userStore | null>(null);

  private readonly localStorageKey = 'userData';

  constructor() {
    const storedUser = localStorage.getItem(this.localStorageKey);
    if (storedUser) {
      this.userDataSignal.set(JSON.parse(storedUser));
    }
  }

  setUserData(user: userStore): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    this.userDataSignal.set(user);
  }

  getUserDataSignal() {
    return this.userDataSignal;
  }

  getUserRoleSignal() {
    return signal(() => this.userDataSignal()?.rol || null);
  }

  // getUserRoleSignal() {
  //   return this.userDataSignal()?.rol || null;
  // }

  clearUserData(): void {
    localStorage.removeItem(this.localStorageKey);
    this.userDataSignal.set(null);
  }
}
