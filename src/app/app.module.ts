import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { CentroComponent } from './centro/centro.component';
import { ListaprofessorComponent } from './listaprofessor/listaprofessor.component';
import { ListacursoComponent } from './listacurso/listacurso.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    CentroComponent,
    ListaprofessorComponent,
    ListacursoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
