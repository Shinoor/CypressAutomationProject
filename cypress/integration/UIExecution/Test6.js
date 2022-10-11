/// <reference types="Cypress" />
describe('tests to verify functionalities on application',function(){

    //On Landing Application page
    it('Test handle multiple tab', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

    // use jquery .prop() to get href value
        cy.get('#opentab').then(function(el){

            const url = el.prop('href')
            cy.log(url)
            // url grab (https://www.rahulshettyacademy.com/)




            
        })

    })
})