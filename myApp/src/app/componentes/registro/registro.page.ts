import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from "../../servicios/autorizacion.service";
import { auth } from 'firebase';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public nombre : string;
  public genero_usuario : string;
  public fecha_nacimiento : Date;
  public direccion : string;
  public telefono : number;
  public tipo_usuario : string;
  public email : string;
  public password : string;

  constructor(private autorizacion : AutorizacionService, private router : Router) { }

  ngOnInit() {
  }

  /**
   * metodo que permite activar el metodo principal de registro
   */
  
  onSubmitRegister(){

    /**
     * Se validan los campos que no esten vacios para poder realizar el registro
     */
    if((this.nombre == null) || (this.genero_usuario == null) || (this.direccion == null) || (this.telefono == null) || (this.tipo_usuario == null) || (this.fecha_nacimiento == null) || (this.email == null) || (this.password == null))
    {
      alert('Faltan campos por llenar');
    } else{
      this.autorizacion.register(this.nombre, this.genero_usuario, this.fecha_nacimiento, this.direccion, this.telefono, this.tipo_usuario, this.email, this.password).then( auth => {
        this.router.navigate(['tabs/tab3']);        
      }).catch(err => alert('Este correo electronico ya esta registrado'));
    }    
  }

   /**
   * Permite regresar a la pagina de login
   */
  regresar() {
    this.router.navigate(['login']);
  }

  

  
}
