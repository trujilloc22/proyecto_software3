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



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //Variables que me ayudaran a capturar los valores de email y password
  email : string;
  password : string;

  constructor(private autorizacionService : AutorizacionService, public router : Router){}
  
  /**
   * Metodo que llama al metodo principal de log out
   */
  onLogOut(){

    /**
     * utilizo el objeto de autorizacion de servicio para acceder al metodo de logout
     */
    this.autorizacionService.logOut();

  }

    
  
}
