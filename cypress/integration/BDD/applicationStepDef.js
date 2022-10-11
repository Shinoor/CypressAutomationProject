

/// <reference types="Cypress" />
import Homepage from '../../../../support/PageObjects/HomePage'
import ProductsPage from '../../../../support/PageObjects/ProductsPage'


import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";


const homePage = new Homepage()
const productsPage = new ProductsPage  
Given('User Open Ecommerce Application Page',()=>{

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})
//User add item to Cart
When('User add item to Cart',()=>{
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

})
Then('Item selected should be on the Cart',()=>{
     //validatation on products page
     productsPage.checkOutButton().click()

     productsPage.containsCheckbox().click
      // cy.get(':nth-child(3) > :nth-child(5)').click
})