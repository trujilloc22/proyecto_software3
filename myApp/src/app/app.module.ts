import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Importo la variable creada de la aplicacion de firebase en enviroment
 */
import { firebaseConfig } from "../environments/environment"

/**
 * Importo el modulo de autenticacion de firebase
 */
import { AngularFireAuthModule } from "@angular/fire/auth"

/**
 * Importo desde angular el modulo de angularFireModele para utilizarlo en mi APP
 */
import { AngularFireModule } from "@angular/fire"

/**
 *  se imporate el modulo de firestorte
 */
import { AngularFirestoreModule } from "@angular/fire/firestore";

/**
 * importo el modulo que me permite enviar mensajes
 */
import { EmailComposer } from "@ionic-native/email-composer/ngx";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    //utilizo el metodo de inicializeApp de angular para inicializar mi aplicacion guardada en la variable firebaseConfig
    AngularFireModule.initializeApp(firebaseConfig),
    //incluyo dentro de los imports el modulo de autenticacion que especifique arriba
    AngularFireAuthModule,
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
