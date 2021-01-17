/// <reference types="cypress" />
import EditPage from './page-objects/edit-page/edit-page'

describe('Testes da pagina de Edit', () => {
    it('Deleta um usuário', () => {
        const editPage = new EditPage();
        editPage.visitPage();

        cy.intercept('DELETE', '/databases').as('deleteUser');
        
        editPage.deleteUser();

        cy.wait('@deleteUser')
        cy.get('@deleteUser').then(req => {
            expect(xhr.response.statusCode).to.eq(200);
        })
    });
});