/// <reference types="Cypress" />
describe('tests to verify functionalities on application',function(){

    //On Landing Application page
    it('Test to validate check Box', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
       // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
    
    })

})