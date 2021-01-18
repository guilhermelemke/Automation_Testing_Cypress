/// <reference types="cypress" />
import RegisterPage from './page-objects/register-page/register-page'

let user;

describe('Testes para a página de registro', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
    })

    it('Cadastra um novo usuário', () => {
       
        const registerPage = new RegisterPage();
        registerPage.visitPage();
        registerPage.setFirstName(user.firstName);
        registerPage.setLastName(user.lastName);
        registerPage.setAddress(user.address);
        registerPage.setEmail(user.email);
        registerPage.setPhone(user.phone);
        registerPage.setGender('FeMale');
        registerPage.setHobby(['Cricket', 'Movies']);
        registerPage.setLanguage('German');
        registerPage.setSkills('Python');
        registerPage.setCountry('Antarctica');
        registerPage.setBirthDate('1992', 'April', '5');
        registerPage.setPassword('Aa123456', 'Aa123456');

        registerPage.submit();      
    });

    it('Cadastra o mesmo usuário - email e phone repetido', () => {
        // Não funciona, precisa cadastrar duas vezes o mesmo
        const registerPage = new RegisterPage();
        registerPage.visitPage();
        registerPage.setFirstName(user.firstName);
        registerPage.setLastName(user.lastName);
        registerPage.setAddress(user.address);
        registerPage.setEmail(user.email);
        registerPage.setPhone(user.phone);
        registerPage.setGender('Male');
        registerPage.setHobby(['Cricket', 'Movies']);
        registerPage.setLanguage('German');
        registerPage.setSkills('Python');
        registerPage.setCountry('Antarctica');
        registerPage.setBirthDate('1992', 'April', '5');
        registerPage.setPassword('Aa123456', 'Aa123456');
        registerPage.submit();

        registerPage.visitPage();
        registerPage.setFirstName(user.firstName);
        registerPage.setLastName(user.lastName);
        registerPage.setEmail(user.email);
        registerPage.setPhone(user.phone);
        registerPage.setGender('Male');
        registerPage.setCountry('Antarctica');
        registerPage.setBirthDate('1992', 'April', '5');
        registerPage.setPassword('Aa123456', 'Aa123456');
        registerPage.submit();
        cy.contains('Email already exists').should('be.visible');
        cy.contains('Phone number already exists').should('be.visible');
    });

    it('Cadastra o usuário - apenas campo mandatórios', () => {
       
        const registerPage = new RegisterPage();
        registerPage.visitPage();
        registerPage.setFirstName(user.firstName);
        registerPage.setLastName(user.lastName);
        registerPage.setEmail(user.email);
        registerPage.setPhone(user.phone);
        registerPage.setGender('FeMale');
        registerPage.setCountry('Belarus');
        registerPage.setBirthDate('1992', 'April', '5');
        registerPage.setPassword('Aa123412', 'Aa123412');
        registerPage.submit();
    });
});