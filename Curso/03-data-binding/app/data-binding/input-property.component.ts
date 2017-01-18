import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'curso',
    templateUrl: '{{ nomeCurso }}'
})
export class InputPropertyComponent{
    
    @Input() nomeCurso : string = '';

    constructor() { }

}