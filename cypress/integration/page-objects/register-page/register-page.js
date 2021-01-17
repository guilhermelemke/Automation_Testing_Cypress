const e = require('./register-page-elements').ELEMENTS

class RegisterPage {
    visitPage() {
        cy.visit('http://demo.automationtesting.in/Register.html');
    }

    
    setFirstName(firstName) {
        const field = cy.get(e.inpFirstName);
        field.clear();
        field.type(firstName);
    }

    setLastName(lastName) {
        const field = cy.get(e.inpLastName);
        field.clear();
        field.type(lastName);
    }

    setAddress(address) {
        const field = cy.get(e.inpAddress);
        field.clear();
        field.type(address);
    }

    setEmail(email) {
        const field = cy.get(e.inpEmail);
        field.clear();
        field.type(email);
    }

    setPhone(phone) {
        const field = cy.get(e.inpPhone);
        field.clear();
        field.type(phone);
    }

    setGender(gender) {
        cy.get(`[value="${gender}"]`).check();
    }

    setHobby(hobby) {
        cy.get(e.inpHobby).check(hobby);
    }

    setLanguage(language) {
        cy.get(e.inpLanguage).click().get('a').contains(language).click()
        cy.get('body').click();
    }

    setSkills(skill) {
        cy.get(e.inpSkills).select(skill);
    }

    setCountry(country) {
        cy.get(e.inpCountry).select(country);
    }

    setBirthDate(year, month, day) {
        cy.get(e.inpYear).select(year);
        cy.get(e.inpMonth).select(month);
        cy.get(e.inpDay).select(day);
    }

    setPassword(password1, password2) {
        cy.get(e.inpPassword1).type(password1);
        cy.get(e.inpPassword2).type(password2);
    }

    submit() {
        cy.get(e.submit).click()
    }
}

export default RegisterPage;