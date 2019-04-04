import { Heroe } from './../../clases/heroe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Datos } from './../datos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  miHeroe: Heroe;
  @Output() cargar = new EventEmitter<Heroe>();
  constructor() {
    this.miHeroe = new Heroe();
  }
  public logear()
  {
    console.log(this.miHeroe);
    this.cargar.emit(this.miHeroe);
  }

  ngOnInit() {
    //console.log(this.miHeroe);

  }

}
