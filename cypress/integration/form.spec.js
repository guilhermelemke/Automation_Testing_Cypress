/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.get('[ng-model="FirstName"]').type('Angus');
        cy.get('[ng-model="LastName"]').type('Young');
        cy.get('[ng-model="Adress"]').type('No Name Street, 1');
        cy.get('[ng-model="EmailAdress"]').type('test.email@mail.io');
        cy.get('[ng-model="Phone"]').type('1234567890');
        cy.get('[value="Male"]').click();
        cy.get('#checkbox1').click();
        cy.get('#msdd').click().get('a').contains('German').click().get('body').click();
        cy.get('#Skills').select('Python');
        cy.get('#countries').select('Antarctica');
        //cy.get('.select2-selection').select('Antarctica');
        cy.get('#select2-country-container').click().get('Japan').click();

        //routing
        //start server com cy.server()
        //criar uma rota com cy.route()
        //atribuir rota a um alias
        //esperar com cy.wait

    })

    it('deve poder realizar um login no sistema', () => {

    });
});