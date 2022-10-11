/// <reference types="Cypress" />
describe('On Landingin on Application page',function(){

   
    it('tests to verify functionalities on application', function(){
        cy.visit("http://qaclickacademy.com/practice.php")

        // test to validate alert pupop Note Cypress will auto accept alert and you can not change it
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert is an event and cypress can manage events on the DOM
        cy.on('window:alert',(str)=>
        {
            // Mocha is used to compare the string
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

       /* // test to handle child tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(10000)

        // test to validate corrently on child window
        cy.url().should('include','qaclickacademy')

        //test to Navitage back
        cy.go('back')
        */

    })
})
