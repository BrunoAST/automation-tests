/// <reference types="cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.viewport(1920, 1080);

        cy.request('POST', 'http://joinville.reader.inovamobil.com.br:5000/api/autenticacao/login', {
            usuario: 'MASTER',
            senha: 'Sup_0419'
        }).its('body').then(res => {
            const token = res;
            cy.wrap(token).as('userToken');
        });

        // cy.visit('http://localhost:4200/login');
        // cy.get('.mat-form-field.ng-tns-c3-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        //     .type('MASTER');
        // cy.get('.mat-form-field.ng-tns-c3-3 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        //     .type('Sup_0419');
        // cy.get('.submit-button').click();

        // // cy.get('[href="/contas-e-consumo"]').invoke('removeAttr', 'target').click();

        // cy.visit('http://localhost:4200/contas-e-consumo/banco');
    });

    it('Should navigate to bank register', () => {
        cy.viewport(1920, 1080);
        cy.get('#cadastros').click();
        cy.get('#banco').click();
        // cy.get('.mat-form-field.ng-tns-c3-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        //     .type('MASTER');
        // cy.get('.mat-form-field.ng-tns-c3-3 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        //     .type('Sup_0419');
        // cy.get('.submit-button').click();

        // cy.get('[href="/contas-e-consumo"]').invoke('removeAttr', 'target').click();
        // cy.screenshot();
    });
});
