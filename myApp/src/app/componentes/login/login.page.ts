import { Component, OnInit } from '@angular/core';

/**
 * Importo la clase de AutorizacionService que creamos anteriormente en la carpeta de servicios para poder utilizarla
 */
import { AutorizacionService } from "../../servicios/autorizacion.service";

/**
 * Importamos desde angular el router que permite la navegacion
 */
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Variables que me ayudaran a capturar los valores de email y password
  email: string;
  password: string;

  constructor(private autorizacionService: AutorizacionService, public router: Router) { }

  ngOnInit() {
  }

  /**
   * Metodo que me permite hacer el login en el tab3
   */
  onSubmitLogin() {

    /**
     * Lo que hago es capturar el retorno del metodo login, si hay respuesta positivo utilizo
     * el router para navegar a la pagina home(tab1), y si ocurre un error genero una alerta.
     */

    this.autorizacionService.login(this.email, this.password).then(res => {
      this.router.navigate(['tabs/tab3']);
    }).catch(err => alert('los Datos son incorrectos o no existe el usuario'));




  }

  /**
   * Permite regresar a la pagina de home
   */
  regresar() {
    this.router.navigate(['tabs/tab1']);
  }





}
