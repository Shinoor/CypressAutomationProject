
/*
/// <reference types="Cypress" />

import { data } from "cypress/types/jquery"

describe('TestSuite',function(){

    before(function(){

        // run once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })       
    })

    //On Landing Application page
    it('FirstTest Case', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //'form input.form-control:nth-child(1)'
        //'input[name="name"]:nth-child(2)'
        // test to fill the form
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) .ng-untouched').should('have.value',this.data.name)

        //test to validate attributes on webElement
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlenght',2)
        
        //test to check diaable radio
        cy.get('#inlineRadio3').should('be.disabled')  

        //select multiple product
       this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        
    })
})
*/

import Homepage from '../PageObjects/HomePage'
import ProductsPage from '../PageObjects/ProductsPage'
/// <reference types="Cypress" />
describe('TestSuite',function(){
    before(function(){})

    //On Landing Application page
    it('Test to validate functionalies on page', function(){
        const homePage = new Homepage()
        const productsPage = new ProductsPage
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
         //'form input.form-control:nth-child(1)'
        //'input[name="name"]:nth-child(2)'

        // inpute data to fill the form
        homePage.getEditBox().type("Vic")

        // select genger
        homePage.getGender().select('Male')

        //Validation on text box
        homePage.getTowWayDataBinding().should('have.value','Vic')
        
        //check diaable radio button
        homePage.getEntrepreneur().should('be.disabled')  

        //shop for product and it to cart
        homePage.getShopTap().click()
        cy.selectProduct('Blackberry')
        // selectProduct is my customised functions


        //validatation on products page
        productsPage.checkOutButton().click()

       productsPage.containsCheckbox().click
        // cy.get(':nth-child(3) > :nth-child(5)').click

    })

})
