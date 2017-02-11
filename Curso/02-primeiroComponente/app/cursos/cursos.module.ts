import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosServices } from './cursos.service';
import { CursosComponent } from './cursos.Component'

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CursosComponent ],
  exports: [ CursosComponent ],
  providers: [ CursosServices ]
})
export class CursosModule { }