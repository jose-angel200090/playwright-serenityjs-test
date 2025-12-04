Feature: Browse the catalog

  Background:
    Given Colin has logged on to the application

  Scenario: Colin reviews our range of products
    When Colin is browsing the product catalog
    Then he should be presented with 6 products

  Scenario: Colin views information about each product
    When Colin is browsing the product catalog
    Then he should be presented with the following products:
      | Title                             | Price  |
      | Sauce Labs Backpack               | $29.99 |
      | Sauce Labs Bike Light             | $9.99  |
      | Sauce Labs Bolt T-Shirt           | $15.99 |
      | Sauce Labs Fleece Jacket          | $49.99 |
      | Sauce Labs Onesie                 | $7.99  |
      | Test.allTheThings() T-Shirt (Red) | $15.99 |

  Scenario Outline: Colin views the details for specific products
    Given Colin is browsing the product catalog
    When Colin opens the product details for "<Product Name>"
    Then he should see a product with the following details:
      | Name           | Price   | Description   |
      | <Product Name> | <Price> | <Description> |

    Examples:
      | Product Name             | Price   | Description                                                                   |
      | Sauce Labs Backpack      | $29.99  | carry.allTheThings()                                                          |
      | Sauce Labs Bike Light    | $9.99   | A red light isn't the desired state in testing but it sure helps when riding  |
      | Sauce Labs Bolt T-Shirt  | $15.99  | Get your testing superhero                                                    |
      | Sauce Labs Fleece Jacket | $49.99  | a midweight quarter-zip fleece jacket                                         |