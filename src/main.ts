import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'recetas-v3',
        appId: '1:126298720392:web:5e2c835f575b1aaad1773d',
        storageBucket: 'gs://recetas-v3.appspot.com',
        // locationId: 'us-central',
        apiKey: 'AIzaSyD8KnQ_mEJQHEwI7NgXpEYBYiya3WDGdFc',
        authDomain: 'recetas-v3.firebaseapp.com',
        messagingSenderId: '126298720392',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
});

defineCustomElements(window);
