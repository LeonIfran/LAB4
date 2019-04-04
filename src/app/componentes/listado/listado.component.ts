import { Heroe } from './../../clases/heroe';
import { Datos } from './../datos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  midato;
  listado: Array<Heroe>;
  constructor() {
     this.midato = new Datos();
     this.listado = this.midato.lista;
  }
  public cargar(dato: Heroe)
  {
    console.log(dato);
    this.listado.push(dato);
  }
  ngOnInit() {
  }



}
