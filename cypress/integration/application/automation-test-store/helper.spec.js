/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = { name: 'Jon', age: 20 };

        expect(obj).to.have.property('name');
        // Error
        // expect(obj).should.have.property('age');
        cy.wrap(obj).should('have.property', 'name');
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#formNome').then($el => {
            cy.wrap($el).type('Typed via cypress');
        });

        // Assertions with async object between then.
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(10), 500);
        });

        cy.get('#buttonSimple').then(() => console.log('First execution'));
        cy.wrap(promise).then(res => console.log(res));
        cy.get('#buttonList').then(() => console.log('Second execution'));
    });

    it('Its...', () => {
        const obj = { name: 'Jon', age: 20 };

        cy.wrap(obj).should('have.property', 'name', 'Jon');
        cy.wrap(obj).its('name').should('be.equal', 'Jon');

        const obj2 = { name: 'Jon', age: 20, address: { street: 'Street 1' } };
        cy.wrap(obj2).its('address').should('have.property', 'street');
        cy.wrap(obj2).its('address').its('street').should('contain', 'Street 1');
        cy.wrap(obj2).its('address.street').should('contain', 'Street 1');

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.title().its('length').should('be.equal', 20);
    });

    it.only('Invoke...', () => {
        const getValue = () => 1;
        const add = (a, b) => a + b;

        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1);
        cy.wrap({ fn: add }).invoke('fn', 2, 5).should('be.equal', 7);

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#formNome').invoke('val', 'Typed via Invoke');

        cy.window().invoke('alert', 'Invoking alert');

        cy.get('#resultado').invoke('html', '<input type="button" value="hacked!" />');
    });
});
