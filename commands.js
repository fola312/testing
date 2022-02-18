// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('menuClick', () => {
    cy.get('.menu-btn').click()

  })

  Cypress.Commands.add('checkSignup', () => {
    cy.get('.global-nav-button > .btn')
    .should('have.attr', 'href', 'https://app.companycam.com/signup' )

  })
  
  Cypress.Commands.add('formSignup', () => {
   cy.get('.--signupForm > .btn')
        .should('have.attr', 'href', '//app.companycam.com/signup')
        .should('have.text', 'Get started today')

  })



