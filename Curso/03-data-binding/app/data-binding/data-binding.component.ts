import { Component } from '@angular/core';

import
@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent {
    constructor() { }

    url = 'http://otavio.com';
    urlImg = 'http://lorempixel.com/400/200/';
    getValor(){
        return 1;
    }
}