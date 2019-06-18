import { Component, OnInit } from '@angular/core';

/**
 * Importo la clase de AutorizacionService que creamos anteriormente en la carpeta de servicios para poder utilizarla
 */
import { AutorizacionService } from "../servicios/autorizacion.service";

/**
 * Importamos desde angular el router que permite la navegacion
 */
import { Router } from "@angular/router";
import { auth } from 'firebase';

/**
 * importo el servicio que creamos de email
 */
import { EmailService } from "../servicios/email.service";



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //Variables que me ayudaran a capturar los valores de email y password
  nombre : string;
  email : string;
  telefono: number;
  direccion: string;
  fecha_servicio: Date;
  servicio: string;

  constructor(private autorizacionService : AutorizacionService, public router : Router, private emailService : EmailService){}
  
  /**
   * Metodo que llama al metodo principal de log out
   */
  onLogOut(){

    /**
     * utilizo el objeto de autorizacion de servicio para acceder al metodo de logout
     */
    this.autorizacionService.logOut();

  }

  /**
   * Metodo que se encarga de enviar el servicio
   */
  enviarServicio(){
    /**
     * validacion de los datos
     */
    if((this.nombre==null) || (this.email == null) || (this.telefono==null) || (this.direccion==null) || (this.fecha_servicio == null) || (this.servicio==null))
    {
      alert('Faltan campos por llenar');
    }else{
      this.emailService.enviarEmail(this.nombre, this.email, this.telefono, this.direccion,this.fecha_servicio,this.servicio);
      this.limpiarCampos();
    }
    
    
  }

  /**
   * Metodo que se encarga de limpiar los campos
   */
  limpiarCampos(){
    this.nombre = null;
    this.fecha_servicio = null;
    this.telefono = null;
    this.email = null;
    this.servicio = null;
    this.direccion = null; 
  }

    
  
}
