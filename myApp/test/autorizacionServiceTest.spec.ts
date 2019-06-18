import { Router } from "@angular/router";
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AutorizacionService } from "../src/app/servicios/autorizacion.service";

const autorizacion = require('../src/app/servicios/autorizacion.service.ts');

describe('Test del los servicio de autorizacion', () => {

    it('deberia realizar el login', () => {
        //let autorizacion = new AutorizacionService(AngularFireAuth,Router,AngularFirestore);
        expect(autorizacion.login('daniel@gmail.com','123456')).not.toBeNull();
    })

});
