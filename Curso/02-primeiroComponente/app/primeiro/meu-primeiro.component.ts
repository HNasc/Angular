import {Component} from '@angular/core';

@Component({    //Adiciona decoretor component e meta-dados
    selector: 'meu-primeiro-componente',
    template: '<h2>Meu primeiro componente Angular 2</h2>'
})

// Classes começam com letra maiuscula e se estiver dentro de um componente a terminação é "Component".
export class MeuPrimeiroComponent {}