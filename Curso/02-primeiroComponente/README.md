# Criando um Componente

## Descrição
Projeto destinado a criação do primeiro componente.


## Conceitos

### •Criando um novo componente no Angular - CIDAR

  1. Class (Criar a classe)
  2. Import
  3. Decorate (Decorar a classe)
  4. Alterar (add meta-dados necessarios)
  5. Repetir (até criar todos componentes)

### •Interpolação - Inserir uma variável dentro do Template
_Exemplo:_
```ts
@Component({
        selector: 'cursos-lista',
        template: `
            <h3>Olá, meu nome é {{ nome }}</h3>
        ` 
    })
    export class CursosComponent {
            nome = 'Otavio'; //variavel
    }
```

### •Sempre que referenciar uma url de template (templateUrl) deve ser adicionado o _moduleId_.
_Exemplo:_
```ts
    @Component({
        moduleId: module.id, //Sem esse cara, o arquivo referenciado no templateUrl não é chamado
        selector: 'cursos-lista',
        templateUrl: 'cursos.component.html'
    })
```
