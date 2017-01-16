import { Component } from '@angular/core'

import { CursosServices } from './cursos.service'
@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    /*template: `
        <h3>Cursos {{ nomePortal }}</h3>
        <ul>
            <li *ngFor="let curso of cursos">
            {{ curso }}
            </li>
        </ul>
    ` */
    templateUrl: 'cursos.component.html',
    providers: [CursosServices] //Fornecendo uma instancia da classe CursoService para a classe CursosComponent
})
export class CursosComponent {
    
        nomePortal = 'Otavio.traning';
        cursos;
        
        constructor(cursosServices: CursosServices){
            this.cursos = cursosServices.getCursos();
        }
}