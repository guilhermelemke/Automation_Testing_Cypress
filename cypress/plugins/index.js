
/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const faker = require("faker");

module.exports = (on, config) => {
  on("task", {
    freshUser() {
      user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.random.number({min: 1000000000, max: 9999999999, precision: 1}),
        address: faker.address.streetAddress(),
        password: "newPassword"
      };
      return user;
    }
  });
}