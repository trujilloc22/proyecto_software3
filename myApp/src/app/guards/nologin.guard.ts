/**
 * Este Guard me permitira restringir el paso o navegacion hacia el login
 * una vez ya se este logeado.
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
export class NologinGuard implements CanActivate {

  constructor(private AFautenticacion : AngularFireAuth,
    private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      return this.AFautenticacion.authState.pipe(map(auth =>{
        
        if(isNullOrUndefined(auth)){
                    
          return true;

        } else{

          this.router.navigate(['tabs/tab1']);
          return false;
          
        }


      }))

  }
  
}
