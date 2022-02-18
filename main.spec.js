/// <reference types="Cypress" />

describe('first test suit', () => {


    it('do teh thing v1 - buttons & banners', () =>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test-this is avoiding a clarus issue
            return false
        })

        cy.visit('/')

        cy.get('img', { includeShadowDom: true })
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));

        //confirms demo scroll bar isn't visible on initial load
        cy.get('.scroll-header').should('not.be.visible')
        //scrolls then confirms demo scroll bar is visible
        cy.get('[class="plyr__control plyr__control--overlaid"]').scrollIntoView()
        cy.get('.scroll-header').should('be.visible')
        //dismiss cookie
        cy.get('[aria-label="dismiss cookie message"]').click()

        //Check buttons text as well as href/links
        cy.get('#banner-button')
        .should('have.attr', 'href', '/h2h-22')
        .should('have.text', 'Learn more')

        cy.get('.--signupForm > .btn')
        .should('have.attr', 'href', '//app.companycam.com/signup')
        .should('have.text', 'Get started today')

        cy.get('[class="mini-feature-block mini-feature-block--card"]').eq(0)
        .should('have.attr', 'href', '/snap')

        cy.get('.col-xs-12 > .btn')
        .should('have.attr', 'href', '/demo')
        .should('have.text', 'Schedule a walkthrough')


    })

    it('do teh thing v2 - dropdown' , () =>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test-this is avoiding a clarus issue
            return false
        })

        cy.visit('/')
       
        cy.get('.masthead').contains('Solutions').click()
        cy.get('.active > .nav-dropdown__menu > .menu--primary').should('be.visible')
        cy.get('[href="/sync"] > .menu-link__title > .menu-link__text > p').should('have.text','Keep your entire team on the same page.' )
        
        cy.get(':nth-child(5) > .container > .pb2-col').contains('Snap')
        cy.get(':nth-child(5) > .container > .pb2-col').contains('Store')
        cy.get(':nth-child(5) > .container > .pb2-col').contains('Sync')
        cy.get(':nth-child(5) > .container > .pb2-col').contains('Share')
        // checks text content as well as href/link
        cy.contains('Resources').click()
        cy.get('[class="nav-dropdown__menu"]')
        .children()
        .contains('Schedule a Walkthrough')
        .should('have.attr', 'href', '/demo')
        cy.get('[class="nav-dropdown__menu"]')
        .children()
        .contains('Integrations')
        .should('have.attr', 'href', '/partners/network?q=integrations')
   
        cy.wait(2000)


    })

    it('do teh thing v3 - vid', () =>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test-this is avoiding a clarus issue
            return false
        })

        cy.visit('/')

        cy.get('[class="plyr__control plyr__control--overlaid"]').click()
        cy.wait(2000)
        cy.get('[class="plyr__time"]')
        .should('be.hidden')
        .invoke('text')
        .then(parseFloat).should('be.gte', 0)
        cy.get('[class="plyr__control plyr__control--overlaid"]').click({force: true})

        cy.reload()
    
    })
  


    it.only('do teh thing v4 - mobile', () =>{
        cy.visit('/')

        cy.viewport('iphone-x')

        //dismiss cookie
        cy.get('[aria-label="dismiss cookie message"]').click()

        cy.menuClick()
        cy.get('#navigation > ul')
        .contains('Sign in')
        //custom commands to click the menu button, also checks form and signup button href
        cy.checkSignup()
        cy.menuClick()
        cy.formSignup()

        //Checks first card for text
        cy.get('[class="cs-card"]').eq(0)
        .scrollIntoView()
        .contains('We’ve saved over $100,000.')
        //Checks last card for link/href
        cy.get('[class="cs-card"]').eq(2)
        .scrollIntoView()
        .should('have.attr', 'href', 'https://companycam.com/case-studies/bk-restoration')
        //scrolls to email input
        cy.get('[name="Email"]').scrollIntoView()
        .type('thasallfolks@gmail.com')
        cy.get('.mktoButton').trigger('mouseover')

   
    })
    
}) 