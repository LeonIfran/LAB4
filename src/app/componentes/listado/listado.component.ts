import { Datos } from './../datos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  midato;
  listado;
  constructor() {
     this.midato = new Datos();
     this.listado = this.midato.lista;
  }

  ngOnInit() {
  }
/*  listado:Array<Object>[
   id:string,
  nombre:"",
  sexo:["masculino", "femenino", "otro"],
  poder:"",
  terreno:["tierra", "aire", "agua", "fuego"],
]; */


}
