/// <reference types="cypress" />

// email@brunoasnt.com
// 2345678

describe('Should test at a functional level', () => {
    before(() => {
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get('[data-test=email]').type('email@brunoasnt.com');
        cy.get('[data-test=passwd]').type('2345678');
        cy.get('.btn').click();
        cy.get('.toast-message').should('contain', 'Bem vindo');
    });

    it('...', () => {

    });
});
