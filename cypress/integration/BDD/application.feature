Feature: Application End to end validation

    Application Regression

    Scenario: Ecommerce product purchase
    Given User Open Ecommerce Application Page
    When  User add item to Cart
    Then Item selected should be on the Cart
