/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Frame Tests',function(){

    //On Landing Application page
    it('Switch Frame', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        cy.iframe().find("h1[class*='pricing-title']").should('have.length',0)

})
})
