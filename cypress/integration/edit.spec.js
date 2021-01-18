/// <reference types="cypress" />
import EditPage from './page-objects/edit-page/edit-page'

let user;

describe('Testes da página de edit', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
    })

    it('Editar uma entrada', () => {
        const editPage = new EditPage();
        editPage.visitPage();
        editPage.edit();
        editPage.editEmail(user.email);
        editPage.editFirstName(user.firstName);
        editPage.editGender('FeMale');
        editPage.editLastName(user.lastName);
        editPage.editPhone(user.phone);
        editPage.saveEdit();
    });


});