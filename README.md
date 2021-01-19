# Automação da Página de cadastro do Site: http://demo.automationtesting.in/Register.html
# Automação da Página de edição do Site: http://demo.automationtesting.in/WebTable.html

O projeto foi desenvolvido utilizando Cypress e o padrão Page Objects. Com o uso da biblioteca faker para criação de dados.

## Objetivo

Testar as funcionalidades dos sites nos seguintes cenários:
* Cadastro de usuário
* Edição de usuário
* Exclusão de usuário

## Pré requisitos para rodar o projeto:

* Node versão 10 ou superior

## Como rodar o projeto:

* Clone esse repositório:  
```git clone https://github.com/guilhermelemke/Automation_Testing_Cypress.git ```  
```cd Automation_Testing_Cypress ```
* Instale as dependências do projeto:  
```npm install ```
* Ative o Cypress:  
```npm run cypress:open ```

## Testes - integration/ :

* Executa os testes de cadastro de usuários no site:   
```register.spec.js ```
* Executa os testes de edição de conta no site:   
```edit.spec.js ```
* Executa os testes de deleção de contas no site:
```delete-entry.spec.js ```