import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-segunda-pantalla',
templateUrl: './segunda-pantalla.page.html',
styleUrls: ['./segunda-pantalla.page.scss'],
})
export class SegundaPantallaPage implements OnInit {

private dni:any;
private iban:any;
/*
Esta página recibe parámetros de la anterior dentro de 'queryParams'
Cargo sobre atributos de la clase los valores pasados como parámetros.
El parámetro 'user' se pasó en formato JSON. Lo parseo para obtener un objeto.
*/
constructor(private activatedRoute: ActivatedRoute) {
this.activatedRoute.queryParams.subscribe(params => {
this.dni = JSON.parse(params["dni"]);
this.iban = JSON.parse(params["iban"]);
console.log(this.dni);
});
}

ngOnInit() {
console.log(this.dni);
}

}
