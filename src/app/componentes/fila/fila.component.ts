import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit, Input {
  @Input() objeto : object;
  constructor() { }

  ngOnInit() {
  }

}
