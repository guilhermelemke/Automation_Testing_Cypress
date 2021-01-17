/// <reference types="cypress" />
import RegisterPage from './page-objects/register-page/register-page'

describe('Testes para a página de registro', () => {
    it('Cadastra um novo usuário', () => {
       
        const registerPage = new RegisterPage();
        registerPage.visitPage();
        registerPage.setFirstName('Harry');
        registerPage.setLastName('Ford');
        registerPage.setAddress('Estrada Longa');
        registerPage.setEmail('mgoasdg@gmail.com');
        registerPage.setPhone('8423748295');
        registerPage.setGender('Male');
        registerPage.setHobby(['Cricket', 'Movies']);
        registerPage.setLanguage('German');
        registerPage.setSkills('Python');
        registerPage.setCountry('Antarctica');
        registerPage.setBirthDate('1992', 'April', '5');
        registerPage.setPassword('Aa123456', 'Aa123456');
        registerPage.submit();
    });

    it.only('Cadastra o mesmo usuário - email e phone repetido', () => {
       
        const registerPage = new RegisterPage();
        registerPage.visitPage();
        registerPage.setFirstName('Harry');
        registerPage.setLastName('Ford');
        registerPage.setAddress('Estrada Longa');
        registerPage.setEmail('mgoasdg@gmail.com');
        registerPage.setPhone('8423748295');
        registerPage.setGender('Male');
        registerPage.setHobby(['Cricket', 'Movies']);
        registerPage.setLanguage('German');
        registerPage.setSkills('Python');
        registerPage.setCountry('Antarctica');
        registerPage.setBirthDate('1992', 'April', '5');
        registerPage.setPassword('Aa123456', 'Aa123456');
        registerPage.submit();
        cy.contains('Email already exists').should('be.visible');
        cy.contains('Phone number already exists').should('be.visible');
    });
    // it('editar entrada de dados', () => {
    //     cy.visit('http://demo.automationtesting.in/WebTable.html');
    //     cy.get('.fa-pencil').first().dblclick();
    //     cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[1]/div[2]/input').clear().type('new@ameial.ma')
    //     cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[2]/div[2]/input').clear().type('Alvin')
    //     cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[3]/div[2]/input').clear().type('Male')
    //     cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[4]/div[2]/input').clear().type('Esquilo')
    //     cy.xpath('//html/body/section/div[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div[5]/div[2]/input').clear().type('5123654521')

    //     cy.get('save-click').first().click();

    // });

    // it('deletar entradas', () => {
    //     cy.visit('http://demo.automationtesting.in/WebTable.html');
    //     cy.get('.fa-trash-o').first().rightclick();
        
    //     cy.get('.btn-danger').contains('Delete').click();

    // });
});

