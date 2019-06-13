/**
 * Este es un Guard, el cual me permite o restringe la entrada y
 * navegacion entre paginas.
 * 
 * Este Guard no permitira mostrar el tab3(solicitar servicio) a menos que 
 * este logeado, de lo contrario lo redireccionara al login para que inicie
 * sesion.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

/**
 * Importamos desde FireBase la clase AngularFiteAuth, la cual me otorga varios metodos
 * entre ellos el que me permite saber si el usuario esta autenticado
 */
import { AngularFireAuth } from "@angular/fire/auth";
import { isNullOrUndefined } from 'util';

/**
 * Importamos la Router desde angular para poder redireccionar la autenticacion
 */
import { Router } from "@angular/router";





@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(private AFautenticacion : AngularFireAuth,
              private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      return this.AFautenticacion.authState.pipe(map(auth =>{
        
        if(isNullOrUndefined(auth)){
          
          this.router.navigate(['/login']);
          return false;
          
        } else{
          
          return true;

        }


      }))

      
      

    
  }
  
}
