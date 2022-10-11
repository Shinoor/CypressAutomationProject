class Homepage{

    getEditBox(){
        return cy.get(':nth-child(1) > .form-control')
    }
    getTowWayDataBinding(){
        return cy.get(':nth-child(4) .ng-untouched')
    }
    getGender(){
        return cy.get('select')
    }
    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }
    getShopTap(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}
export default Homepage