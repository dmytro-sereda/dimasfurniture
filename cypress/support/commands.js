import "@testing-library/cypress/add-commands";

Cypress.Commands.add('addItem', (itemName) => {
    cy.contains(itemName).parent().trigger('mouseover');
    cy.contains(itemName).parent().children().invoke('show');
    cy.contains(itemName).siblings('button', {  name: /add to cart/i}).click();
});

Cypress.Commands.add('openCart', () => {
    cy.get('.cart-button').click();
});