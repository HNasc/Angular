import { Component } from '@angular/core';


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
    styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent {
    constructor() { }

    url = 'http://otavio.com';
    urlImg = 'https://www.jotform.com/resources/assets/logo/min/jotform-logo-orange-400x200.png';

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