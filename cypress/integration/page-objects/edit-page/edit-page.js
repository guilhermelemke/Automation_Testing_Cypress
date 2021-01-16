const e = require('./edit-page-elements').ELEMENTS;

class EditPage {
    visitPage() {
        cy.visit('http://demo.automationtesting.in/WebTable.html');
    }

    edit() {
        cy.get(e.editButton).first().dblclick();
    }
    
    editEmail(email) {
        const field = cy.xpath(e.editEmail)
        field.clear()
        field.type(email)
    }
    
    editFirstName(firstName) {
        const field = cy.xpath(e.editFirstName)
        field.clear()
        field.type(firstName)
    }
    
    editGender(gender) {
        const field = cy.xpath(e.editGender)
        field.clear()
        field.type(gender)
    }
    
    editLastName(lastName) {
        const field = cy.xpath(e.editLastName)
        field.clear()
        field.type(lastName)
    }
    
    editPhone(phone) {
        const field = cy.xpath(e.editPhone)
        field.clear()
        field.type(phone)
    }
    
    saveEdit() {
        cy.get(e.saveEdit).first().click();
    }
    
    deleteUser() {
        cy.get(e.trashButton).first().rightclick();
        cy.get(e.deleteButton).contains('Delete').click();
    }
}

export default EditPage;