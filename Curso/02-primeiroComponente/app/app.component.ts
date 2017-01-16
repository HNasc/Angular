import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component'; //Importando classe meu-primeiro-componente
import { CursosComponent } from './cursos/cursos.component';
 
@Component({ //Adicionada tag criada através do selector
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
    `,
    directives: [MeuPrimeiroComponent, CursosComponent] //Adicionando classe como diretiva (modificando DOM)
})
export class AppComponent { }
