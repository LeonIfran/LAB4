import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { FilaComponent } from './componentes/fila/fila.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    GrillaComponent,
    FilaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
