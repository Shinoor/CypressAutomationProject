/// <reference types="Cypress" />
describe('On Landingin on Application page',function(){

    //tests to verify functionalities on application
    it('Test to validate check Box', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get(' input[type="checkbox"]').check(['option2','option3'])

    //test Static Dropdown        
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

    //test Dynamic Dropdown
    cy.get('#autocomplete').type('am')
    cy.get('.ui-menu-item div').each(($el,index,$list) =>{
        if($el.text()==="American Samoa"){
            $el.click()
        }

    })
    
    cy.get('#autocomplete').should('have.value','American Samoa')

    // test to verify element displayed
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    // test to select the radio buttons on the application
    cy.get('[value="radio2"]').check().should('be.checked')



    })
})