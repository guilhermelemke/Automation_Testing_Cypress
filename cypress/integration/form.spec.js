/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        /*
        Select Country não está funcionando, não dá para dar select nos options
        */
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.get('[ng-model="FirstName"]').type('Angus');
        cy.get('[ng-model="LastName"]').type('Young');
        cy.get('[ng-model="Adress"]').type('No Name Street, 1');
        cy.get('[ng-model="EmailAdress"]').type('testaa.emwaia@mail.io');
        cy.get('[ng-model="Phone"]').type('1513105014');
        cy.get('[value="Male"]').check();
        cy.get('#checkbox1').click();
        cy.get('#msdd').click().get('a').contains('German').click().get('body').click();
        cy.get('#Skills').select('Python');
        cy.get('#countries').select('Antarctica');
        //cy.get('.select2-container').click().select('Japan');
        cy.get('[placeholder="Year"]').select('1990');
        cy.get('[placeholder="Month"]').select('April');
        cy.get('[placeholder="Day"]').select('10');
        cy.get('#firstpassword').type('123A#a');
        cy.get('#secondpassword').type('123A#a');
        
        cy.get('#submitbtn').click()

    })

    it('editar entrada de dados', () => {
        cy.visit('http://demo.automationtesting.in/WebTable.html');
        cy.get('.fa-pencil').first().dblclick();
        cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[1]/div[2]/input').clear().type('new@ameial.ma')
        cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[2]/div[2]/input').clear().type('Alvin')
        cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[3]/div[2]/input').clear().type('Male')
        cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[4]/div[2]/input').clear().type('Esquilo')
        cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[5]/div[2]/input').clear().type('5123654521')

        cy.get('save-click').first().click();

    });

    it('deletar entradas', () => {
        cy.visit('http://demo.automationtesting.in/WebTable.html');
        cy.get('.fa-trash-o').first().rightclick();
        
        cy.get('.btn-danger').contains('Delete').click();

    });
});

