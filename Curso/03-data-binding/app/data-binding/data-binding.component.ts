import { Component } from '@angular/core';


import { InputPropertyComponent } from './input-property.component'
@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.component.html',
    /*styles: [
        `
        .highlight{
            background-color: yellow;
            font-weight: bold;
        }
        `
    ]*/
    styleUrls: ['data-binding.component.css'],
    directives: [InputPropertyComponent]
})
export class DataBindingComponent {
    constructor() { }

    url = 'http://otavio.com';
    urlImg = 'http://lorempixel.com/400/200/';

    conteudoAtual : string = '';
    conteudoSalvo : string = '';

    isMouseOver = false;

    nome : string = 'abc';

    pessoa = {nome: '', idade: 18};

    getValor(){
        return 1;
    }

    onClick(){
        alert('Botão clicado!');
    }
    onKeyup(event:KeyboardEvent){
        console.log(event);
        this.conteudoAtual = event.target.value;

    }
    onSave(valor : string){
        this.conteudoSalvo = valor;
    }
    onMouseSpan(){
        this.isMouseOver = !this.isMouseOver;
    }
}