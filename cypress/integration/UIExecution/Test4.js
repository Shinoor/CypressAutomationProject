/// <reference types="Cypress" />
describe('tests to verify functionalities on application',function(){

    //On Landing Application page
    it('Test to validate check Box', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        //test validate 'price 25' on the table
        cy.get('tr td :nth-child(2)').each(($el, index, $list)=>{

            const text = $el.text()
            if (text.includes("Python")) {    
            
            cy.get("tr td :nth-child(2)").eq(index).next().then(function(price){
                  const priceText= price.text()
                  expect(priceText).to.equal('26')
            })
        }
    })
})
})