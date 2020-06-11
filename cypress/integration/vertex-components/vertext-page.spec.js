/* eslint-disable no-undef */
describe('Vertex UI', () => {
    it('Should return', () => {
        cy.visit('/');
        cy.get('button').should('be.exist');
    });

    it('Should add a playlist videos', () => {
        cy.visit('/');
        cy.get('[data-cy="input"]').type('Michael Jackson', { force: true });
        cy.get('[data-cy="submit"]').click({ force: true });
        cy.get('[data-cy="list-videos"]').should('to.have.length', 1);
    });
});
