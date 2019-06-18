/**
 * Me permite tener centralizado el servicio de email, tambien me permite la reutilizacion de codigo.
 */

import { Injectable } from '@angular/core';

/**
 * importo el modulo que me permite enviar mensajes
 */
import { EmailComposer } from "@ionic-native/email-composer/ngx";
import { AutorizacionService } from "../servicios/autorizacion.service";
import { promise } from 'protractor';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(public email: EmailComposer, private autorizacion : AutorizacionService) { }

  /**
   * Permite enviar un correo a jobymultiservicios con la informacion de quien solicita el servicio
   * @param nombre string que reprsenta el nombre del usuario que solicita el servicio
   * @param email string que representa el email del usuario que solicita el servicio
   * @param telefono number que representa el telefono del usuario que solicita el servicio
   * @param direccion strign que representa la direccion del usuario que solicita el servicio 
   * @param servicio string que repsernta el nombre del servicio que fue solicitado
   */
  enviarEmail(nombre: string, email: string, telefono: number, direccion: string, fecha_servicio: Date, servicio: string) {
    
      
          let correo = {
            to: "jobyServicios@gmail.com",
            cc: [],
            bcc: [],
            attachment: [],
            subject: "Solicitud de servicio",
            body: "El cliente " + nombre + " solicitu el servicio de " + servicio + ", a continuacion se presenta los datos:\n\nnomber:" + nombre + "\nEmail:" + email + "\ntelefono:" + telefono + "\ndireccion:" + direccion + "\nfecha de servicio:" + fecha_servicio + "\nnombre de servicio:" + servicio,
            isHtml: false
            //app: "Gmail"
      
          }
      
          this.email.open(correo);
          this.autorizacion.registrarServicio(nombre,email,telefono,direccion,fecha_servicio,servicio);
        
    
  }
}
