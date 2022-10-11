class ProductsPage{
    checkOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    containsCheckbox(){
        return cy.contains('Checkout')
    }

}
export default ProductsPage