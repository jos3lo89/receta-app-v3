// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId:
    '1062986349881-usv1eonffh5kaepqpm5rding1g0sgpfa.apps.googleusercontent.com',
  debug: false,
  firebase: {
    projectId: 'recetas-v3',
    appId: '1:126298720392:web:5e2c835f575b1aaad1773d',
    storageBucket: 'gs://recetas-v3.appspot.com',
    // locationId: 'us-central',
    apiKey: 'AIzaSyD8KnQ_mEJQHEwI7NgXpEYBYiya3WDGdFc',
    authDomain: 'recetas-v3.firebaseapp.com',
    messagingSenderId: '126298720392',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
