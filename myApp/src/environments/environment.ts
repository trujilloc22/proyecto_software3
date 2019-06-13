// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/**
 * Constante de configuracion con mi aplicacion(BD) en FireBase
 */
export const firebaseConfig = {
  apiKey: "AIzaSyDinMLWJ_Sb1_21Q1KHNYfZpKh5s2ndXeo",
  authDomain: "jobymultiserviciosbd.firebaseapp.com",
  databaseURL: "https://jobymultiserviciosbd.firebaseio.com",
  projectId: "jobymultiserviciosbd",
  storageBucket: "jobymultiserviciosbd.appspot.com",
  messagingSenderId: "160567826633",
  appId: "1:160567826633:web:b291547f366bced5"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
