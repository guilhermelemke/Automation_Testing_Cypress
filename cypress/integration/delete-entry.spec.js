/// <reference types="cypress" />
import EditPage from './page-objects/edit-page/edit-page'

describe('Precisa ser revisto este campo', () => {
    it('deletar entradas', () => {
        const editPage = new EditPage();
        editPage.visitPage();
        editPage.deleteUser();
    });


});