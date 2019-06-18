/**
 * Me permite mantener el servicio de autorizacion del login de la app
 */

import { Injectable } from '@angular/core';

/**
 * importo desde angular el AngularFireAuth
 */
import { AngularFireAuth } from "@angular/fire/auth"
import { promise } from 'protractor';
import { auth } from 'firebase';
import { Router } from "@angular/router";
import { resolve } from 'dns';

/**
 * Importamos desde los modulos de firebase la base de datos que es firestore
 */
import { AngularFirestore } from "@angular/fire/firestore";
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  constructor(private AFautorizacion : AngularFireAuth, private router : Router, private basedatos : AngularFirestore) { }

  /**
   * Metodo del login
   */
  login(email: string, password: string){

    /**
     * Una promesa es un tipo de retorno que permite retornar un resultado positivo(resolve)
     * o uno negativo (rejected). en este caso vamos a retornar una promesa para el proceso
     * de autenticacion. 
     * 
     */
    return new Promise((resolve,rejected)=>{

      /** 
       * utilizo AFautorizacion para acceder a los metodos que me proporciona FireBase,
       * en este caso utilizo de auth el metodo de iniciar sesion por medio de contraseña y password
       * entonces ese metodo puede retornarme dos cosas, un error que lo capturo y lo encapsulo en el 
       * rejected, o una respuesta positiva que lo encapsulo dentro de resolve
      */
      this.AFautorizacion.auth.signInWithEmailAndPassword(email,password).then(user =>{
        resolve(user);
      }).catch(err => rejected(err));

    });
    
    
  }

  /**
   * Metodo que permite el log out o desconectarse de la aplicacion
   */
  logOut(){

    /**
     * Utilizo los metodo que me suministra AFautorizacion desde el firebase
     */
    this.AFautorizacion.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  /**
   * Metodo que permite realizar el registro en la base de datos de firebase
   
  register(email : string, password : string){
    
    return new Promise((resolve,reject) => {
      this.AFautorizacion.auth.createUserWithEmailAndPassword(email, password).then(res => {
        resolve(res)
      }).catch(err => reject(err));

    })
    
    
  }
  */

  /**
   * Metodo que permite realizar el registro completo de un usuario en la base de datos de firebase
   * @param nombre string que reprsenta el nombre del usuario
   * @param genero string que representa el genero del usuario:(masculino-femenino)
   * @param edad Date que representa la fecha de nacimiento del usuario
   * @param direccion strign que representa la direccion del usuario
   * @param telefono number que representa el telefono del usuario
   * @param tipo_suario string que representa el tipo de usuario:(cliente-JobyTrabajador)
   * @param email string que representa el email del usuario
   * @param password string que representa el password del usuario
   */ 
 register(nombre : string, genero : string, edad : Date, direccion : string, telefono : number, tipo_suario: string, email : string, password : string){
  return new Promise((resolve,reject) => {
    this.AFautorizacion.auth.createUserWithEmailAndPassword(email, password).then(res => {

      const uid = res.user.uid;     
      this.basedatos.collection('usuarios').doc(uid).set({
        uid: uid,
        nombre: nombre,
        genero: genero,
        edad: edad,
        direccion: direccion,
        telefono: telefono,
        tipo_suario: tipo_suario,
        email: email,
        password: password

      })
            
      resolve(res)
    }).catch(err => reject(err));

  })
}

/**
 * Metodo que permite registrar un servicio en la base datos
 * @param nombre string que reprsenta el nombre del usuario que solicita el servicio
 * @param email string que representa el email del usuario que solicita el servicio
 * @param telefono number que representa el telefono del usuario que solicita el servicio
 * @param direccion strign que representa la direccion del usuario que solicita el servicio
 * @param fecha_servicio Date que representa la fecha de en la que se necesta el servicio solicitado
 */
registrarServicio(nombre : string, email: string, telefono : number, direccion: string, fecha_servicio : Date, servicio : string){
  
  this.basedatos.collection('servicios').doc(email+"-"+fecha_servicio).set({
    nombre: nombre,
    email: email,
    telefono: telefono,
    direccion: direccion,
    fecha_servicio: fecha_servicio,
    nombre_servicio: servicio
  })

}
  
  
}
