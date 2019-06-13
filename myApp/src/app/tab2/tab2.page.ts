import { Component } from '@angular/core';

/**
 * Importamos desde angular el router que permite la navegacion
 */
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

constructor(public router : Router){}

/**
 * Permite redireccionar al Tab3
 */
redireccionarTab3(){
  this.router.navigate(['tabs/tab3']);
}




}
