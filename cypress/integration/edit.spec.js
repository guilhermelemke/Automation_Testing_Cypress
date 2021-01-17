/// <reference types="cypress" />
import EditPage from './page-objects/edit-page/edit-page'

describe('Testes da página de edit', () => {
    it('Editar uma entrada', () => {
        const editPage = new EditPage();
        editPage.visitPage();
        editPage.edit();
        editPage.editEmail('porta@verde.com');
        editPage.editFirstName('Newname');
        editPage.editGender('FeMale');
        editPage.editLastName('Newlastneme');
        editPage.editPhone('9563215674');
        editPage.saveEdit();
    });


});