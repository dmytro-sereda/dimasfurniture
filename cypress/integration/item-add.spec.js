/// <reference types="Cypress" />

describe('Item Purchase', () => {
    beforeEach(() => {
        // load the page
        cy.visit('/');

        // get total
        cy.get('[data-cy="total-value"]').as('totalValue');
    });

    it('user can travel to the needed section and add items to cart', () => {
        // click the go shopping button
        cy.findByRole('button', {  name: /go shopping/i}).click();
        
        // select the category
        cy.findByRole('link', {  name: /chairs/i}).click();
        
        // hover over item 1
        cy.contains(/white wolf/i).parent().trigger('mouseover');
        
        // add item 1
        cy.contains(/white wolf/i).siblings('button', {  name: /add to cart/i}).click().click();
        
        // hover over another item 2
        cy.contains(/comfy triangle/i).parent().trigger('mouseover');
        cy.contains(/comfy triangle/i).parent().children().invoke('show');
        
        // add another item 2
        cy.contains(/comfy triangle/i).siblings('button', {  name: /add to cart/i}).click();
        
        // open cart
        cy.openCart();
        
        // check the total
        let expectedTotal = 0;
        cy.get('.cart-item').each(($el) => {
            let quantity, price;
            cy.wrap($el).within(() => {
                cy.get('.item-quantity').then($item => quantity = +$item.text());
                cy.get('.item-price').then($item => price = +$item.text().replace(/\$/g, '')).then(() => expectedTotal += quantity * price);
            });
        });
        cy.get('@totalValue').then($total => {
            const total = +$total.text()
            expect(total).to.equal(expectedTotal);
        });
        
        // click order button
        cy.findByRole('button', {  name: /order/i}).click();
    })

    it('can delete item from cart', () => {
        // go to shop
        cy.contains('a', /shop/i).click();
        
        // add item to cart
        cy.contains(/white wolf/i).siblings('button', {  name: /add to cart/i}).click();

        // open cart
        cy.openCart();

        // delete item
        cy.get('.cart-item').contains(/white wolf/i).siblings('.delete-btn').click();

        // check if the cart is empty
        cy.get('.items-container').should('be.empty');

        // check if the total is 0
        cy.get('@totalValue').invoke('text').should('equal', '0');

        // close cart
        cy.findByText(/✕/i).click();
    })
})